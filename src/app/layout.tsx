import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 bg-gray-50">
        {/* NavBar */}
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-blue-600">Top Picks Weekly</a>
            <nav className="space-x-6 text-sm font-medium text-gray-700">
              <a href="/" className="hover:text-blue-600">This Week’s Picks</a>
              <a href="/about" className="hover:text-blue-600">About Us</a>
              <a href="/privacy" className="hover:text-blue-600">Privacy</a>
              <a href="/disclaimer" className="hover:text-blue-600">Disclaimer</a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 mt-12 p-4 border-t bg-white">
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
