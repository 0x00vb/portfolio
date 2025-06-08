"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, Suspense } from "react"
import { EnhancedProjectCard } from "@/components/enhanced-project-card"
import { ModernHeroSection } from "@/components/modern-hero-section"
import { ContactForm } from "@/components/contact-form"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingNav } from "@/components/floating-nav"
import { AboutSection } from "@/components/about-section"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const projects = [
    {
      title: "MindDrive",
      description: "AI-powered note-taking web application designed to help users capture, organize, and retrieve their thoughts efficiently with intelligent search and categorization.",
      tags: ["Vite", "ExpressJS", "PostgreSQL", "Tailwind CSS", "AI/ML"],
      image: "/minddrive.webp",
      projectLink: "https://minddrive.vercel.app",
      featured: true,
      category: "Web App"
    },
        {
      title: "CMflow",
      description: "Automated content marketing tool that lets you manage multiple business accounts, describe each brand, and generate AI-powered posts. You can schedule posts with custom intervals or create and publish them manually.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
      image: "/cmflow.webp",
      projectLink: "https://cmflow.vercel.app/",
      featured: true,
      category: "Web App"
    },
    {
      title: "Ski Rental Pro",
      description: "Comprehensive ski rental management system with client management, inventory tracking, and seamless rental processing for ski shops.",
      tags: ["Java", "Desktop App", "Next.js", "React", "Tailwind CSS"],
      image: "/skirental.webp",
      projectLink: "https://skirentalpro.vercel.app/",
      featured: true,
      category: "Desktop App"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce solution with advanced product filtering, wishlist functionality, and optimized checkout experience.",
      tags: ["React", "Node.js", "MongoDB", "ExpressJS", "Stripe"],
      image: "/ecommerce.webp",
      projectLink: "https://ecommerce-rho-roan.vercel.app",
      featured: false,
      category: "E-commerce"
    },
    {
      title: "NewsTok",
      description: "Revolutionary news consumption app with TikTok-style swipeable interface, bringing engaging news discovery to mobile users.",
      tags: ["Next.js", "Vite", "ExpressJS", "News API"],
      image: "/newstok.webp",
      projectLink: "https://newstok.vercel.app",
      featured: false,
      category: "Mobile App"
    },
    {
      title: "DreamCanvas",
      description: "Immersive wallpaper application that transforms devices into personalized canvases with AI-generated and curated artwork.",
      tags: ["React Native", "Mobile Development", "AI Art"],
      image: "/dreamcanvas.webp",
      projectLink: "https://github.com/0x00vb/DreamCanvas",
      featured: false,
      category: "Mobile App"
    }
  ]

  return (
    <>
      <ScrollProgress />
      <FloatingNav />
      
      <div className="flex flex-col min-h-screen">
        {/* Enhanced Header */}
        <motion.header 
          className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container flex h-16 items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground text-sm font-bold">
                  VB
                </div>
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Valentino Balatti
                </span>
              </Link>
            </motion.div>
            
            <nav className="hidden md:flex gap-8">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/0x00vb", icon: Github, color: "primary" },
                { href: "https://linkedin.com/in/valentino-b-84992a1a6", icon: Linkedin, color: "blue-500" },
                { href: "#contact", icon: Mail, color: "green-500" }
              ].map((social, index) => (
                <motion.div
                  key={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined}>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="sr-only">{social.icon.name}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.header>

        <main className="flex-1 pt-16">
          {/* Modern Hero Section */}
          <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            
            <motion.div 
              className="container relative z-10"
              style={{ y, opacity }}
            >
              <ModernHeroSection />
            </motion.div>
          </section>

          {/* Ultra-Clean About Section */}
          <AboutSection />

          {/* Enhanced Projects Section */}
          <motion.section 
            id="projects" 
            ref={projectsRef}
            className="py-24 lg:py-32 bg-muted/30"
            initial="initial"
            animate={projectsInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <div className="container">
              <motion.div 
                className="text-center space-y-4 mb-16"
                variants={fadeInUp}
              >
                <Badge variant="outline" className="mb-4">Portfolio</Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Featured
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-gray-400"> Projects</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A curated selection of my recent work, showcasing expertise in modern web development, 
                  UI/UX design, and innovative problem-solving.
                </p>
              </motion.div>

              {/* Featured Projects */}
              <motion.div 
                className="grid lg:grid-cols-2 gap-8 mb-16"
                variants={staggerContainer}
              >
                {projects.filter(p => p.featured).map((project, index) => (
                  <motion.div key={project.title} variants={fadeInUp}>
                    <Suspense fallback={<div className="h-96 bg-muted rounded-xl animate-pulse" />}>
                      <EnhancedProjectCard {...project} featured />
                    </Suspense>
                  </motion.div>
                ))}
              </motion.div>

              {/* Other Projects */}
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
              >
                {projects.filter(p => !p.featured).map((project, index) => (
                  <motion.div key={project.title} variants={fadeInUp}>
                    <Suspense fallback={<div className="h-80 bg-muted rounded-xl animate-pulse" />}>
                      <EnhancedProjectCard {...project} />
                    </Suspense>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Enhanced Contact Section */}
          <motion.section 
            id="contact" 
            ref={contactRef}
            className="py-24 lg:py-32 relative overflow-hidden"
            initial="initial"
            animate={contactInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-background" />
            <div className="container relative z-10">
              <motion.div 
                className="text-center space-y-4 mb-16"
                variants={fadeInUp}
              >
                <Badge variant="outline" className="mb-4">Get In Touch</Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Let's Build Something
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Amazing</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Have a project in mind? I'm always excited to collaborate on innovative ideas 
                  and bring creative visions to life.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <motion.div 
                  className="space-y-8"
                  variants={fadeInUp}
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Let's Connect</h3>
                    <p className="text-muted-foreground text-lg">
                      Whether you have a project in mind, want to discuss opportunities, 
                      or just want to say hello, I'd love to hear from you.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: "Email", value: "valentinobalatti4@gmail.com", href: "mailto:valentinobalatti4@gmail.com" },
                      { icon: Github, label: "GitHub", value: "@0x00vb", href: "https://github.com/0x00vb" },
                      { icon: Linkedin, label: "LinkedIn", value: "Valentino Balatti", href: "https://linkedin.com/in/valentino-b-84992a1a6" }
                    ].map((contact, index) => (
                      <motion.div
                        key={contact.label}
                        className="flex items-center gap-4 p-4 rounded-xl bg-background border hover:shadow-md transition-all duration-300 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => window.open(contact.href, '_blank')}
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <contact.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-sm text-muted-foreground">{contact.value}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </motion.section>
        </main>

        {/* Enhanced Footer */}
        <motion.footer 
          className="border-t bg-muted/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground text-sm font-bold">
                    VB
                  </div>
                  <span className="font-bold text-lg">Valentino Balatti</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Crafting exceptional digital experiences for the modern web.
                </p>
                <div className="flex gap-2">
                  {[
                    { href: "https://github.com/0x00vb", icon: Github },
                    { href: "https://linkedin.com/in/valentino-b-84992a1a6", icon: Linkedin },
                    { href: "mailto:valentinobalatti4@gmail.com", icon: Mail }
                  ].map((social) => (
                    <motion.div
                      key={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                        <social.icon className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {[
                {
                  title: "Navigation",
                  links: [
                    { href: "#home", label: "Home" },
                    { href: "#about", label: "About" },
                    { href: "#projects", label: "Projects" },
                    { href: "#contact", label: "Contact" }
                  ]
                },
                {
                  title: "Services",
                  links: [
                    { href: "#", label: "Web Development" },
                    { href: "#", label: "UI/UX Design" },
                    { href: "#", label: "SaaS Development" },
                    { href: "#", label: "Consulting" }
                  ]
                },
                {
                  title: "Contact",
                  links: [
                    { href: "mailto:valentinobalatti4@gmail.com", label: "valentinobalatti4@gmail.com" },
                    { href: "#", label: "Buenos Aires, AR" }
                  ]
                }
              ].map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="font-semibold">{section.title}</h3>
                  <nav className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <Link 
                        key={link.label}
                        href={link.href} 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-sm text-muted-foreground">
                &copy; 2024 Valentino Balatti. All rights reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  )
}

