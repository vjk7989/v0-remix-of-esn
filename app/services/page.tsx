"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, MapPin, Cog, Shield, Package, Eye, AlertTriangle, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: Plane,
      title: "Agricultural Drone Solutions",
      description: "Transform your farming operations with precision agriculture technology",
      features: [
        "Precision crop spraying with automated flight paths",
        "Real-time crop health monitoring and disease detection",
        "Automated field mapping and boundary surveys",
        "Yield prediction analytics using AI",
        "Soil analysis and moisture mapping",
        "Pest and weed identification",
      ],
      benefits: "Reduce chemical usage by 30%, increase crop yields by 15-20%, save 90% time on field surveys",
    },
    {
      icon: MapPin,
      title: "Surveying, Mapping & LiDAR",
      description: "High-precision 3D terrain mapping and GIS data collection services",
      features: [
        "LiDAR scanning for detailed topographic data",
        "Photogrammetry and orthomosaic mapping",
        "3D terrain modeling and volumetric calculations",
        "GIS data integration and analysis",
        "Construction site progress monitoring",
        "Mining and quarry volume measurements",
      ],
      benefits: "10x faster than traditional surveying, centimeter-level accuracy, comprehensive data visualization",
    },
    {
      icon: Cog,
      title: "Fleet Leasing & Management",
      description: "Complete drone fleet solutions with maintenance and operational support",
      features: [
        "Flexible leasing options (short-term and long-term)",
        "Comprehensive maintenance and repair services",
        "Fleet management software and tracking",
        "Pilot training and certification programs",
        "Route planning and optimization",
        "24/7 technical support",
      ],
      benefits: "Zero upfront investment, predictable monthly costs, always up-to-date technology",
    },
    {
      icon: Eye,
      title: "Custom R&D Solutions",
      description: "Specialized drone development for unique industry requirements",
      features: [
        "Custom payload integration (sensors, cameras, equipment)",
        "Autonomous flight system development",
        "AI and machine learning integration",
        "Prototype design and testing",
        "Software customization and API development",
        "Regulatory compliance consulting",
      ],
      benefits: "Tailored solutions for specific needs, competitive advantage, full IP ownership options",
    },
    {
      icon: Shield,
      title: "Surveillance & Security",
      description: "Advanced aerial monitoring for enhanced safety and security",
      features: [
        "Border patrol and perimeter monitoring",
        "Critical infrastructure surveillance",
        "Event security and crowd monitoring",
        "Thermal imaging for night operations",
        "Real-time video streaming and alerts",
        "Automated threat detection using AI",
      ],
      benefits: "24/7 monitoring capability, rapid response times, comprehensive coverage of large areas",
    },
    {
      icon: Package,
      title: "Drone Logistics & Cargo",
      description: "Revolutionary last-mile delivery and cargo transport solutions",
      features: [
        "Last-mile delivery for urban and rural areas",
        "Heavy payload drones (up to 50kg capacity)",
        "Medical supply delivery to remote locations",
        "Automated warehouse-to-destination routing",
        "Real-time package tracking",
        "Temperature-controlled cargo options",
      ],
      benefits: "Reduce delivery times by 70%, lower logistics costs, access hard-to-reach locations",
    },
    {
      icon: BarChart3,
      title: "Traffic & Infrastructure Monitoring",
      description: "Smart city solutions for roads, bridges, and asset management",
      features: [
        "Highway and road condition assessment",
        "Bridge and structure inspection",
        "Traffic flow analysis and congestion monitoring",
        "Accident scene documentation",
        "Infrastructure asset management",
        "Predictive maintenance analytics",
      ],
      benefits: "Safer inspections, faster data collection, predictive maintenance reduces costs by 40%",
    },
    {
      icon: AlertTriangle,
      title: "Disaster Management & Environmental Monitoring",
      description: "Emergency response and environmental protection services",
      features: [
        "Rapid disaster assessment and mapping",
        "Search and rescue operations support",
        "Flood and wildfire monitoring",
        "Environmental pollution detection",
        "Wildlife tracking and conservation",
        "Climate change impact studies",
      ],
      benefits: "Save lives with faster response, minimize environmental damage, data-driven decision making",
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
            <span className="text-orange-500 text-sm font-semibold">Our Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Comprehensive Drone Solutions</h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From agriculture to disaster management, we provide end-to-end drone technology services tailored to your
            industry needs
          </p>
        </div>
      </section>

      {/* Services Grid - Bento Layout */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300 ${
                index % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-10 h-10 text-orange-500" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-white font-bold text-2xl mb-3">{service.title}</h3>
                  <p className="text-white/70 text-base mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-3 text-sm uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-white/60 text-sm flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-orange-500 font-semibold mb-3 text-sm uppercase tracking-wide">Benefits</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{service.benefits}</p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="group/btn bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-zinc-900 to-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote tailored to your specific needs
          </p>
          <Link href="/contact">
            <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
