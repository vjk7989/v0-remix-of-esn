import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Users, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering industries through cutting-edge drone technology and automation solutions.",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Building lasting partnerships by understanding and exceeding client expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Pioneering new technologies and approaches to solve complex industry challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering world-class quality in every project, every time.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">About Ether Space Network</h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We are pioneers in drone technology, transforming industries through intelligent automation, precision
              agriculture, and aerial intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>
                  Founded with a vision to revolutionize how industries operate, Ether Space Network has grown from a
                  small startup to a leading provider of drone technology solutions.
                </p>
                <p>
                  Our journey began with a simple question: How can we use autonomous technology to make businesses more
                  efficient, sustainable, and profitable? Today, we serve clients across agriculture, logistics,
                  surveying, and more.
                </p>
                <p>
                  With a team of expert engineers, data scientists, and industry specialists, we continue to push the
                  boundaries of what's possible with drone technology.
                </p>
              </div>
            </div>
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">2018</div>
                  <p className="text-white/70">Company Founded</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                  <p className="text-white/70">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                  <p className="text-white/70">Team Members</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                  <p className="text-white/70">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-gradient-to-b from-zinc-900 to-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-white/70 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-white font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-white/70 text-lg">
              A diverse group of experts passionate about transforming industries through drone technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "Former aerospace engineer with 15+ years in autonomous systems and AI.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Rodriguez",
                role: "CTO & Co-Founder",
                bio: "Robotics expert specializing in drone navigation and computer vision.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Emily Watson",
                role: "VP of Operations",
                bio: "Operations leader with expertise in scaling technology companies.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Kim",
                role: "Head of Engineering",
                bio: "Software architect with deep experience in autonomous flight systems.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Dr. Priya Patel",
                role: "Head of R&D",
                bio: "Research scientist focused on AI and machine learning for agriculture.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "James Thompson",
                role: "VP of Sales",
                bio: "Sales leader with track record in enterprise technology solutions.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
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
