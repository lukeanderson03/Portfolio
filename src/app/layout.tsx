import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke Anderson - Portfolio",
  description:
    "Web Developer, UX Designer, Computer Networking & Security Specialist",
  keywords: [
    "web development",
    "UX design",
    "computer networking",
    "security",
    "portfolio",
  ],
  authors: [{ name: "Luke Anderson" }],
  openGraph: {
    title: "Luke Anderson - Portfolio",
    description:
      "Web Developer, UX Designer, Computer Networking & Security Specialist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
