import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gurdarshan Singh — Software Engineer & Systems Builder",
  description:
    "Portfolio of Gurdarshan Singh, a Computer Engineering student at Thapar Institute building scalable systems, intelligent software, and engineering projects that solve complex real-world problems.",
  keywords: [
    "Gurdarshan Singh",
    "Software Engineer",
    "Computer Engineering",
    "Portfolio",
    "Thapar Institute",
    "Systems Builder",
    "Full Stack Developer",
  ],
  authors: [{ name: "Gurdarshan Singh" }],
  openGraph: {
    title: "Gurdarshan Singh — Software Engineer & Systems Builder",
    description:
      "I build scalable systems, intelligent software, and engineering projects that solve complex real-world problems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurdarshan Singh — Software Engineer & Systems Builder",
    description:
      "I build scalable systems, intelligent software, and engineering projects that solve complex real-world problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        style={{
          fontFamily: "var(--font-sans)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </body>
    </html>
  );
}
