import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorWaves from "@/components/CursorWaves";

export const metadata: Metadata = {
  metadataBase: new URL("https://coderemlabs.com"),
  title: "CodeREM Labs: Medical Grade Precision. F1 Grade Performance.",
  description:
    "Enterprise software, AI automation and AI innovation. A problem is never truly solved until it meets the optimal solution.",
  openGraph: {
    siteName: "CodeREM Labs",
    images: ["/logo-1024.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Inter loaded exactly as the original static site did (static
            weights 300–800 from Google Fonts), so type rendering matches. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorWaves />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollProgress />
      </body>
    </html>
  );
}
