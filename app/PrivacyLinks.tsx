"use client";
import Script from "next/script";

export function PrivacyLinks() {
  return (
    <>
      <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
        <a
          href="https://www.iubenda.com/privacy-policy/20196670"
          className="iubenda-noiframe iubenda-embed"
          title="Privacy Policy"
          style={{ color: "var(--orange)", fontWeight: 800 }}
        >
          Privacy Policy →
        </a>
        <a
          href="https://www.iubenda.com/privacy-policy/20196670/cookie-policy"
          className="iubenda-noiframe iubenda-embed"
          title="Cookie Policy"
          style={{ color: "var(--orange)", fontWeight: 800 }}
        >
          Cookie Policy →
        </a>
      </div>
      <Script src="https://cdn.iubenda.com/iubenda.js" strategy="lazyOnload" />
    </>
  );
}
