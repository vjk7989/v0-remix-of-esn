import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-zinc-900 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/v0-logo.png" alt="Ether Space Network" className="w-10 h-10" />
              <span className="text-white font-semibold text-lg">ESN</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Driving the future of drone technology and aerial intelligence.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-white/60 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link href="/company" className="text-white/60 hover:text-white text-sm transition-colors">
                Company
              </Link>
              <Link href="/news" className="text-white/60 hover:text-white text-sm transition-colors">
                News
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="flex flex-col space-y-2">
              <span className="text-white/60 text-sm">Agricultural Drones</span>
              <span className="text-white/60 text-sm">Surveying & Mapping</span>
              <span className="text-white/60 text-sm">Fleet Management</span>
              <span className="text-white/60 text-sm">Drone Logistics</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="text-white/60 text-sm space-y-2 leading-relaxed">
              <p>Plot No. 128, Road No. 10</p>
              <p>Jubilee Hills, Hyderabad</p>
              <p>Telangana – 500033</p>
              <p className="mt-4">info@etherspacenetwork.com</p>
              <p>+91-79934 52222</p>
              <p>+91-70753 42244</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>&copy; 2025 Ether Space Network. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
