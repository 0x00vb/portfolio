"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#projects", icon: Briefcase, label: "Projects" },
  { href: "#contact", icon: Mail, label: "Contact" }
]

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)

      // Determine active section
      const sections = ["home", "about", "projects", "contact"]
      const sectionElements = sections.map(id => document.getElementById(id))
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <motion.nav
            className="flex items-center gap-2 bg-background/80 backdrop-blur-xl border rounded-full px-4 py-3 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <Button
                    variant={activeSection === item.href.slice(1) ? "default" : "ghost"}
                    size="icon"
                    className={`relative rounded-full transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="sr-only">{item.label}</span>
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 pointer-events-none"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-foreground" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 