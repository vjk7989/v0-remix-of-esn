import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Agricultural Operations",
      images: ["/drone-spraying-crops-sunset.jpg", "/agricultural-drone-over-wheat-field.jpg", "/precision-agriculture-drone-monitoring.jpg"],
    },
    {
      title: "Surveying & Mapping",
      images: ["/drone-surveying-construction-site.jpg", "/3d-terrain-mapping-drone.jpg", "/lidar-drone-scanning-landscape.jpg"],
    },
    {
      title: "Industrial Inspection",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      title: "Delivery & Logistics",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Gallery</h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our drone technology in action across various industries and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {galleryItems.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${category.title} ${idx + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
