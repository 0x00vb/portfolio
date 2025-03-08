import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Lightbulb, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 space-y-16">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
          <p className="text-muted-foreground md:text-xl">
            I'm a software engineering student passionate about creating beautiful, functional, and user-centered
            digital experiences. With a focus on frontend development, I strive to write clean, efficient code that
            solves real-world problems.
          </p>
          <p className="text-muted-foreground md:text-xl">
            My journey in web development started in 2020, and since then, I've been constantly learning and improving
            my skills. I believe in the power of technology to transform lives and businesses, and I'm excited to be
            part of this ever-evolving industry.
          </p>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/placeholder.svg?height=600&width=600" alt="Profile photo" fill className="object-cover" />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">My Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Frontend Development</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Next.js</li>
              <li>Tailwind CSS, Styled Components</li>
              <li>Responsive Design</li>
              <li>Framer Motion, GSAP</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">UI/UX Design</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Figma, Adobe XD</li>
              <li>Wireframing & Prototyping</li>
              <li>User Research</li>
              <li>Accessibility</li>
              <li>Design Systems</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Backend & Tools</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Node.js, Express</li>
              <li>MongoDB, PostgreSQL</li>
              <li>Git, GitHub</li>
              <li>CI/CD, Vercel, Netlify</li>
              <li>Testing (Jest, React Testing Library)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">Education & Experience</h2>
        <div className="space-y-8">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold">Bachelor of Science in Software Engineering</h3>
                <p className="text-muted-foreground">University of Technology</p>
              </div>
              <div className="text-muted-foreground">2020 - Present</div>
            </div>
            <p className="text-muted-foreground">
              Currently pursuing a degree in Software Engineering with a focus on web technologies and user experience
              design. Maintaining a GPA of 3.8/4.0 and participating in various hackathons and coding competitions.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold">Frontend Developer Intern</h3>
                <p className="text-muted-foreground">TechStart Inc.</p>
              </div>
              <div className="text-muted-foreground">Summer 2023</div>
            </div>
            <p className="text-muted-foreground">
              Worked on developing responsive web applications using React and Next.js. Collaborated with designers to
              implement UI/UX designs and improve user experience. Participated in code reviews and agile development
              processes.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold">Freelance Web Developer</h3>
                <p className="text-muted-foreground">Self-employed</p>
              </div>
              <div className="text-muted-foreground">2021 - Present</div>
            </div>
            <p className="text-muted-foreground">
              Designed and developed custom websites and web applications for small businesses and startups. Focused on
              creating responsive, accessible, and performant web experiences. Managed client relationships and
              delivered projects on time and within budget.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">My Process</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-lg border bg-background p-6 shadow-sm text-center">
            <div className="rounded-full bg-primary/10 p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">01</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Discovery</h3>
            <p className="text-muted-foreground">Understanding your needs, goals, and target audience</p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm text-center">
            <div className="rounded-full bg-primary/10 p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">02</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Planning</h3>
            <p className="text-muted-foreground">Creating wireframes, prototypes, and project roadmap</p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm text-center">
            <div className="rounded-full bg-primary/10 p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">03</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Development</h3>
            <p className="text-muted-foreground">Building the solution with clean, efficient code</p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm text-center">
            <div className="rounded-full bg-primary/10 p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">04</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Launch</h3>
            <p className="text-muted-foreground">Testing, deployment, and ongoing support</p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">Let's Work Together</h2>
        <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
          I'm currently available for freelance work and open to new opportunities. If you have a project in mind or
          just want to chat, feel free to reach out!
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

