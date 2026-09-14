"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig, getExternalLinkCaveat } from "@/lib/siteConfig";
import { basePath } from "@/lib/basePath";

export default function CalendlyBooking() {
  const [confirmed, setConfirmed] = useState(false);
  const bookingRef = useRef(null);

  useEffect(() => {
    if (!confirmed) return;

    let cancelled = false;

    function tryInit(attemptsLeft) {
      if (cancelled) return;
      if (window.Calendly && bookingRef.current) {
        bookingRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: siteConfig.calendlyUrl,
          parentElement: bookingRef.current,
        });
      } else if (attemptsLeft > 0) {
        setTimeout(() => tryInit(attemptsLeft - 1), 300);
      }
    }

    tryInit(20);
    return () => {
      cancelled = true;
    };
  }, [confirmed]);

  if (!confirmed) {
    return (
      <div className="calendly-gate">
        <p className="calendly-gate__caveat">{getExternalLinkCaveat()}</p>
        <button
          type="button"
          className="button button--accent"
          onClick={() => setConfirmed(true)}
        >
          Show available times
        </button>
        <p className="calendly-gate__tob-note">
          Before proceeding, please read our{" "}
          <a href={`${basePath}/terms-of-business`}>Terms of Business</a>, which sets out our
          services and fees.
        </p>
      </div>
    );
  }

  return (
    <div
      className="calendly-widget-embed"
      ref={bookingRef}
      style={{ minWidth: "320px", height: "660px" }}
    />
  );
}
