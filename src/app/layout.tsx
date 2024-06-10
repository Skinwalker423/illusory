import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inm-plex",
});

export const metadata: Metadata = {
  title: "Illusory",
  description: "AI-powered image enhancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          "font-IBMPlex antialiased",
          IBMPlex.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
