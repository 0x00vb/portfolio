import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt: "Learn how to create beautiful, responsive layouts using Tailwind CSS utility classes.",
      date: "March 8, 2024",
      category: "CSS",
      image: "/placeholder.svg?height=200&width=400&text=Blog+1",
    },
    {
      id: 2,
      title: "Getting Started with Next.js App Router",
      excerpt:
        "A comprehensive guide to using the new App Router in Next.js for better performance and developer experience.",
      date: "February 22, 2024",
      category: "Next.js",
      image: "/placeholder.svg?height=200&width=400&text=Blog+2",
    },
    {
      id: 3,
      title: "Animation Techniques with Framer Motion",
      excerpt: "Explore different animation techniques using Framer Motion to create engaging user experiences.",
      date: "February 15, 2024",
      category: "Animation",
      image: "/placeholder.svg?height=200&width=400&text=Blog+3",
    },
    {
      id: 4,
      title: "State Management in React: Context API vs. Redux",
      excerpt: "A comparison of different state management approaches in React applications.",
      date: "January 30, 2024",
      category: "React",
      image: "/placeholder.svg?height=200&width=400&text=Blog+4",
    },
    {
      id: 5,
      title: "Optimizing Web Performance: A Developer's Guide",
      excerpt: "Tips and techniques for improving the performance of your web applications.",
      date: "January 15, 2024",
      category: "Performance",
      image: "/placeholder.svg?height=200&width=400&text=Blog+5",
    },
    {
      id: 6,
      title: "Building Accessible Web Forms",
      excerpt: "Learn how to create web forms that are accessible to all users, including those with disabilities.",
      date: "December 28, 2023",
      category: "Accessibility",
      image: "/placeholder.svg?height=200&width=400&text=Blog+6",
    },
  ]

  return (
    <div className="container py-12 md:py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
        <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
          Thoughts, insights, and tutorials on web development, design, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group rounded-lg border bg-background overflow-hidden transition-all hover:shadow-md"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{post.category}</span>
              </div>
              <h2 className="font-bold text-xl group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary font-medium">
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>

      <div className="rounded-lg border bg-background p-8 shadow-sm">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Subscribe to my newsletter</h2>
            <p className="text-muted-foreground">
              Get the latest articles, tutorials, and updates delivered straight to your inbox. No spam, unsubscribe at
              any time.
            </p>
          </div>
          <div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

