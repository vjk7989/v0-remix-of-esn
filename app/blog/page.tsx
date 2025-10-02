import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Precision Agriculture: How AI-Powered Drones Are Transforming Farming",
      excerpt:
        "Discover how artificial intelligence and drone technology are revolutionizing modern agriculture, reducing costs and increasing yields.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      category: "Agriculture",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "5 min read",
    },
    {
      title: "LIDAR vs Photogrammetry: Choosing the Right Surveying Technology",
      excerpt:
        "A comprehensive comparison of LIDAR and photogrammetry technologies for aerial surveying and mapping applications.",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "7 min read",
    },
    {
      title: "5 Ways Drone Delivery Is Reshaping Last-Mile Logistics",
      excerpt:
        "Explore how autonomous drone delivery systems are solving the challenges of last-mile logistics in urban environments.",
      author: "Emily Watson",
      date: "March 5, 2024",
      category: "Logistics",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "6 min read",
    },
    {
      title: "Safety First: Best Practices for Industrial Drone Inspections",
      excerpt:
        "Essential safety guidelines and best practices for conducting drone inspections in industrial environments.",
      author: "David Kim",
      date: "February 28, 2024",
      category: "Safety",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "8 min read",
    },
    {
      title: "The Role of Drones in Environmental Conservation",
      excerpt:
        "How drone technology is helping conservationists monitor wildlife, track deforestation, and protect endangered ecosystems.",
      author: "Dr. Priya Patel",
      date: "February 20, 2024",
      category: "Environment",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "6 min read",
    },
    {
      title: "ROI Analysis: Calculating the Business Value of Drone Technology",
      excerpt:
        "A practical guide to measuring return on investment when implementing drone solutions in your business operations.",
      author: "James Thompson",
      date: "February 15, 2024",
      category: "Business",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "10 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Blog & Insights</h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Expert insights, industry trends, and the latest developments in drone technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative bg-zinc-900 py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={posts[0].image || "/placeholder.svg"}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{posts[0].title}</h2>
                <p className="text-white/70 text-base leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                  <span>{posts[0].readTime}</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative bg-zinc-900 py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-orange-500/20 text-orange-500 px-2 py-1 rounded text-xs font-medium mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-white/60 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold text-sm transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
