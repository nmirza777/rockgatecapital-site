import styles from "../privacy/privacy.module.css";
import { siteConfig, getCommissionDisclosureStatement } from "@/lib/siteConfig";
import { basePath } from "@/lib/basePath";

export const metadata = {
  title: `Terms of Business | ${siteConfig.companyName}`,
  description: `Terms of Business for ${siteConfig.companyName}, an Appointed Representative of Connect IFA Ltd.`,
  alternates: { canonical: "https://rockgatecapital.co.uk/terms-of-business" },
};

const CONTENTS = [
  { href: "#about-us", label: "About us" },
  { href: "#services-fees", label: "Our services and fees" },
  { href: "#commission", label: "Commission disclosure" },
  { href: "#marketing", label: "Marketing" },
  { href: "#ethical-policy", label: "Our ethical policy" },
  { href: "#payment", label: "Payment and refund of fees" },
  { href: "#termination", label: "Termination" },
  { href: "#restrictions", label: "Restrictions and legal jurisdiction" },
  { href: "#complaints", label: "Complaints" },
  { href: "#fscs", label: "Financial Services Compensation Scheme" },
  { href: "#data-protection", label: "Data protection" },
];

export default function TermsOfBusiness() {
  return (
    <main id="main-content">
      <section className={styles.policyHero}>
        <div className="container">
          <div className="section-label">Legal information</div>
          <h1 className={styles.pageTitle}>Terms of Business</h1>
          <p>
            This document explains the mortgage service {siteConfig.companyName} offers, how you
            will pay for it, and the terms that apply. Please read it before instructing us.
          </p>
        </div>
      </section>

      <section className={styles.policy}>
        <div className={`container ${styles.policyGrid}`}>
          <nav className={styles.contents} aria-label="Terms of Business contents">
            <strong>Contents</strong>
            {CONTENTS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div>
            <section className={styles.policySection} id="about-us">
              <h2 className={styles.sectionHeading}>About us</h2>
              <p>
                {siteConfig.companyName} is an Appointed Representative (AR) of{" "}
                {siteConfig.principalName}, {siteConfig.complaintsNetworkAddress}, who are
                authorised and regulated by the Financial Conduct Authority (FCA).{" "}
                {siteConfig.principalName}&apos;s firm reference number is{" "}
                {siteConfig.principalFrn}. Most Business Buy to Let mortgages are not regulated by
                the FCA. You can check our details on the FCA&apos;s register at{" "}
                <a href={siteConfig.rockgateRegisterUrl} target="_blank" rel="noopener noreferrer">
                  register.fca.org.uk
                </a>{" "}
                or by contacting the FCA on 0800 111 6768.
              </p>
              <p>
                The FCA is the independent watchdog that regulates financial services. Use this
                document to decide if our services are right for you. It explains the service(s)
                we offer and how you will pay for them. Our permitted business includes advising
                on and arranging mortgages, as follows:
              </p>
              <ul>
                <li>
                  We are not limited in the range of mortgage products we will consider for you in
                  relation to regulated 1st charge and 2nd charge loans raised for personal or
                  business purposes.
                </li>
                <li>
                  We will consider remortgages, further advances, 2nd charge loans and unsecured
                  loan options if you wish to increase your borrowing on an existing property.
                </li>
                <li>
                  We offer a comprehensive range of mortgages from lenders across the market, but
                  not deals you can only obtain by going direct to a lender.
                </li>
                <li>
                  We can arrange other finance such as Business Buy to Let mortgages, Commercial
                  and Development Finance, and Bridging Finance.
                </li>
                <li>
                  We offer advice on the regulated products we recommend. In some circumstances we
                  may refer you to another party to provide the advice and recommendation where it
                  is appropriate to do so.
                </li>
              </ul>
            </section>

            <section className={styles.policySection} id="services-fees">
              <h2 className={styles.sectionHeading}>Our services and fees</h2>
              <p>
                <strong>Initial evaluation stage — no charge.</strong> We will consider your
                financial circumstances and requirements, then provide you with information on the
                most competitive lender and product options suited to you. We will provide an
                Illustration or ESIS document (European Standardised Information Sheet) setting
                out in writing all the features and costs of any mortgage or loan we recommend,
                and arrange an initial decision in principle with the recommended lender.
              </p>
              <p>
                <strong>Processing stage.</strong> On receipt of your instruction to proceed, we
                will complete the application and submit it to the lender on your behalf, monitor
                its progress, and keep you updated until the lender issues a formal loan offer.
              </p>
              <p>
                <strong>Mortgage offer stage.</strong> There will be a fee for arranging your
                mortgage; the precise amount depends on your circumstances, and we estimate it to
                be £999 for straightforward cases. This fee becomes payable once we have
                successfully secured your mortgage offer from the lender. For more complex cases —
                including portfolio landlords and complex shareholding structures — we will confirm
                a different fee in writing before you proceed with an application.
              </p>
              <p>
                Where we recommend a product from a lender who wishes to deal directly with you,
                or you choose to deal directly with a lender we have recommended, our fee as
                described above still applies.
              </p>
            </section>

            <section className={styles.policySection} id="commission">
              <h2 className={styles.sectionHeading}>Commission disclosure</h2>
              <p>{getCommissionDisclosureStatement()}</p>
            </section>

            <section className={styles.policySection} id="marketing">
              <h2 className={styles.sectionHeading}>Marketing</h2>
              <p>
                We would like to keep in touch with you from time to time about products and
                services that may be of interest to you, such as new lender launches, criteria
                changes and general market updates. We will only do this with your prior, express
                consent, which we will ask for separately and which you may withdraw at any time.
                If you do not consent, we will still contact you in relation to any application
                you have asked us to arrange, and {siteConfig.principalName} may still contact you
                to obtain feedback on our service.
              </p>
            </section>

            <section className={styles.policySection} id="ethical-policy">
              <h2 className={styles.sectionHeading}>Our ethical policy</h2>
              <p>
                We aim to provide the highest standard of advice and service possible. The
                interests of our customers are paramount to us, and to achieve this we will:
              </p>
              <ul>
                <li>Be open, honest and transparent in the way we deal with you.</li>
                <li>Not place our interests above yours.</li>
                <li>Communicate clearly, promptly and without jargon.</li>
                <li>Obtain feedback from you to help identify any improvements required.</li>
              </ul>
            </section>

            <section className={styles.policySection} id="payment">
              <h2 className={styles.sectionHeading}>Payment and refund of fees</h2>
              <p>
                We offer the facility to pay our fees by direct bank transfer or by debit or
                credit card. We will only use card details to process payments due to the lender,
                surveyor or other third party as required to process your application, as detailed
                in the mortgage illustration. We reserve the right to charge interest at 8% per
                annum on any amounts due to us that remain unpaid after the due date.
              </p>
              <p>Please note that fees are not refundable.</p>
            </section>

            <section className={styles.policySection} id="termination">
              <h2 className={styles.sectionHeading}>Termination</h2>
              <p>
                The authority to act on your behalf may be terminated at any time without penalty
                by either party giving 7 days&apos; notice in writing to the other, but without
                prejudice to the completion of transactions already initiated. Any transactions
                effected before termination, and a due proportion of any period charges for
                services, shall be settled to that date.
              </p>
              <p>
                We shall not be in breach of this agreement, and shall not incur any liability to
                you, if there is any failure to perform our duties due to circumstances reasonably
                beyond our control.
              </p>
            </section>

            <section className={styles.policySection} id="restrictions">
              <h2 className={styles.sectionHeading}>Restrictions and legal jurisdiction</h2>
              <p>
                Please be aware that the FCA does not regulate all the mortgages and property
                finance we are able to arrange — for example, the FCA do not normally regulate
                Business Buy to Let mortgages. We are committed to providing the same high
                standards even when dealing with your requirements for non-regulated products.
              </p>
              <p>
                This agreement is governed by and construed in accordance with the laws of England
                and Wales, and any dispute is subject to the exclusive jurisdiction of the courts
                of England and Wales.
              </p>
            </section>

            <section className={styles.policySection} id="complaints">
              <h2 className={styles.sectionHeading}>Complaints</h2>
              <p>
                Details of what to do if you wish to complain about our advice or service are set
                out on our <a href={`${basePath}/complaints`}>Complaints</a> page.
              </p>
            </section>

            <section className={styles.policySection} id="fscs">
              <h2 className={styles.sectionHeading}>
                Are we covered by the Financial Services Compensation Scheme (FSCS)?
              </h2>
              <p>
                We are covered by the FSCS. You may be entitled to compensation from the scheme if
                we cannot meet our obligations — this depends on the type of business and the
                circumstances of the claim. Mortgage advising and arranging is covered up to a
                maximum limit of £85,000. Further information about the compensation scheme is
                available from the FSCS.
              </p>
            </section>

            <section className={styles.policySection} id="data-protection">
              <h2 className={styles.sectionHeading}>Data protection</h2>
              <p>
                We take the security of your personal data seriously. Please review our{" "}
                <a href={`${basePath}/privacy`}>Privacy Policy</a>. We also recommend you view the
                privacy notice of lenders or providers we recommend to you, available at{" "}
                <a
                  href="https://connectbrokers.co.uk/lenderprivacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  connectbrokers.co.uk/lenderprivacy
                </a>
                . Please note that phone calls may be recorded.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
