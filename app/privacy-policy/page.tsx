"use client"

import { Shield, Lock, Eye, FileText, Users, Globe } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Introduction",
      content:
        "At Ether Space Network (ESN), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, protect, and share information when you interact with our website, services, and products.",
    },
    {
      icon: Eye,
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          items: [
            "Name, email address, phone number, and business details",
            "Company name and job title",
            "Billing and payment information",
            "Communication preferences",
          ],
        },
        {
          subtitle: "Usage Data",
          items: [
            "IP address, browser type, and device information",
            "Pages visited and time spent on our website",
            "Referring website and search terms used",
            "Cookies and tracking technologies data",
          ],
        },
        {
          subtitle: "Transaction Data",
          items: [
            "Service inquiries and quotes requested",
            "Purchase history and order details",
            "Customer support interactions",
          ],
        },
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Data",
      items: [
        "To provide and improve our drone technology services",
        "To respond to inquiries, quotes, and customer support requests",
        "To send marketing communications (with opt-out options)",
        "To analyze website usage and optimize user experience",
        "To comply with legal obligations and regulatory requirements",
        "To prevent fraud and ensure security of our systems",
      ],
    },
    {
      icon: Users,
      title: "Data Sharing & Third Parties",
      content:
        "We may share your information with trusted third-party service providers who assist us in operating our business, such as payment processors, cloud hosting providers, and analytics services. We ensure these parties maintain appropriate security measures and use your data only for specified purposes.",
      items: [
        "Service providers and business partners (under strict confidentiality agreements)",
        "Regulatory authorities when required by law",
        "In case of business transfers (mergers, acquisitions, or asset sales)",
      ],
    },
    {
      icon: Shield,
      title: "Your Rights",
      items: [
        "Access and review your personal information",
        "Request corrections or updates to your data",
        "Opt-out of marketing communications at any time",
        "Request deletion of your data (subject to legal requirements)",
        "Manage cookie preferences through browser settings",
        "Lodge complaints with data protection authorities",
      ],
    },
    {
      icon: Globe,
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="relative bg-black/50 backdrop-blur-sm border-b border-white/10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-500 text-sm font-semibold">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-white/70 text-lg">Last Updated: March 2025</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                  {section.content && <p className="text-white/70 leading-relaxed mb-4">{section.content}</p>}

                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-white/60 flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx}>
                          <h3 className="text-white font-semibold mb-2">{subsection.subtitle}</h3>
                          <ul className="space-y-2">
                            {subsection.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-white/60 flex items-start gap-2">
                                <span className="text-orange-500 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Legal & Jurisdiction */}
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Legal & Jurisdiction</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                <strong className="text-white">Governing Law:</strong> This Privacy Policy is governed by the laws of
                India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the
                courts in Hyderabad, Telangana.
              </p>
              <p>
                <strong className="text-white">Disclaimer:</strong> While we strive to protect your information, no
                method of transmission over the internet is 100% secure. We cannot guarantee absolute security but
                employ industry-standard measures to safeguard your data.
              </p>
              <p>
                <strong className="text-white">Intellectual Property:</strong> All content, trademarks, and materials on
                this website are the property of Ether Space Network Private Limited and are protected by applicable
                intellectual property laws.
              </p>
            </div>
          </div>

          {/* Contact for Privacy */}
          <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
            <p className="text-white/70 mb-6">
              If you have any questions or concerns about our Privacy Policy or how we handle your data, please contact
              us:
            </p>
            <div className="text-white/60 space-y-2">
              <p>Email: info@etherspacenetwork.com</p>
              <p>Phone: +91-79934 52222 | +91-70753 42244</p>
              <p>Address: Plot No. 128, Road No. 10, Jubilee Hills, Hyderabad, Telangana – 500033</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
