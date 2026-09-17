import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://s07assicurazioni.com"),
  title: "S07 — Assicurazioni a Torino",
  description: "Agenzia assicurativa plurimandataria a Torino. Soluzioni per persona, investimenti, beni e impresa.",
  openGraph: {
    title: "S07 — Assicurazioni con il valore umano al centro",
    description: "Soluzioni assicurative e consulenza per persone, patrimoni e imprese.",
    url: "https://s07assicurazioni.com",
    siteName: "S07",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "S07 — Assicurazioni a Torino" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "S07 — Assicurazioni a Torino",
    description: "Soluzioni assicurative e consulenza per persone, patrimoni e imprese.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
