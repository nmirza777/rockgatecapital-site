"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig, getExternalLinkCaveat } from "@/lib/siteConfig";
import { basePath } from "@/lib/basePath";

const SERVICE_OPTIONS = [
  "Residential",
  "Buy-to-let",
  "Bridging",
  "Commercial",
  "Not sure yet",
];

const TEASER_DISMISSED_KEY = "rg-assistant-teaser-dismissed";

export default function LeadAssistant() {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [stage, setStage] = useState("form"); // "form" | "caveat" | "booking"
  const [form, setForm] = useState({ name: "", contact: "", service: SERVICE_OPTIONS[0] });
  const bookingRef = useRef(null);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(TEASER_DISMISSED_KEY) === "1";
    } catch {
      // sessionStorage unavailable — just show the teaser
    }
    if (dismissed) return;
    const timer = setTimeout(() => setShowTeaser(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  function dismissTeaser() {
    setShowTeaser(false);
    try {
      sessionStorage.setItem(TEASER_DISMISSED_KEY, "1");
    } catch {
      // ignore
    }
  }

  function openPanel() {
    dismissTeaser();
    setOpen(true);
  }

  function closePanel() {
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;
    setStage("caveat");
  }

  useEffect(() => {
    if (stage !== "booking") return;

    let cancelled = false;
    const isEmail = form.contact.includes("@");

    function tryInit(attemptsLeft) {
      if (cancelled) return;
      if (window.Calendly && bookingRef.current) {
        bookingRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: siteConfig.calendlyUrl,
          parentElement: bookingRef.current,
          prefill: {
            name: form.name,
            email: isEmail ? form.contact : undefined,
          },
        });
      } else if (attemptsLeft > 0) {
        setTimeout(() => tryInit(attemptsLeft - 1), 300);
      }
    }

    tryInit(20);
    return () => {
      cancelled = true;
    };
  }, [stage, form.name, form.contact]);

  return (
    <div className="lead-assistant">
      {showTeaser && !open && (
        <div className="lead-assistant__teaser">
          <button
            type="button"
            className="lead-assistant__teaser-close"
            onClick={dismissTeaser}
            aria-label="Dismiss"
          >
            ×
          </button>
          <p>👋 Looking for a mortgage? I can help you book a quick call.</p>
          <button type="button" className="button button--accent" onClick={openPanel}>
            Get started
          </button>
        </div>
      )}

      {!open && (
        <button
          type="button"
          className="lead-assistant__toggle"
          onClick={openPanel}
          aria-label="Open booking assistant"
        >
          <span aria-hidden="true">💬</span>
        </button>
      )}

      {open && (
        <div className="lead-assistant__panel" role="dialog" aria-label="Book a call">
          <div className="lead-assistant__header">
            <span>
              {stage === "form" && "Let's find you a time"}
              {stage === "caveat" && "Before we continue"}
              {stage === "booking" && `Great, ${form.name.split(" ")[0]} — pick a slot`}
            </span>
            <button
              type="button"
              className="lead-assistant__close"
              onClick={closePanel}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {stage === "form" && (
            <form className="lead-assistant__form" onSubmit={handleSubmit}>
              <p className="lead-assistant__intro">
                Tell us a little about what you&apos;re looking to do, and we&apos;ll find a time
                for a quick call.
              </p>
              <label>
                Name
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label>
                Email or phone
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                />
              </label>
              <label>
                What are you looking to do?
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="button button--accent">
                Continue
              </button>
              <p className="lead-assistant__privacy-note">
                We&apos;ll only use these details to arrange your call. Read our{" "}
                <a href={`${basePath}/privacy`}>Privacy Policy</a>. Before proceeding, please also
                read our{" "}
                <a href={`${basePath}/terms-of-business`}>Terms of Business</a>, which sets out
                our services and fees.
              </p>
            </form>
          )}

          {stage === "caveat" && (
            <div className="lead-assistant__caveat">
              <p>{getExternalLinkCaveat()}</p>
              <button
                type="button"
                className="button button--accent"
                onClick={() => setStage("booking")}
              >
                Continue to Calendly
              </button>
              <button
                type="button"
                className="lead-assistant__caveat-back"
                onClick={() => setStage("form")}
              >
                ← Back
              </button>
            </div>
          )}

          {stage === "booking" && <div className="lead-assistant__booking" ref={bookingRef} />}
        </div>
      )}
    </div>
  );
}
