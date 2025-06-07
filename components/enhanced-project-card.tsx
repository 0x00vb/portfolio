"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

interface EnhancedProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  projectLink: string
  featured?: boolean
  category?: string
}

export function EnhancedProjectCard({ 
  title, 
  description, 
  tags, 
  image, 
  projectLink, 
  featured = false,
  category 
}: EnhancedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-background border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
        featured ? 'lg:col-span-1' : ''
      }`}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-video'}`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          priority={featured}
        />
        
        {/* Category Badge */}
        {category && (
          <motion.div
            className="absolute top-4 left-4 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              {category}
            </Badge>
          </motion.div>
        )}
        
        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] z-10 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1 : 0.8, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Button size="lg" className="rounded-full shadow-lg">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <CardContent className={`p-6 ${featured ? 'p-8' : ''}`}>
        <div className="space-y-4">
          <div className="space-y-2">
            <motion.h3 
              className={`font-bold tracking-tight ${featured ? 'text-2xl' : 'text-xl'} group-hover:text-primary transition-colors`}
              layoutId={`title-${title}`}
            >
              {title}
            </motion.h3>
            <motion.p 
              className={`text-muted-foreground leading-relaxed ${featured ? 'text-base' : 'text-sm'} line-clamp-3`}
              layoutId={`description-${title}`}
            >
              {description}
            </motion.p>
          </div>
          
          {/* Tags */}
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 }
                }}
              >
                <Badge 
                  variant="outline" 
                  className={`transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
                    featured ? 'text-xs' : 'text-xs'
                  }`}
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Action Button */}
          <motion.div 
            className="flex justify-between items-center pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            
            {projectLink.includes('github.com') && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </CardContent>
      
      {/* Click Area */}
      <Link
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-30"
        aria-label={`View ${title} project`}
      >
        <span className="sr-only">View {title} project</span>
      </Link>
    </motion.div>
  )
} 