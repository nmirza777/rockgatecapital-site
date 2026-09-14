import styles from "../privacy/privacy.module.css";
import { siteConfig, getComplaintsStatement } from "@/lib/siteConfig";
import { basePath } from "@/lib/basePath";

export const metadata = {
  title: `Complaints | ${siteConfig.companyName}`,
  description: `How to make a complaint about ${siteConfig.companyName}'s advice or service.`,
  alternates: { canonical: "https://rockgatecapital.co.uk/complaints" },
};

export default function Complaints() {
  return (
    <main id="main-content">
      <section className={styles.policyHero}>
        <div className="container">
          <div className="section-label">Legal information</div>
          <h1 className={styles.pageTitle}>Complaints</h1>
          <p>
            It is our intention to provide you with a high level of customer service at all
            times. This page sets out what to do if you feel we haven&apos;t met that standard.
          </p>
        </div>
      </section>

      <section className={styles.policy}>
        <div className="container">
          <div className={styles.policySection}>
            <h2 className={styles.sectionHeading}>What to do if you have a complaint</h2>
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
          </div>

          <div className={styles.important}>
            Your property may be repossessed if you do not keep up repayments on your mortgage.
          </div>

          <p style={{ marginTop: 24 }}>
            <a href={`${basePath}/#top`}>← Back to homepage</a>
          </p>
        </div>
      </section>
    </main>
  );
}
