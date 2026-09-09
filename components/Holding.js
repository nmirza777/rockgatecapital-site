import BrandMark from "@/components/BrandMark";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { siteConfig, telHref } from "@/lib/siteConfig";

export default function Holding() {
  return (
    <main className="holding">
      <div className="holding__card">
        <BrandMark className="holding__mark" />
        <p className="holding__company">{siteConfig.companyName}</p>
        <h1 className="holding__title">Website temporarily unavailable</h1>
        <p className="holding__copy">
          We&apos;re making some updates. For urgent enquiries, please contact us directly:
        </p>
        <div className="holding__contact">
          <a href={telHref()}>{siteConfig.telephoneDisplay}</a>
          <ObfuscatedEmail />
        </div>
      </div>
    </main>
  );
}
