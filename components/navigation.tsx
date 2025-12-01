"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavItem = 
  | { name: string; hash: string; href?: never }
  | { name: string; href: string; hash?: never }

const navItems: NavItem[] = [
  { name: "Games", hash: "#games" },           // Maps to id="games" in GamesSection
  { name: "About Us", hash: "#about" },        // Maps to id="about" in AboutSection
  { name: "Technology", hash: "#technology" }, // Maps to id="technology" in TechSection
  { name: "Articles", href: "/articles" },     // Maps to /articles route
  { name: "Support", href: "/contact" },        // Maps to /contact page (no support section exists)
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/outlaw-20lime-20green-20logo-20.png"
              alt="Outlaw Games"
              width={50}
              height={40}
              className="h-8 lg:h-10 w-auto"
            />
            <span className="text-white font-bold text-lg lg:text-xl tracking-tight">OUTLAW</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              // If item has href, use it directly (like Articles)
              // If item has hash, check if we're on homepage
              const href = item.href || (pathname === "/" ? item.hash : `/${item.hash}`)
              return (
                <Link
                  key={item.name}
                  href={href}
                  className="text-white/80 hover:text-[#A4FF42] transition-colors text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A4FF42] transition-all group-hover:w-full" />
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white/80 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Button asChild className="bg-[#A4FF42] text-black hover:bg-[#8FE635] font-semibold px-6">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const href = item.href || (pathname === "/" ? item.hash : `/${item.hash}`)
                return (
                  <Link
                    key={item.name}
                    href={href}
                    className="block text-white/80 hover:text-[#A4FF42] transition-colors text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Button asChild className="w-full bg-[#A4FF42] text-black hover:bg-[#8FE635] font-semibold mt-4">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
