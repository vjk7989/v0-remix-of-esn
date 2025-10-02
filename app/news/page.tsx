"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  const articles = [
    {
      title: "Disaster Management & Emergency Response: How Drones Save Lives",
      excerpt:
        "Exploring the critical role of drones in disaster zones, from search and rescue operations to damage assessment and relief coordination in real-time emergency situations.",
      date: "March 15, 2025",
      category: "Emergency Response",
      readTime: "8 min read",
      featured: true,
    },
    {
      title: "Drone Surveillance & Security: Enhancing Safety with Aerial Intelligence",
      excerpt:
        "How advanced drone surveillance systems are revolutionizing security operations across borders, facilities, and public spaces with AI-powered threat detection.",
      date: "March 10, 2025",
      category: "Security",
      readTime: "6 min read",
    },
    {
      title: "Drone Logistics: A Game-Changer for Last-Mile Delivery",
      excerpt:
        "Examining how drone delivery is transforming logistics, reducing costs by up to 40%, and enabling faster, more efficient last-mile solutions for e-commerce.",
      date: "March 5, 2025",
      category: "Logistics",
      readTime: "7 min read",
    },
    {
      title: "The Role of AI & Automation in Drone Technology",
      excerpt:
        "Deep dive into how artificial intelligence and machine learning are enabling autonomous flight, intelligent routing, and predictive maintenance systems.",
      date: "February 28, 2025",
      category: "Technology",
      readTime: "10 min read",
    },
    {
      title: "Ensuring Compliance: Drone Regulations & Legal Considerations in India",
      excerpt:
        "A comprehensive guide to navigating India's drone regulations, DGCA licensing requirements, and legal framework for commercial operations.",
      date: "February 20, 2025",
      category: "Compliance",
      readTime: "12 min read",
    },
    {
      title: "Why Great Businesses Fail at Scaling Drone Operations",
      excerpt:
        "Common pitfalls companies face when scaling drone programs and proven strategies to overcome operational challenges and achieve sustainable growth.",
      date: "February 15, 2025",
      category: "Business",
      readTime: "9 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="relative bg-black/50 backdrop-blur-sm border-b border-white/10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-500 text-sm font-semibold">Latest Updates</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Latest Insights</h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto">
            Stay updated with the latest trends, innovations, and insights in drone technology and aerial intelligence.
          </p>
        </div>
      </section>

      {/* Articles - Bento Grid */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Article - Spans 2 columns */}
            <article className="lg:col-span-2 lg:row-span-2 group bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/60 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-semibold rounded-full">
                  {articles[0].category}
                </span>
                <div className="flex items-center text-white/60 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {articles[0].date}
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {articles[0].readTime}
                </div>
              </div>

              <h2 className="text-white font-bold text-3xl mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                {articles[0].title}
              </h2>

              <p className="text-white/70 text-base leading-relaxed mb-6">{articles[0].excerpt}</p>

              <Button
                variant="ghost"
                className="text-orange-500 hover:text-orange-400 p-0 h-auto font-semibold group/btn text-base"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </article>

            {/* Regular Articles */}
            {articles.slice(1).map((article, index) => (
              <article
                key={index}
                className="group bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-500 text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>

                <h2 className="text-white font-bold text-lg mb-3 group-hover:text-orange-500 transition-colors leading-tight">
                  {article.title}
                </h2>

                <p className="text-white/70 text-sm leading-relaxed mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between text-white/60 text-xs mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="text-orange-500 hover:text-orange-400 p-0 h-auto font-semibold group/btn text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative bg-gradient-to-b from-zinc-900 to-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Stay Informed</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on drone technology, industry insights, and exclusive
              content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
