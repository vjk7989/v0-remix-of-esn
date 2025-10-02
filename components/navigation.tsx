"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12 bg-black/30 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.avif" alt="Ether Space Network" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <span className="text-white font-semibold text-sm sm:text-base lg:text-lg hidden sm:block">
            Ether Space Network
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 z-40">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
