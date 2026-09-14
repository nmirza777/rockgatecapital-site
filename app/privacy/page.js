import styles from "./privacy.module.css";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { siteConfig, getComplaintsStatement } from "@/lib/siteConfig";

export const metadata = {
  title: `Privacy Notice | ${siteConfig.companyName}`,
  description: `Privacy Notice for ${siteConfig.companyName}, an Appointed Representative of Connect IFA Ltd.`,
  alternates: { canonical: "https://rockgatecapital.co.uk/privacy" },
};

const CONTENTS = [
  { href: "#who-we-are", label: "Who we are" },
  { href: "#website", label: "Website" },
  { href: "#information", label: "What information we collect" },
  { href: "#collection", label: "How the information is collected" },
  { href: "#use", label: "How the information is used" },
  { href: "#sharing", label: "Who your information is shared with" },
  { href: "#marketing", label: "Marketing" },
  { href: "#complaints", label: "Complaints" },
  { href: "#changes", label: "Changes to this policy" },
  { href: "#ownership", label: "Changes of ownership" },
  { href: "#access", label: "Access" },
];

export default function PrivacyPolicy() {
  return (
    <main id="main-content">
      <section className={styles.policyHero}>
        <div className="container">
          <div className="section-label">Legal information</div>
          <h1 className={styles.pageTitle}>Privacy Notice</h1>
          <p>
            {siteConfig.companyName} is committed to protecting your privacy. This notice, together
            with any document referred to within it, sets out the basis on which we use the
            personal information you supply to us directly, or that is supplied to us by a third
            party. Last updated: {siteConfig.privacyLastUpdated}.
          </p>
        </div>
      </section>

      <section className={styles.policy}>
        <div className={`container ${styles.policyGrid}`}>
          <nav className={styles.contents} aria-label="Privacy notice contents">
            <strong>Contents</strong>
            {CONTENTS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div>
            <section className={styles.policySection} id="who-we-are">
              <h2 className={styles.sectionHeading}>Who we are</h2>
              <p>
                {siteConfig.companyName} is responsible for the processing of the personal
                information you supply to us, and processes it in accordance with the UK General
                Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We are
                registered with the Information Commissioner&apos;s Office under registration
                number <strong>{siteConfig.icoRegistration}</strong>.
              </p>
              <p>
                {siteConfig.companyName} is an Appointed Representative of{" "}
                <strong>{siteConfig.principalName}</strong>, which is authorised and regulated by
                the Financial Conduct Authority. {siteConfig.companyName} is entered on the
                Financial Services Register under Firm Reference Number{" "}
                <strong>{siteConfig.rockgateFrn}</strong>. Company number:{" "}
                {siteConfig.companyNumber}. Registered office: {siteConfig.registeredOffice}.
              </p>
            </section>

            <section className={styles.policySection} id="website">
              <h2 className={styles.sectionHeading}>Website</h2>
              <p>
                We have structured our website so that you can visit it without identifying
                yourself or revealing any personal information.
              </p>
              <p>
                This website does not use analytics, tracking or profiling cookies to build a
                personal browsing profile. The one exception is the Calendly booking calendar
                embedded in the contact section, which may set its own cookies to let you book a
                call directly — see &ldquo;Who your information is shared with&rdquo; below.
              </p>
              <p>
                Should you contact us by telephone, email, WhatsApp or by booking a call through
                Calendly, we collect and store the personal information you provide, via secure
                systems, to enable us to respond to and fulfil your request.
              </p>
              <p>
                Any personal information you choose to disclose to us through this website will be
                processed in accordance with this privacy notice.
              </p>
            </section>

            <section className={styles.policySection} id="information">
              <h2 className={styles.sectionHeading}>What information we collect</h2>
              <p>
                To arrange a mortgage, loan or other plan or service for you, we will need to
                collect a range of personal data and financial information. We will only collect
                information that is pertinent to the service we provide, and will hold it only for
                as long as necessary.
              </p>
              <p>
                We may also collect card details to make payments for services and to pass to
                relevant parties such as lenders and surveyors. This information is not retained
                after payment has been made.
              </p>
              <p>
                We retain and process your personal information based on our Terms of Business with
                you, our statutory and legal obligations, our regulatory requirements, and our
                legitimate business interests.
              </p>
              <div className={styles.important}>
                Please do not send bank statements, identity documents or other sensitive personal
                data through ordinary email or WhatsApp until a secure method has been agreed.
              </div>
            </section>

            <section className={styles.policySection} id="collection">
              <h2 className={styles.sectionHeading}>How the information is collected</h2>
              <p>
                We collect information via a variety of means, including telephone calls, email,
                text messages, WhatsApp, post and face-to-face meetings. We may also monitor and
                record telephone conversations with you.
              </p>
              <p>
                Information may be collected directly by us, or from third parties to whom you have
                agreed may pass your personal information to us.
              </p>
            </section>

            <section className={styles.policySection} id="use">
              <h2 className={styles.sectionHeading}>How the information is used</h2>
              <p>
                We use personal data to process your request for a mortgage, loan or other plan or
                service. You may advise us at any time should you no longer wish us to use your
                data. We use the information in several ways, including but not limited to:
              </p>
              <ul>
                <li>letting you know about changes to our products and services;</li>
                <li>confirmation of your identity;</li>
                <li>staff training, and fraud investigation and prevention;</li>
                <li>confirmation of the documents and information you provide to us;</li>
                <li>keeping our records up to date and complying with regulatory and legal obligations;</li>
                <li>administration and review of the mortgages, finance and products we have arranged for you;</li>
                <li>assessing your needs for protection plans in connection with your borrowing;</li>
                <li>conducting surveys to help us improve our service.</li>
              </ul>
              <p>
                We do not make decisions that have legal or similarly significant effects on you
                solely by automated means through this website.
              </p>
            </section>

            <section className={styles.policySection} id="sharing">
              <h2 className={styles.sectionHeading}>Who your information is shared with</h2>
              <p>
                To arrange a mortgage, loan or other plan or service, we will need to share your
                personal data with relevant third parties. These include mortgage lenders, product
                providers, surveyors, solicitors and other parties relevant to your application.
              </p>
              <p>
                Where your data is shared with a lender or provider, we recommend you also read
                their own privacy notice. This can usually be found on the lender&apos;s website, or
                via our principal&apos;s central page:{" "}
                <a
                  href="https://connectbrokers.co.uk/lenderprivacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  connectbrokers.co.uk/lenderprivacy
                </a>
                .
              </p>
              <p>
                As an Appointed Representative of {siteConfig.principalName}, information about you
                will be shared with {siteConfig.principalName}, our Network, who assist us with
                processing your application and for compliance oversight purposes.
              </p>
              <p>
                If your enquiry came from an introducer, we may share limited information with them
                for the purposes of keeping them informed as to how your application is progressing.
              </p>
              <p>
                We use third-party software systems, including cloud-based storage, to help manage
                applications and to process and verify the personal information you supply to us.
                Our software suppliers are required to store data in the UK, comply with UK data
                protection law, and use your details only to fulfil the contracted service.
              </p>
              <p>
                The contact section of this website also embeds a Calendly booking calendar so you
                can arrange a call directly. Calendly may set cookies and process technical
                information (such as IP address and browser details) to provide that service, and
                if you book a call you will share your name, email address and chosen time with
                them. Calendly&apos;s own privacy policy applies to that processing.
              </p>
              <p>We do not sell personal information.</p>
            </section>

            <section className={styles.policySection} id="marketing">
              <h2 className={styles.sectionHeading}>Marketing</h2>
              <p>
                We will seek your explicit consent before providing you with general market news,
                updates, or information about products and services that are not connected with your
                specific mortgage, loan or other plan. Using our services does not automatically
                opt you in to marketing.
              </p>
              <p>
                We will obtain explicit consent from you either verbally, via our website, at
                meetings, by email, or by completion of a consent form, and will keep a record of
                that consent.
              </p>
              <p>
                Marketing may include emails, telephone calls and postal marketing. You may update
                your preferences, or withdraw consent, at any time.
              </p>
            </section>

            <section className={styles.policySection} id="complaints">
              <h2 className={styles.sectionHeading}>Complaints</h2>
              <p>
                Please contact us first if you have a question or concern about how your personal
                information has been handled — see &ldquo;Access&rdquo; below. You also have the
                right to complain to the Information Commissioner&apos;s Office, the UK&apos;s
                data-protection regulator, whose current contact details are available on the ICO
                website.
              </p>

              {/* Complaints wording approved by Connect IFA Ltd for the ESIS template (supplied 27 August 2026) — do not alter without checking with Connect first. */}
              <h3 className={styles.subHeading}>What to do if you have a complaint about our advice or service</h3>
              <p>{getComplaintsStatement()}</p>
              <p>
                Financial Ombudsman Service:{" "}
                <a
                  href="https://www.financial-ombudsman.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.financial-ombudsman.org.uk
                </a>
              </p>
            </section>

            <section className={styles.policySection} id="changes">
              <h2 className={styles.sectionHeading}>Changes to this policy</h2>
              <p>
                It may be necessary to update this privacy notice from time to time to meet legal,
                regulatory and commercial requirements. Please check this page from time to time for
                any changes. Personal data collected prior to a change will not be affected by it
                without your permission.
              </p>
            </section>

            <section className={styles.policySection} id="ownership">
              <h2 className={styles.sectionHeading}>Changes of ownership</h2>
              <p>
                {siteConfig.companyName} may from time to time sell or transfer control of the
                company. Personal data relevant to the part of the business being sold or
                transferred will be transferred to the new owner or controlling party, and will
                continue to be used under the terms of this policy for the purposes it was
                originally supplied for.
              </p>
            </section>

            <section className={styles.policySection} id="access">
              <h2 className={styles.sectionHeading}>Access</h2>
              <p>
                You have a right to access any personal information we hold about you. To request
                access, or for any questions about this privacy notice, please contact:
              </p>
              <div className={styles.rightsBox}>
                <p>
                  <strong>{siteConfig.companyName}</strong>
                  <br />
                  {siteConfig.registeredOffice}
                  <br />
                  Tel: {siteConfig.telephoneDisplay}
                  <br />
                  Email: <ObfuscatedEmail />
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
