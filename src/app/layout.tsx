// layout.tsx
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 bg-gray-50">
        {/* NavBar */}
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600">Top Picks Weekly</Link>
            
           <nav className="flex space-x-6 text-sm font-medium text-gray-700 items-center relative">
  <Link href="/" className="hover:text-blue-600">This Week’s Picks</Link>

  {/* Dropdown */}
  <div className="relative group">
    <button className="hover:text-blue-600">Top Picks by Category ▾</button>
    <div className="absolute hidden group-hover:block bg-white border mt-2 rounded shadow-md z-50 min-w-[200px]">
      <Link href="/category/home-kitchen" className="block px-4 py-2 hover:bg-gray-100">Home & Kitchen</Link>
      <Link href="/category/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
      <Link href="/category/pets" className="block px-4 py-2 hover:bg-gray-100">Pet Supplies</Link>
      <Link href="/category/health" className="block px-4 py-2 hover:bg-gray-100">Health & Personal Care</Link>
      <Link href="/category/toys" className="block px-4 py-2 hover:bg-gray-100">Toys & Games</Link>
    </div>
  </div>

  <Link href="/about" className="hover:text-blue-600">About Us</Link>
  <Link href="/privacy" className="hover:text-blue-600">Privacy</Link>
  <Link href="/disclaimer" className="hover:text-blue-600">Disclaimer</Link>
</nav>

          </div>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 mt-12 p-4 border-t bg-white">
          <p>
            <Link href="/privacy" className="underline mr-4">Privacy Policy</Link>
            <Link href="/disclaimer" className="underline">Affiliate Disclaimer</Link>
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Top Picks Weekly</p>
        </footer>
      </body>
    </html>
  );
}