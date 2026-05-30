import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Playfair_Display,
  DM_Sans,
  Space_Grotesk,
  Nunito_Sans,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/app/_components/SiteHeader";
import { SiteFooter } from "@/app/_components/SiteFooter";
import { ThemeTweaker } from "@/app/_components/ThemeTweaker";
import { RevealObserver } from "@/app/_components/RevealObserver";
import { SITE } from "@/app/_data/site";

/* ---- Google Fonts (used by pairings 2–4 via CSS variables) ---- */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-nunito",
  display: "swap",
});

const allFonts = [
  plusJakarta.variable,
  playfair.variable,
  dmSans.variable,
  spaceGrotesk.variable,
  nunitoSans.variable,
].join(" ");

/* Inline init script: applies saved palette + fonts before first paint (no FOUC) */
const themeInitScript = `
(function(){
  try{
    var s=JSON.parse(localStorage.getItem('sp-tweaks-v1')||'{}');
    if(s.palette) document.documentElement.setAttribute('data-palette',s.palette);
    if(s.font)    document.documentElement.setAttribute('data-fonts',s.font);
  }catch(e){}
})();
`;

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Professional Painters in Stockport`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Expert painting and decorating in Stockport, Cheadle, Bramhall and Greater Manchester. Free quotes, 16+ years experience, 2-year guarantee.",
  keywords: [
    "painter",
    "decorator",
    "Stockport",
    "Greater Manchester",
    "house painting",
    "exterior painting",
    "interior painting",
    "wallpapering",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={allFonts} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ThemeTweaker />
        <RevealObserver />
      </body>
    </html>
  );
}
