"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Tech stack data for the floating ticker with better icons
const techStack = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Tailwind", icon: "🎨", color: "#06B6D4" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "Git", icon: "📁", color: "#F05032" },
  { name: "Linux", icon: "🐧", color: "#FCC624" },
  { name: "Vite", icon: "⚡", color: "#646CFF" },
  { name: "Express", icon: "🚂", color: "#000000" },
  { name: "Framer", icon: "🎭", color: "#0055FF" },
  { name: "Vercel", icon: "▲", color: "#000000" },
]

// Animation variants with improved easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: [0.21, 1.11, 0.81, 0.99]
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 24,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.21, 1.11, 0.81, 0.99]
    }
  }
}

const KeywordHighlight = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <motion.span
      className="relative inline-block"
      initial={{ opacity: 0.7 }}
      whileInView={{ 
        opacity: 1,
        transition: { 
          duration: 0.4, 
          delay,
          ease: [0.21, 1.11, 0.81, 0.99]
        }
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      viewport={{ once: true, margin: "-20%" }}
    >
      <span className="relative z-10 font-medium text-foreground/95 hover:text-foreground transition-colors duration-300">
        {children}
      </span>
      <motion.span
        className="absolute inset-0 bg-primary/6 rounded-md -z-10"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ 
          scaleX: 1,
          transition: { 
            duration: 0.6, 
            delay: delay + 0.2,
            ease: [0.21, 1.11, 0.81, 0.99]
          }
        }}
        viewport={{ once: true, margin: "-20%" }}
      />
    </motion.span>
  )
}

const FloatingTechTicker = () => {
  return (
    <div className="relative overflow-hidden py-6 md:py-8">
      <motion.div
        className="flex gap-6 md:gap-8 will-change-transform"
        animate={{ x: [0, -60 * techStack.length] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Triple the array for ultra-smooth infinite loop */}
        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 px-5 py-3 bg-muted/30 rounded-full border border-border/30 backdrop-blur-md whitespace-nowrap shadow-sm"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "hsl(var(--muted)/0.5)",
              borderColor: "hsl(var(--border)/0.5)",
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
          >
            <span 
              className="text-base md:text-lg opacity-70"
              style={{ filter: "grayscale(0.3)" }}
            >
              {tech.icon}
            </span>
            <span className="text-xs md:text-sm font-medium text-muted-foreground/90">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Enhanced gradient fade with perfect blending */}
      <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
    </div>
  )
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-5%" })

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Ultra-subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />
      
      <div className="container relative z-10 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 md:space-y-16 lg:space-y-20"
        >
          {/* Animated heading with perfect typography */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-tight text-foreground/95 leading-none">
              About Me
            </h2>
          </motion.div>

          {/* Content paragraphs with perfect spacing */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 text-center">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed text-muted-foreground max-w-4xl mx-auto">
              I'm a passionate software engineer who transforms ideas into elegant digital experiences. 
              Currently pursuing my degree while building tools that matter.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground/90 max-w-3xl mx-auto">
              Specializing in <KeywordHighlight delay={0.1}>React</KeywordHighlight> and{" "}
              <KeywordHighlight delay={0.2}>Next.js</KeywordHighlight>, I focus on{" "}
              <KeywordHighlight delay={0.3}>performance</KeywordHighlight>,{" "}
              <KeywordHighlight delay={0.4}>accessibility</KeywordHighlight>, and{" "}
              <KeywordHighlight delay={0.5}>user experience</KeywordHighlight>. 
              A daily <KeywordHighlight delay={0.6}>Linux</KeywordHighlight> user with deep interests in{" "}
              <KeywordHighlight delay={0.7}>AI</KeywordHighlight> and{" "}
              <KeywordHighlight delay={0.8}>cybersecurity</KeywordHighlight>.
            </p>
          </motion.div>

          {/* Floating tech stack ticker */}
          <motion.div variants={itemVariants} className="pt-4 md:pt-8">
            <FloatingTechTicker />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 