import { Newsreader, Archivo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadAssistant from "@/components/LeadAssistant";
import { basePath } from "@/lib/basePath";
import { siteConfig } from "@/lib/siteConfig";

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://rockgatecapital.co.uk"),
  title: `${siteConfig.companyName} | Specialist Property Finance`,
  description:
    "Mortgage advice and specialist property finance across residential mortgages, buy-to-let, bridging and commercial finance.",
  openGraph: {
    title: `${siteConfig.companyName} | Specialist Property Finance`,
    description: "Specialist property finance, arranged properly.",
    type: "website",
    url: "https://rockgatecapital.co.uk/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.companyName} — Specialist property finance, arranged properly.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.companyName} | Specialist Property Finance`,
    description: "Specialist property finance, arranged properly.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export const viewport = {
  themeColor: "#0F241F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${archivo.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <LeadAssistant />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
