// ROCKGATE CAPITAL — LIVE REGULATORY CONFIGURATION
//
// This is the single edit point for company, contact and regulatory details.
// If Connect supplies replacement approved wording, paste it into
// regulatoryStatementOverride below.

export const siteConfig = {
  fcaApproved: true,

  tradingName: "Rockgate Capital",
  companyName: "Rockgate Capital Ltd",
  companyNumber: "17050272",
  registeredOffice: "71–75 Shelton Street, Covent Garden, London, WC2H 9JQ",
  // ICO register: https://ico.org.uk/ESDWebPages/Entry/ZC131282 (verified) —
  // registered 22 April 2026, expires 21 April 2027.
  icoRegistration: "ZC131282",

  email: "info@rockgatecapital.co.uk",
  telephoneDisplay: "+44 (0) 7880 589888",
  telephoneE164: "+447880589888",
  whatsappNumber: "447880589888",

  calendlyUrl:
    "https://calendly.com/naveed-rockgatecapital/30min?background_color=f7f4ee&text_color=0f241f&primary_color=a9773f",

  // Credly public verification page for Naveed's LIBF Certified Mortgage
  // Adviser badge — anyone can click through to confirm it's genuine.
  libfBadgeVerifyUrl: "https://www.credly.com/badges/a9bd36ee-ad6c-4855-9663-d6faa9cea4ae/public_url",

  principalName: "Connect IFA Ltd",
  principalFrn: "441505",
  principalRegisterUrl: "https://register.fca.org.uk/s/firm?id=001b000000MfbXtAAJ",

  rockgateFrn: "1060671",
  rockgateRegisterUrl: "https://register.fca.org.uk/s/firm?id=001Sk000013cpsAIAQ",

  // Leave blank to use the automatically generated appointed-representative
  // statement below. If Connect supplies exact approved wording, paste it here.
  regulatoryStatementOverride: "",

  // Complaints-handling contact — Connect's Network Compliance Department,
  // supplied by Connect IFA Ltd (from their approved ESIS template wording,
  // 27 August 2026). Update here if Connect ever revises these details.
  complaintsNetworkAddress: "39 Station Lane, Hornchurch, RM12 6JL",
  complaintsNetworkPhone: "01708 676110",

  // Typical advice fee for straightforward cases, confirmed 8 September
  // 2026. Complex cases (e.g. portfolio landlords, complex shareholding
  // structures) may be charged a higher fee, confirmed in writing before
  // proceeding — see getFeesForAdviceStatement(). Update here if it changes.
  adviceFee: "£999",

  privacyLastUpdated: "8 September 2026",
};

export function getRegulatoryStatement() {
  const { regulatoryStatementOverride, companyName, principalName, rockgateFrn, principalFrn } =
    siteConfig;

  if (regulatoryStatementOverride) return regulatoryStatementOverride;

  return (
    `${companyName} is an Appointed Representative of ${principalName}, ` +
    `which is authorised and regulated by the Financial Conduct Authority. ` +
    `${companyName} is entered on the Financial Services Register under Firm Reference Number ${rockgateFrn}. ` +
    `${principalName} Firm Reference Number: ${principalFrn}.`
  );
}

// Verbatim wording from Connect's official "Website Review Form"
// (27/11/2023 revision, supplied via Connect compliance review,
// 8 September 2026) — this is the authoritative required version for
// the website specifically. Do not paraphrase without checking with
// Connect Compliance first.
export function getComplaintsStatement() {
  const { principalName, complaintsNetworkAddress, complaintsNetworkPhone } = siteConfig;
  return (
    `It is our intention to provide you with a high level of customer service at all times. ` +
    `If there is an occasion when we do not meet these standards and you wish to register a complaint, ` +
    `please write to: Compliance Department; ${principalName}, ${complaintsNetworkAddress} ` +
    `or call: ${complaintsNetworkPhone}. If you cannot settle your complaint with us, you may be entitled ` +
    `to refer it to the Financial Ombudsman Service.`
  );
}

// The four statements below are verbatim required wording from Connect's
// "Website Review Form" (27/11/2023) — do not paraphrase.
export const ukCustomersStatement =
  "The information contained within this website is subject to the UK regulatory regime and is " +
  "therefore targeted at consumers based in the UK.";

export const otherServicesStatement = "Not all services we offer are covered by the FCA.";

export function getFeesForAdviceStatement() {
  return (
    `There will be a fee for mortgage advice; the precise amount will depend on your ` +
    `circumstances. We will confirm this before you choose to proceed, but we estimate it to be ` +
    `${siteConfig.adviceFee} for straightforward cases.`
  );
}

export function getCommissionDisclosureStatement() {
  return (
    "We are a credit broker and not a lender. We have access to an extensive range of lenders. " +
    "Once we have assessed your needs, we will recommend a lender(s) that provides suitable " +
    "products to meet your personal circumstances and requirements, though you are not obliged " +
    "to take our advice or recommendation. Whichever lender we introduce you to, we will " +
    "typically receive commission from them after completion of the transaction. The amount of " +
    "commission we receive will normally be a fixed percentage of the amount you borrow from the " +
    "lender. Commission paid to us may vary in amount depending on the lender and product. The " +
    "lenders we work with pay commission at different rates. However, the amount of commission " +
    "that we receive from a lender does not have an effect on the amount that you pay to that " +
    "lender under your credit agreement."
  );
}

export function getExternalLinkCaveat() {
  return (
    `Please be aware that by clicking onto external links you are leaving the ${siteConfig.tradingName} ` +
    `website. Please note that neither ${siteConfig.tradingName} nor ${siteConfig.principalName} are ` +
    `responsible for the accuracy of the information contained within the linked site(s) accessible ` +
    `from this page.`
  );
}

export function mailtoHref() {
  return `mailto:${siteConfig.email}`;
}

export function telHref() {
  return `tel:${siteConfig.telephoneE164}`;
}

export function whatsappHref() {
  return `https://wa.me/${siteConfig.whatsappNumber}`;
}
