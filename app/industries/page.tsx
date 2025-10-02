import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Sprout, Building2, Factory, Truck, Zap, Mountain } from "lucide-react"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Sprout,
      title: "Agriculture",
      description:
        "Transform farming operations with precision agriculture, crop monitoring, and automated spraying solutions.",
      benefits: [
        "Reduce chemical usage by up to 40%",
        "Increase crop yields through early disease detection",
        "Save time with automated field operations",
        "Optimize irrigation and fertilization",
      ],
      image: "/drone-spraying-agricultural-field.jpg",
    },
    {
      icon: Building2,
      title: "Construction & Real Estate",
      description: "Streamline project management with aerial surveys, progress monitoring, and site documentation.",
      benefits: [
        "Accelerate site surveys and inspections",
        "Monitor construction progress in real-time",
        "Create detailed 3D models and maps",
        "Improve safety with remote inspections",
      ],
      image: "/construction-site-aerial-view-drone.jpg",
    },
    {
      icon: Factory,
      title: "Mining & Resources",
      description: "Enhance operations with volumetric analysis, site mapping, and safety inspections.",
      benefits: [
        "Accurate stockpile measurements",
        "Reduce survey time by 75%",
        "Improve worker safety",
        "Environmental compliance monitoring",
      ],
      image: "/mining-site-drone-survey.jpg",
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Optimize supply chains with autonomous delivery, warehouse management, and route planning.",
      benefits: [
        "Faster last-mile delivery",
        "Reduce transportation costs",
        "Real-time inventory tracking",
        "Emergency supply delivery",
      ],
      image: "/logistics-drone-delivery.jpg",
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Maintain infrastructure with automated inspections of power lines, pipelines, and facilities.",
      benefits: [
        "Reduce inspection costs by 60%",
        "Identify issues before failures occur",
        "Minimize downtime",
        "Improve worker safety",
      ],
      image: "/power-line-inspection-drone.jpg",
    },
    {
      icon: Mountain,
      title: "Environmental & Conservation",
      description: "Monitor ecosystems, track wildlife, and assess environmental impact with aerial intelligence.",
      benefits: [
        "Non-invasive wildlife monitoring",
        "Forest health assessment",
        "Disaster response and assessment",
        "Conservation planning",
      ],
      image: "/environmental-monitoring-drone-forest.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Delivering specialized drone solutions across diverse sectors to drive efficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <industry.icon className="w-16 h-16 text-orange-500 mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{industry.title}</h2>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">{industry.description}</p>
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-lg">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/70">
                        <span className="text-orange-500 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <img src={industry.image || "/placeholder.svg"} alt={industry.title} className="w-full h-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
