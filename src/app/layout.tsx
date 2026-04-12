import type { Metadata } from "next";
import { Roboto_Slab, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Mountain West Chamber of Commerce | Riverton, Herriman & Bluffdale, UT",
    template: "%s | Mountain West Chamber of Commerce",
  },
  description:
    "The Mountain West Chamber of Commerce is the bridge between businesses and the community in Bluffdale, Herriman, and Riverton, Utah. Join us to grow your business through networking, education, and advocacy.",
  keywords: [
    "chamber of commerce",
    "Riverton UT",
    "Herriman",
    "Bluffdale",
    "Utah business",
    "networking",
  ],
  openGraph: {
    siteName: "Mountain West Chamber of Commerce",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSlab.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
