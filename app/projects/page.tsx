import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "SaaS Dashboard",
      description: "A modern dashboard for SaaS applications with analytics, user management, and billing features.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers and designers to showcase their work.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and team collaboration with real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Travel Blog",
      description:
        "A responsive blog for travel enthusiasts with content management system and social sharing features.",
      tags: ["Next.js", "Sanity CMS", "Vercel"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Weather App",
      description: "A weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      tags: ["React", "OpenWeather API", "Mapbox"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="container py-12 md:py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
        <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
          A selection of my recent work. These projects showcase my skills in web development, UI/UX design, and
          problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>

      <div className="rounded-lg border bg-background p-8 shadow-sm">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Have a project in mind?</h2>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects and ideas. If you have a project that needs some creative
              input, feel free to get in touch.
            </p>
            <Button asChild>
              <Link href="/contact">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=300&width=500" alt="Collaboration" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

