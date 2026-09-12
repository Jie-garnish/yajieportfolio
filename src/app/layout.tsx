import type { Metadata } from "next";
import "./globals.css";
import "./sections.css";
import "./hero-refresh.css";
import "./mockups.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yh-ux-portfolio.jesshyj.chatgpt.site"),
  title: "Yajie Hé — UX & Product Designer",
  description: "UX and product designer creating clear, accessible experiences across enterprise, civic tech, healthcare, and AI.",
  openGraph: {
    title: "Yajie Hé — UX & Product Designer",
    description: "Making complex products feel clear and human.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Yajie Hé — UX & Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yajie Hé — UX & Product Designer",
    description: "Making complex products feel clear and human.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
