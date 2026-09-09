import Holding from "@/components/Holding";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: `${siteConfig.companyName} | Website Temporarily Unavailable`,
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return <Holding />;
}
