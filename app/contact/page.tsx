import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Me</h1>
        <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new
          projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-background p-6 shadow-sm text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-bold">Email</h3>
          <p className="text-muted-foreground">hello@alexdev.com</p>
          <p className="text-muted-foreground">support@alexdev.com</p>
        </div>
        <div className="rounded-lg border bg-background p-6 shadow-sm text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-bold">Phone</h3>
          <p className="text-muted-foreground">+1 (555) 123-4567</p>
          <p className="text-muted-foreground">Mon-Fri, 9am-5pm PST</p>
        </div>
        <div className="rounded-lg border bg-background p-6 shadow-sm text-center md:col-span-2 lg:col-span-1">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-bold">Location</h3>
          <p className="text-muted-foreground">San Francisco, CA</p>
          <p className="text-muted-foreground">United States</p>
        </div>
      </div>

      <div className="rounded-xl border bg-background p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
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
              className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your message"
            />
          </div>
          <Button type="submit" size="lg" className="w-full md:w-auto">
            Send Message
          </Button>
        </form>
      </div>

      <div className="rounded-lg border bg-background p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-bold">What services do you offer?</h3>
            <p className="text-muted-foreground">
              I specialize in web development, UI/UX design, landing pages, and SaaS development. I can help with
              everything from concept to deployment.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">What is your typical process?</h3>
            <p className="text-muted-foreground">
              My process typically includes discovery, planning, development, and launch phases. I believe in
              collaboration and keeping clients informed throughout the project.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">How long does a project take?</h3>
            <p className="text-muted-foreground">
              Project timelines vary depending on scope and complexity. A simple landing page might take 1-2 weeks,
              while a complex web application could take several months.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Do you offer maintenance services?</h3>
            <p className="text-muted-foreground">
              Yes, I offer ongoing maintenance and support services to ensure your website or application continues to
              run smoothly after launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

