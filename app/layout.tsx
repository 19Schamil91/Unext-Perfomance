import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "UNEXT GMBH | Ihr starker Partner rund ums Fahrzeug in Berlin",
  description:
    "UNEXT GMBH Berlin - Unfallgutachten, Autovermietung, Autoservice & Werkstatt, Premium Detailing. Zertifiziert, schnell und zuverlässig. Jetzt Kontakt aufnehmen!",
  keywords: [
    "Unfallgutachten Berlin",
    "KFZ Gutachter Berlin",
    "Autovermietung Berlin",
    "Werkstatt Berlin",
    "Auto Detailing Berlin",
    "UNEXT",
    "UNFALLX",
  ],
  authors: [{ name: "UNEXT GMBH" }],
  creator: "UNEXT GMBH",
  publisher: "UNEXT GMBH",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://unext.de",
    siteName: "UNEXT GMBH",
    title: "UNEXT GMBH | Ihr starker Partner rund ums Fahrzeug in Berlin",
    description:
      "Unfallgutachten, Autovermietung, Autoservice & Premium Detailing - alles unter einem Dach in Berlin.",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="dark" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
