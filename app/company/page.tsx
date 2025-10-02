"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Lightbulb, Users, TrendingUp, Leaf, Handshake } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CompanyPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "Pushing boundaries with cutting-edge drone solutions and AI-powered automation",
    },
    {
      icon: Target,
      title: "Efficiency & Excellence",
      description: "Delivering superior results with precision, reliability, and measurable outcomes",
    },
    {
      icon: Leaf,
      title: "Sustainability & Responsibility",
      description: "Committed to environmental stewardship, ethical practices, and reducing carbon footprint",
    },
    {
      icon: Handshake,
      title: "Collaboration & Customer Focus",
      description: "Building lasting partnerships through dedicated service and transparent communication",
    },
    {
      icon: TrendingUp,
      title: "Growth & Future-Readiness",
      description: "Continuously evolving to meet tomorrow's challenges with scalable solutions",
    },
  ]

  const leadership = [
    { name: "Sarah Chen", role: "Chief Executive Officer", initials: "SC", bio: "15+ years in aerospace technology" },
    { name: "Robert Kim", role: "Chief Operating Officer", initials: "RK", bio: "Expert in logistics optimization" },
    { name: "Thomas Bergstrom", role: "VP of Global Sales", initials: "TB", bio: "International business strategist" },
    { name: "Maria Rodriguez", role: "Chief Financial Officer", initials: "MR", bio: "Financial planning specialist" },
    { name: "Dr. James Wilson", role: "Chief Technology Officer", initials: "JW", bio: "PhD in Robotics & AI" },
    { name: "Emily Zhang", role: "Director of Sustainability", initials: "EZ", bio: "Environmental impact leader" },
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
            <span className="text-orange-500 text-sm font-semibold">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">About Ether Space Network</h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We are a leading provider of drone technology solutions, specializing in precision agriculture, aerial
            surveillance, AI-enabled logistics, and autonomous systems. Our mission is to transform industries through
            innovation, efficiency, and sustainable practices.
          </p>
        </div>
      </section>

      {/* Vision & Mission - Bento Grid */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision - Larger card */}
            <div className="md:row-span-2 bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/60 transition-all duration-300">
              <Target className="w-16 h-16 text-orange-500 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                To be the global leader in autonomous drone technology, revolutionizing how industries operate through
                intelligent aerial solutions that enhance productivity, safety, and sustainability.
              </p>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Leading innovation in autonomous flight systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Transforming traditional industries with AI-powered solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Creating sustainable and scalable aerial intelligence platforms</span>
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300">
              <Lightbulb className="w-12 h-12 text-orange-500 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/70 leading-relaxed">
                To deliver cutting-edge drone solutions that empower businesses to achieve operational excellence,
                reduce costs, and make data-driven decisions through advanced aerial intelligence.
              </p>
            </div>

            {/* Stats Card */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">50+</div>
                  <div className="text-white/60 text-sm">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">500+</div>
                  <div className="text-white/60 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">24/7</div>
                  <div className="text-white/60 text-sm">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
                  <div className="text-white/60 text-sm">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Bento Grid */}
      <section className="relative bg-gradient-to-b from-zinc-900 to-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-white/70 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First value - spans 2 columns */}
            <div className="md:col-span-2 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300">
              <Lightbulb className="w-14 h-14 text-orange-500 mb-4" />
              <h3 className="text-white font-bold text-2xl mb-3">{values[0].title}</h3>
              <p className="text-white/70 text-base leading-relaxed">{values[0].description}</p>
            </div>

            {/* Remaining values */}
            {values.slice(1).map((value, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team - Bento Grid */}
      <section className="relative bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-white/70 text-lg">Meet the experts driving our vision forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="group bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {leader.initials}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1 text-center">{leader.name}</h3>
                <p className="text-orange-500 text-sm mb-2 text-center">{leader.role}</p>
                <p className="text-white/60 text-xs text-center">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-12 text-center">
            <Users className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Be part of a dynamic team that's shaping the future of drone technology. We're always looking for talented
              individuals who share our passion for innovation and excellence.
            </p>
            <Link href="/contact">
              <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
