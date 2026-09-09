import { Newsreader, Archivo } from "next/font/google";
import "./globals.css";
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
  title: `${siteConfig.companyName} | Website Temporarily Unavailable`,
  description: `${siteConfig.companyName} — this website is temporarily unavailable.`,
  robots: { index: false, follow: false },
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
      <body>{children}</body>
    </html>
  );
}
