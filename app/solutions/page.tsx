import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Plane, MapPin, Cog, Package, Building, Factory, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Plane,
      title: "Agricultural Drone Solutions",
      description: "Precision spraying, crop monitoring, and AI-powered analytics for modern farming operations.",
      features: [
        "Automated pesticide and fertilizer application",
        "Real-time crop health monitoring",
        "Yield prediction and optimization",
        "Soil analysis and mapping",
      ],
    },
    {
      icon: MapPin,
      title: "Surveying & Mapping",
      description: "High-precision aerial surveys, LIDAR mapping, and 3D terrain modeling for various industries.",
      features: [
        "Topographic surveys",
        "Construction site monitoring",
        "Infrastructure inspection",
        "Land use planning",
      ],
    },
    {
      icon: Package,
      title: "Logistics & Delivery",
      description: "Autonomous drone delivery systems for last-mile logistics and emergency supplies.",
      features: [
        "Urban delivery networks",
        "Medical supply transport",
        "Warehouse inventory management",
        "Route optimization",
      ],
    },
    {
      icon: Building,
      title: "Infrastructure Inspection",
      description: "Safe and efficient inspection of bridges, towers, pipelines, and other critical infrastructure.",
      features: [
        "Bridge and dam inspection",
        "Power line monitoring",
        "Pipeline surveillance",
        "Building facade assessment",
      ],
    },
    {
      icon: Factory,
      title: "Industrial Monitoring",
      description: "Real-time monitoring and analytics for mining, oil & gas, and manufacturing operations.",
      features: [
        "Site security and surveillance",
        "Equipment monitoring",
        "Environmental compliance",
        "Safety inspections",
      ],
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored drone applications designed specifically for your unique business requirements.",
      features: [
        "Custom payload integration",
        "Specialized software development",
        "Industry-specific workflows",
        "Dedicated support team",
      ],
    },
  ]

  const products = [
    {
      name: "AgriDrone Pro",
      category: "Agriculture",
      description: "Professional-grade agricultural drone with precision spraying and AI crop monitoring.",
      price: "Starting at $15,000",
      features: [
        "20L payload capacity",
        "AI-powered crop health analysis",
        "GPS-guided precision spraying",
        "40-minute flight time",
        "Weather-resistant design",
      ],
      image: "/agricultural-drone-spraying.png",
    },
    {
      name: "SurveyMaster X1",
      category: "Surveying",
      description: "High-precision mapping drone with LIDAR and photogrammetry capabilities.",
      price: "Starting at $25,000",
      features: [
        "LIDAR sensor integration",
        "4K camera with gimbal stabilization",
        "Real-time 3D mapping",
        "60-minute flight time",
        "Centimeter-level accuracy",
      ],
      image: "/surveying-drone-with-lidar-sensor.jpg",
    },
    {
      name: "LogiFleet System",
      category: "Logistics",
      description: "Complete drone delivery system with autonomous navigation and fleet management.",
      price: "Custom Pricing",
      features: [
        "Autonomous delivery routing",
        "5kg payload capacity",
        "Weather-adaptive flight",
        "Real-time tracking",
        "Fleet management software",
      ],
      image: "/delivery-drone-carrying-package.jpg",
    },
    {
      name: "InspectPro 360",
      category: "Inspection",
      description: "Industrial inspection drone with thermal imaging and obstacle avoidance.",
      price: "Starting at $18,000",
      features: [
        "Thermal and RGB cameras",
        "360° obstacle detection",
        "Confined space navigation",
        "HD video recording",
        "Modular sensor system",
      ],
      image: "/industrial-inspection-drone.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Solutions & Products</h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive drone technology solutions and industry-leading hardware designed to transform your
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Solutions</h2>
            <p className="text-white/70 text-lg">Tailored drone applications for every industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <solution.icon className="w-14 h-14 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-2xl mb-4">{solution.title}</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-zinc-900 to-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-white/70 text-lg">Industry-leading drone hardware for professional applications</p>
          </div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-block bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {product.category}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{product.name}</h2>
                  <p className="text-white/70 text-lg mb-6 leading-relaxed">{product.description}</p>
                  <div className="text-2xl font-bold text-orange-500 mb-6">{product.price}</div>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/80">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                      Request Quote
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto" />
                  </div>
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
