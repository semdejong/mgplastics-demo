import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import SleadsBadge from "@/components/SleadsBadge";
import MobileBar from "@/components/MobileBar";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MG Plastics | Lateislabben op maat, binnen 7 werkdagen",
    template: "%s | MG Plastics",
  },
  description:
    "Lateislabben op maat uit Zutphen. Zo'n 50 profielen in zwart, wit en grijs uit voorraad. Gezaagd, gelast en ingepakt, binnen 7 werkdagen in huis.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: { icon: "/img/logo-mgplastics.png" },
};

export const viewport: Viewport = { themeColor: "#0E3FAA" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${archivo.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          async
          src="https://sleads-demo-analytics.vercel.app/t.js"
          data-demo="mgplastics-demo"
          data-endpoint="https://basic-tiger-117.convex.site/track"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-white focus:px-4 focus:py-2"
        >
          Ga naar inhoud
        </a>
        <SiteHeader />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
