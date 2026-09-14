"use client";

import { useEffect, useRef, useState } from "react";
import BrandMark from "./BrandMark";
import ObfuscatedEmail from "./ObfuscatedEmail";
import { siteConfig, telHref, whatsappHref } from "@/lib/siteConfig";
import { basePath } from "@/lib/basePath";

const NAV_LINKS = [
  { href: `${basePath}/#about`, label: "About" },
  { href: `${basePath}/#services`, label: "Services" },
  { href: `${basePath}/#approach`, label: "Approach" },
  { href: `${basePath}/#contact`, label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleButtonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    if (menuOpen) firstLinkRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1020) setMenuOpen(false);
    };
    const handleKeydown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="contact-bar">
        <div className="container contact-bar__inner">
          <div className="contact-bar__group">
            <ObfuscatedEmail
              className="contact-link contact-bar__email"
              iconBefore={
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M2 5h20v14H2V5Zm2 2v.5l8 5.2 8-5.2V7H4Zm16 10V9.9l-8 5.1-8-5.1V17h16Z"
                  />
                </svg>
              }
            />
            <a className="contact-link" href={telHref()}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.6 2 10 5.4 7.8 7.6c.9 2 2.5 3.6 4.6 4.6l2.2-2.2L18 13.4l-1.4 1.4c-.9.9-2.2 1.2-3.4.8C8 14 4 10 2.4 4.8 2 3.6 2.3 2.3 3.2 1.4L4.6 0 6.6 2Z"
                />
              </svg>
              <span>{siteConfig.telephoneDisplay}</span>
            </a>
          </div>

          <a className="contact-link" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2 22l5.6-1.5A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.3.9.9-3.2-.2-.3A7.7 7.7 0 1 1 12 19.7Zm4.2-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-1.3-.5-2.4-1.6-3.1-2.8-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.2-.5 0-.1 0-.3-.1-.4L9.7 7.6c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1.2 1.9-1.1 3 .2 2.7 2.4 5.3 5 6.4 1.8.8 3.1 1 4.2.8 1-.2 1.9-.8 2.3-1.7.2-.4.2-.9.1-1-.2-.2-.3-.2-.6-.3l-1.6-.8Z"
              />
            </svg>
            <span>WhatsApp us</span>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav">
          <a className="brand" href={`${basePath}/#top`} aria-label="Rockgate Capital home">
            <BrandMark className="brand__mark" fill="#0F241F" />
            <span className="brand__name">
              <span className="brand__rockgate">Rockgate</span>
              <span className="brand__capital">Capital Ltd</span>
            </span>
          </a>

          <button
            ref={toggleButtonRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle__bars">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <BrandMark className="menu-toggle__mark" fill="#0F241F" />
          </button>

          <nav
            className={`nav__links${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="button button--accent"
              href={`${basePath}/#contact`}
              onClick={() => setMenuOpen(false)}
            >
              Enquire
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
