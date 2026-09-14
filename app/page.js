import Image from "next/image";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import CalendlyBooking from "@/components/CalendlyBooking";
import { siteConfig, telHref } from "@/lib/siteConfig";
import { basePath } from "@/lib/basePath";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="container hero__grid">
          <div>
            <div className="eyebrow">
              Residential · Buy-to-let · Portfolio Landlords · Bridging · Commercial
            </div>
            <h1>Specialist property finance, arranged properly.</h1>
            <p className="hero__copy">
              Mortgage advice and specialist property finance for homeowners, individual and
              portfolio landlords with complex shareholding structures, property investors,
              developers and business owners. Clear recommendations, carefully researched options
              and one point of contact from enquiry to completion.
            </p>
            <div className="hero__actions">
              <a className="button button--accent" href="#contact">
                Contact us
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="m13.2 5.3 5.3 5.3H3v2h15.5l-5.3 5.3 1.4 1.4L22.3 12l-7.7-8.1-1.4 1.4Z"
                  />
                </svg>
              </a>
              <a className="button button--outline" href="#services">
                Our services
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-art__architecture" aria-hidden="true">
              <div className="hero-art__roof"></div>
              <div className="hero-art__building"></div>
              <div className="hero-art__gate"></div>
            </div>
            <div className="hero-art__label">
              <div>
                <strong>Finance that opens doors.</strong>
                <span>Professional advice and support from first conversation to completion.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-strip">
          <div className="container trust-strip__grid">
            <div className="trust-item">
              <span className="trust-item__number">01</span>
              <span>A named contact throughout</span>
            </div>
            <div className="trust-item">
              <span className="trust-item__number">02</span>
              <span>Clear next steps and realistic timescales</span>
            </div>
            <div className="trust-item">
              <span className="trust-item__number">03</span>
              <span>Careful preparation of every case</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section services" id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-label">What we arrange</div>
              <h2 className="section-title">Four routes into property finance, one point of contact.</h2>
            </div>
            <p className="section-copy">
              We start with what you are trying to achieve, then assess the property, your
              circumstances, the purpose of the borrowing and the time available. From there, we
              research appropriate options from the lenders and products available to us.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-card__icon">R</div>
              <h3>Residential</h3>
              <p>
                Mortgage advice for first-time buyers, home movers and remortgages, including cases
                involving more complex income.
              </p>
              <a className="service-card__link" href="#contact">
                Discuss residential finance →
              </a>
            </article>

            <article className="service-card">
              <div className="service-card__icon">B</div>
              <h3>Buy-to-let</h3>
              <p>
                Finance for individual and portfolio landlords, limited-company structures, HMOs
                and selected specialist property types.
              </p>
              <a className="service-card__link" href="#contact">
                Discuss buy-to-let →
              </a>
            </article>

            <article className="service-card">
              <div className="service-card__icon">Br</div>
              <h3>Bridging</h3>
              <p>
                Short-term funding for auctions, chain breaks, refurbishment and situations where
                timing is critical.
              </p>
              <a className="service-card__link" href="#contact">
                Discuss bridging →
              </a>
            </article>

            <article className="service-card">
              <div className="service-card__icon">C</div>
              <h3>Commercial</h3>
              <p>
                Owner-occupied premises, semi-commercial property and investment purchases, subject
                to lender criteria.
              </p>
              <a className="service-card__link" href="#contact">
                Discuss commercial finance →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section approach">
        <div className="container approach__grid">
          <div className="approach-visual" aria-hidden="true">
            <div className="approach-visual__caption">The Rockgate approach</div>
            <div className="approach-visual__arch"></div>
            <div className="approach-visual__line"></div>
          </div>

          <div className="approach__content" id="approach">
            <div className="section-label">Our approach</div>
            <h2 className="section-title">Advice built around the case, not the product.</h2>
            <p>
              We start with your objectives and circumstances, then assess the property, timescale
              and relevant lender criteria. For regulated mortgages we provide advice and
              recommendations; across specialist finance we identify and arrange appropriate routes
              within the services and permissions available to us.
            </p>

            <div className="approach-list">
              <div className="approach-list__item">
                <b>1</b>
                <div>
                  <strong>Understand your objectives</strong>
                  <span>The property, your circumstances, the purpose of the borrowing and the deadline.</span>
                </div>
              </div>
              <div className="approach-list__item">
                <b>2</b>
                <div>
                  <strong>Research suitable options</strong>
                  <span>Assess appropriate lenders, products and structures available to us for your circumstances.</span>
                </div>
              </div>
              <div className="approach-list__item">
                <b>3</b>
                <div>
                  <strong>Recommend and arrange</strong>
                  <span>Explain the proposed route, prepare the case carefully and keep you informed through to completion.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section adviser" id="about">
        <div className="container adviser__grid">
          <div className="adviser__photo">
            <Image
              src={`${basePath}/advisor.jpg`}
              alt="Naveed Mirza, Founder and Director of Rockgate Capital"
              loading="lazy"
              width={1122}
              height={1402}
            />
          </div>
          <div className="adviser__content">
            <div className="section-label">Who you&apos;re working with</div>
            <h2 className="section-title">Naveed Mirza CeMAP, BEng</h2>
            <p className="adviser__role">Founder &amp; Director</p>
            <p className="adviser__credential">
              CeMAP qualified through the London Institute of Banking &amp; Finance (LIBF)
            </p>
            <a
              href={siteConfig.libfBadgeVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="adviser__badge-link"
              aria-label="Verify LIBF Certified Mortgage Adviser badge on Credly"
            >
              <Image
                className="adviser__badge"
                src={`${basePath}/libf-badge.png`}
                alt="LIBF Certified Mortgage Adviser badge — click to verify on Credly"
                loading="lazy"
                width={84}
                height={84}
              />
            </a>
            <p>
              Naveed founded Rockgate Capital after 25 years in property development, as a landlord
              and developer in his own right — heavy rebuilds, large extensions and renewable
              energy installations among them. That hands-on experience shapes every case he takes
              on.
            </p>
            <p>
              He works personally with each client from the first conversation through to
              completion, combining practical property knowledge with the regulated advice and
              careful preparation every case deserves.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section expect">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-label">What you can expect</div>
              <h2 className="section-title">Plain answers, specific next steps.</h2>
            </div>
            <p className="section-copy">
              You should understand why a route is being considered, what it is likely to cost and
              what could affect the outcome. We keep the advice and the process clear.
            </p>
          </div>

          <div className="expect-grid">
            <article className="expect-card">
              <div className="expect-card__quote">01</div>
              <h3>Clear recommendations</h3>
              <p>We explain the proposed solution, why it may be suitable, the key costs and the important conditions.</p>
            </article>
            <article className="expect-card">
              <div className="expect-card__quote">02</div>
              <h3>Transparent process</h3>
              <p>Clear next steps, realistic timescales and an explanation of what is still subject to lender assessment or approval.</p>
            </article>
            <article className="expect-card">
              <div className="expect-card__quote">03</div>
              <h3>Careful case management</h3>
              <p>We identify gaps early, present the relevant facts clearly and stay close to the case as it progresses.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2>Let&apos;s find the right route forward.</h2>
            <p>
              Tell us what you are looking to achieve. We&apos;ll explain how we may be able to
              help, what we need to assess and the next practical step.
            </p>
          </div>
          <div className="cta__actions">
            <a className="button button--accent" href="#contact">
              Contact us
            </a>
            <a className="button button--outline" href={telHref()}>
              Call <span>{siteConfig.telephoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="content-section contact" id="contact">
        <div className="container contact__grid">
          <div className="contact__intro">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Tell us what you are trying to achieve.</h2>
            <p>
              Start with the property, the amount required and any important deadline. Please do
              not send bank statements, identity documents or other sensitive information by
              ordinary email until a secure method has been agreed.
            </p>
            <p className="privacy-note">
              We use enquiry information to respond to you and assess the next step. Read our{" "}
              <a href={`${basePath}/privacy`}>Privacy Policy</a>.
            </p>
          </div>

          <div className="contact-panel">
            <div className="contact-panel__item">
              <div className="contact-panel__label">Telephone</div>
              <a className="contact-panel__value" href={telHref()}>
                <span>{siteConfig.telephoneDisplay}</span>
              </a>
            </div>
            <div className="contact-panel__item">
              <div className="contact-panel__label">Email</div>
              <ObfuscatedEmail className="contact-panel__value" />
            </div>
            <div className="contact-panel__item">
              <div className="contact-panel__label">WhatsApp</div>
              <a
                className="contact-panel__value"
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Rockgate Capital
              </a>
            </div>
            <div className="contact-panel__item">
              <div className="contact-panel__label">Availability</div>
              <div className="contact-panel__value">
                Initial enquiries welcome by telephone, email or WhatsApp, or book a call directly
                below.
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="calendly-block">
            <div className="section-label">Book a call</div>
            <h3 className="calendly-block__title">Prefer to pick a time yourself?</h3>
            <p className="risk-warning-banner">
              Your property may be repossessed if you do not keep up repayments on your mortgage.
            </p>
            <CalendlyBooking />
          </div>
        </div>
      </section>
    </main>
  );
}
