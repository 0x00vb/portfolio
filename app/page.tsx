import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { HeroAnimation } from "@/components/hero-animation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-5 ">
        <div className=" flex h-16 items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span>Valentino Balatti</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-lg font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-lg font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-lg font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/0x00vb" target="_blank" passHref>
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/valentinobalatti" target="_blank" passHref>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="rounded-full md:hidden">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Contact</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="container py-12 md:py-24 lg:py-32 space-y-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Software Engineer <span className="text-primary">& Web Developer</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build exceptional digital experiences that are fast, accessible, and visually appealing. Specializing
                in landing pages, web apps, and SaaS development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"#projects"}>
                  <Button size="lg" className="group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="flex-1 relative w-full h-[400px]">
              <HeroAnimation />
            </div>
          </div>
        </section>

        <section id="projects" className="bg-muted py-12 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                A selection of my recent work. These projects showcase my skills in web development, UI/UX design, and
                problem-solving.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Ski rental app"
                description="Effortless Ski Rentals at Your Fingertips. Manage clients, products, and rentals with ease"
                tags={["Java", "Desktop app", "Next.js", "React", "Tailwind CSS"]}
                image="/skirental.png?height=300&width=400"
                projectLink="https://skirentalpro.vercel.app/"
              />
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured e-commerce platform with product listings, save for later and cart functionality."
                tags={["React", "Node.js", "MongoDB", "ExpressJS"]}
                image="/ecommerce.png?height=3--&width=300"
                projectLink="https://ecommerce-rho-roan.vercel.app"
              />
              <ProjectCard
                title="NewsTok"
                description="An innovative, swipeable news application that brings you the latest headlines in a format inspired by TikTok's dynamic style."
                tags={["Next.js", "Vite", "ExpressJS"]}
                image="/newstok.png?height=300&width=400"
                projectLink="https://newstok.vercel.app "
              />
                <ProjectCard
                  title="NewsTok"
                  description="An innovative, swipeable news application that brings you the latest headlines in a format inspired by TikTok's dynamic style."
                  tags={["Next.js", "Vite", "ExpressJS"]}
                  image="/newstok.png?height=300&width=400"
                  projectLink="https://newstok.vercel.app "
                />
              <ProjectCard
                title="DreamCanvas"
                description="immersive wallpaper app that transforms your device into a canvas of dreams."
                tags={["Mobile Development", "React Native"]}
                image="/dreamcanvas.png?height=300&width=400"
                projectLink="https://github.com/0x00vb/DreamCanvas "
              />



            </div>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                I'm a software engineering student passionate about creating beautiful, functional, and user-centered
                digital experiences. With a focus on frontend development, I strive to write clean, efficient code that
                solves real-world problems.
              </p>
              <p className="text-muted-foreground md:text-xl">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or writing about tech on my blog.
              </p>
              <Button size="lg">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image src="/placeholder.svg?height=600&width=600" alt="Profile photo" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="text-muted-foreground md:text-xl">
                Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing
                new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <span>valentinobalatti4@gmail.com</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <span>@alexdev</span>
                </div> */}
              </div>
            </div>
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">ValentinoB</h3>
              <p className="text-sm text-muted-foreground">
                Building exceptional digital experiences for the modern web.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Navigation</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  UI/UX Design
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  SaaS Development
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Landing Pages
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>hello@alexdev.com</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Valentino Balatti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

