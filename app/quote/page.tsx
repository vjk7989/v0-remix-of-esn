"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const services = [
    "Agricultural Drone Solutions",
    "Drone Surveying, Mapping & LIDAR",
    "Drone Fleet Management & Leasing",
    "Custom Drone Solutions & R&D",
    "Surveillance & Reconnaissance Drones",
    "Drone Logistics & Cargo Transportation",
    "Traffic & Infrastructure Monitoring",
    "Disaster Management & Environmental Monitoring",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
        <Navigation />

        <main className="relative z-10 py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Get a Custom Quote</h1>
              <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
                Fast, free and tailored to your needs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500/20 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Address</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Plot No. 128, Road No. 10,
                          <br />
                          Jubilee Hills, Hyderabad,
                          <br />
                          Telangana – 500033
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500/20 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:info@etherspacenetwork.com"
                          className="text-orange-500 hover:text-orange-400 text-sm"
                        >
                          info@etherspacenetwork.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500/20 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Phone</h3>
                        <div className="space-y-1">
                          <a href="tel:+917993452222" className="text-orange-500 hover:text-orange-400 text-sm block">
                            +91-79934 52222
                          </a>
                          <a href="tel:+917075342244" className="text-orange-500 hover:text-orange-400 text-sm block">
                            +91-70753 42244
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
                  <h3 className="text-white font-bold text-xl mb-3">Why Choose ESN?</h3>
                  <ul className="space-y-3 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Industry-leading drone technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Custom solutions for your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Proven track record with 200+ partners</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-2">
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-white font-medium mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="bg-black/50 border-white/20 text-white placeholder:text-white/40 focus:border-orange-500"
                          placeholder="John"
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-white font-medium mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="bg-black/50 border-white/20 text-white placeholder:text-white/40 focus:border-orange-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-black/50 border-white/20 text-white placeholder:text-white/40 focus:border-orange-500"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-white font-medium mb-2">
                          Phone *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-black/50 border-white/20 text-white placeholder:text-white/40 focus:border-orange-500"
                          placeholder="+91-XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-black/50 border-white/20 text-white placeholder:text-white/40 focus:border-orange-500"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-white font-medium mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-black/50 border border-white/20 text-white rounded-md px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-black/50 border-white/20 text-white placeholder:text-white/40 focus:border-orange-500 min-h-[150px]"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 rounded-lg text-lg font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
                    >
                      Submit Quote Request
                    </Button>

                    <p className="text-white/50 text-sm text-center">We'll get back to you within 24 hours</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
