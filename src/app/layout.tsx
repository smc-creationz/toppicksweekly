import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Top Picks Weekly",
  description: "Curated Amazon product recommendations updated weekly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <Header />
        {children}
        <footer className="text-center text-sm text-gray-600 dark:text-gray-400 mt-12 p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
          <p>
            <a href="/privacy" className="underline mr-4">Privacy Policy</a>
            <a href="/disclaimer" className="underline">Affiliate Disclaimer</a>
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Top Picks Weekly</p>
        </footer>
      </body>
    </html>
  );
}
