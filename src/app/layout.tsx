import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crank with Hank - Personal Fitness Training | Seaford Heights, SA",
  description: "Professional personal fitness training with Peter Hancock in Seaford Heights, South Australia. Transform your fitness journey with Crank with Hank.",
  keywords: "personal trainer, fitness, Seaford Heights, South Australia, Peter Hancock, Crank with Hank, weight training, fitness coaching",
  authors: [{ name: "Peter Hancock" }],
  openGraph: {
    title: "Crank with Hank - Personal Fitness Training",
    description: "Professional personal fitness training with Peter Hancock in Seaford Heights, South Australia.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
