"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="relative bg-black/50 backdrop-blur-sm border-b border-white/10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-500 text-sm font-semibold">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Get a Custom Quote</h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto">
            Fast, free, and tailored to your needs. Let's discuss how our drone solutions can transform your operations.
          </p>
        </div>
      </section>

      {/* Contact Form & Info - Bento Grid */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Plot No. 128, Road No. 10
                  <br />
                  Jubilee Hills, Hyderabad
                  <br />
                  Telangana – 500033, India
                </p>
              </div>

              <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-white/60 text-sm">info@etherspacenetwork.com</p>
              </div>

              <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-white/60 text-sm">+91-79934 52222</p>
                <p className="text-white/60 text-sm">+91-70753 42244</p>
              </div>
            </div>

            {/* Contact Form - Spans 2 columns */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="+91-XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2 text-sm">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-white font-medium mb-2 text-sm">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="agricultural">Agricultural Drone Solutions</option>
                    <option value="surveying">Surveying, Mapping & LiDAR</option>
                    <option value="fleet">Fleet Leasing & Management</option>
                    <option value="surveillance">Surveillance & Security</option>
                    <option value="logistics">Drone Logistics</option>
                    <option value="custom">Custom R&D Solutions</option>
                    <option value="disaster">Disaster Management</option>
                    <option value="traffic">Traffic & Infrastructure</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500 resize-none transition-colors"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
