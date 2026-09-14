import BrandMark from "./BrandMark";
import ObfuscatedEmail from "./ObfuscatedEmail";
import {
  siteConfig,
  getRegulatoryStatement,
  ukCustomersStatement,
  otherServicesStatement,
  getCommissionDisclosureStatement,
  getFeesForAdviceStatement,
  getExternalLinkCaveat,
  telHref,
  whatsappHref,
} from "@/lib/siteConfig";
import { basePath } from "@/lib/basePath";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href={`${basePath}/#top`} aria-label="Rockgate Capital home">
              <BrandMark className="brand__mark" fill="#F7F4EE" />
              <span className="brand__name">
                <span className="brand__rockgate">Rockgate</span>
                <span className="brand__capital">Capital Ltd</span>
              </span>
            </a>
            <p>
              Mortgage advice and specialist property finance across residential mortgages,
              buy-to-let, bridging and commercial finance.
            </p>
            <div className="footer-fiba-wrap">
              <img
                className="footer-fiba"
                src={`${basePath}/fiba-member.png`}
                alt="FIBA Member — Financial Intermediary & Broker Association"
                width={170}
                height={62}
              />
              <p className="footer-fiba__caption">Financial Intermediary &amp; Broker Association</p>
            </div>
            <p className="footer-risk-warning">
              Your property may be repossessed if you do not keep up repayments on your mortgage.
            </p>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <a href={`${basePath}/#services`}>Residential</a>
            <a href={`${basePath}/#services`}>Buy-to-let</a>
            <a href={`${basePath}/#services`}>Bridging</a>
            <a href={`${basePath}/#services`}>Commercial</a>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <a href={`${basePath}/#about`}>About</a>
            <a href={`${basePath}/#approach`}>Approach</a>
            <a href={`${basePath}/#contact`}>Contact</a>
            <a href={`${basePath}/privacy`}>Privacy Policy</a>
            <a href={`${basePath}/terms-of-business`}>Terms of Business</a>
            <a href={`${basePath}/complaints`}>Complaints</a>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ObfuscatedEmail />
            <a href={telHref()}>{siteConfig.telephoneDisplay}</a>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="regulatory">
          <p>{getRegulatoryStatement()}</p>
          <p>
            <span>{siteConfig.companyName}</span> is registered in England and Wales under company
            number <span>{siteConfig.companyNumber}</span>. Registered office:{" "}
            <span>{siteConfig.registeredOffice}</span>.
          </p>
          <p>
            The FCA do not regulate some forms of Business Buy to Let Mortgages and Commercial
            Mortgages to Limited Companies.
          </p>
          <p>{ukCustomersStatement}</p>
          <p>{otherServicesStatement}</p>
          <p>{getFeesForAdviceStatement()}</p>
          <p>{getCommissionDisclosureStatement()}</p>
          <p>{getExternalLinkCaveat()}</p>
          <p>
            If you wish to complain about our advice or service, please see our{" "}
            <a href={`${basePath}/complaints`}>Complaints</a> page for how to do so and your right
            to refer the matter to the Financial Ombudsman Service.
          </p>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </span>
          <div className="footer-bottom__links">
            <a href={`${basePath}/privacy`}>Privacy Policy</a>
            <a href={siteConfig.principalRegisterUrl} target="_blank" rel="noopener noreferrer">
              Principal FCA Register entry
            </a>
            <a href={siteConfig.rockgateRegisterUrl} target="_blank" rel="noopener noreferrer">
              Rockgate FCA Register entry
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
