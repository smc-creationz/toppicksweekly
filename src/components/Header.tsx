"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.jpg"
          alt="Top Picks Weekly Logo"
          width={150}
          height={150}
          className="h-full w-auto object-contain"
          priority
        />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-6 text-xl font-medium text-gray-800 dark:text-gray-100">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">This Week’s Picks</Link>
          <div className="relative group">
            <span className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Top Picks by Category
            </span>
            <div className="absolute left-0 top-full mt-0 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
              <Link href="/category/home-kitchen" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Home & Kitchen</Link>
              <Link href="/category/electronics" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Electronics</Link>
              <Link href="/category/fitness" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Fitness</Link>
            </div>
          </div>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link>
          <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy</Link>
          <Link href="/disclaimer" className="hover:text-blue-600 dark:hover:text-blue-400">Disclaimer</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden text-gray-700 dark:text-gray-300"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-6 pb-4 space-y-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link href="/" className="block">This Week’s Picks</Link>
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="w-full text-left flex items-center justify-between"
          >
            Top Picks by Category <ChevronDown className="w-4 h-4" />
          </button>
          {mobileDropdownOpen && (
            <div className="pl-4 space-y-1">
              <Link href="/category/home-kitchen" className="block">Home & Kitchen</Link>
              <Link href="/category/electronics" className="block">Electronics</Link>
              <Link href="/category/fitness" className="block">Fitness</Link>
            </div>
          )}
          <Link href="/about" className="block">About Us</Link>
          <Link href="/privacy" className="block">Privacy</Link>
          <Link href="/disclaimer" className="block">Disclaimer</Link>
        </div>
      )}
    </header>
  );
}
