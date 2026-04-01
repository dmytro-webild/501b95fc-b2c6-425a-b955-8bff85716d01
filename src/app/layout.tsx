import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Jost } from "next/font/google";



export const metadata: Metadata = {
  title: 'AYU | Pure from the start',
  description: 'The first baby bottle with zero plastic. Pure, safe, and built for the future.',
  openGraph: {
    "siteName": "AYU"
  },
};

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${jost.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
