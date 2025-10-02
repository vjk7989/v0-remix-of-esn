"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, MapPin, Cog, Eye, CheckCircle2 } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.73/build/spline-viewer.js"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const services = [
    {
      icon: Plane,
      title: "Agricultural Drone Solutions",
      description:
        "Precision spraying for fertilizers, pesticides, and nano fertilizers, reducing chemical waste and improving absorption rates",
      features: [
        "AI-powered crop health monitoring for early disease detection",
        "Drone-assisted seeding and irrigation",
        "Agricultural mapping & land surveys",
      ],
    },
    {
      icon: MapPin,
      title: "Drone Surveying, Mapping & LIDAR",
      description: "High-precision aerial mapping for land use planning, topographic analysis, and GIS applications",
      features: ["LIDAR technology for 3D terrain modeling", "Infrastructure and industrial site surveys"],
    },
    {
      icon: Cog,
      title: "Drone Fleet Management & Leasing",
      description: "Leasing programs for businesses, PACS, FPOs with full-service fleet management",
      features: ["Maintenance, software upgrades, battery replacements", "AI-powered autonomous routing"],
    },
    {
      icon: Eye,
      title: "Custom Drone Solutions & R&D",
      description: "Industry-specific drone applications for waste management, mining, and more",
      features: ["Next-generation autonomous flight systems", "Tailor-made payload & sensor integrations"],
    },
  ]

  const stats = [
    { value: "10K+", label: "Shipments Delivered" },
    { value: "99.7%", label: "Customer Satisfaction" },
    { value: "200+", label: "Global Partners" },
    { value: "50+", label: "Warehousing Facilities" },
  ]

  const workflow = [
    {
      step: "01",
      title: "Consultation & Needs Assessment",
      description: "Understanding your unique requirements and challenges through detailed analysis",
    },
    {
      step: "02",
      title: "Custom Drone Deployment & Strategy",
      description: "Designing the perfect solution tailored to your specific operations",
    },
    {
      step: "03",
      title: "Execution & Performance Optimization",
      description: "Implementing and fine-tuning systems for maximum efficiency and results",
    },
    {
      step: "04",
      title: "Continuous Support & Expansion",
      description: "Ongoing maintenance, updates, and technical assistance for your operations",
    },
    {
      step: "05",
      title: "Scaling & Long-Term Partnership",
      description: "Growing together as your business needs evolve and expand",
    },
  ]

  const testimonials = [
    {
      quote:
        "ESN's agricultural drone solutions have transformed our farming operations. The precision spraying has reduced our chemical costs by 40% while improving crop yields.",
      author: "Sarah L., Agricultural Cooperative",
    },
    {
      quote:
        "The fleet management service is exceptional. We can focus on our core business while ESN handles all the technical aspects of our drone operations.",
      author: "Michael B., Logistics Manager",
    },
    {
      quote:
        "Their custom R&D team developed a specialized solution for our mining surveys that exceeded all expectations. True innovation at work.",
      author: "James R., Mining Operations Director",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <spline-viewer
            url="https://prod.spline.design/TZ9w42JTBpjBFtWH/scene.splinecode"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-transparent z-5 pointer-events-none">
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                  <stop offset="30%" stopColor="rgba(251,146,60,1)" />
                  <stop offset="70%" stopColor="rgba(249,115,22,0.8)" />
                  <stop offset="100%" stopColor="rgba(249,115,22,0)" />
                </radialGradient>
                <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="25%" stopColor="rgba(251,146,60,0.9)" />
                  <stop offset="60%" stopColor="rgba(234,88,12,0.7)" />
                  <stop offset="100%" stopColor="rgba(234,88,12,0)" />
                </radialGradient>
                <radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                  <stop offset="35%" stopColor="rgba(251,146,60,1)" />
                  <stop offset="75%" stopColor="rgba(234,88,12,0.6)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
                <radialGradient id="heroTextBg" cx="30%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="rgba(249,115,22,0.15)" />
                  <stop offset="40%" stopColor="rgba(251,146,60,0.08)" />
                  <stop offset="80%" stopColor="rgba(234,88,12,0.05)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
                <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                  <stop offset="15%" stopColor="rgba(249,115,22,0.8)" />
                  <stop offset="85%" stopColor="rgba(249,115,22,0.8)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,1)" />
                </linearGradient>
                <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                  <stop offset="12%" stopColor="rgba(251,146,60,0.7)" />
                  <stop offset="88%" stopColor="rgba(251,146,60,0.7)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,1)" />
                </linearGradient>
                <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                  <stop offset="18%" stopColor="rgba(234,88,12,0.8)" />
                  <stop offset="82%" stopColor="rgba(234,88,12,0.8)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,1)" />
                </linearGradient>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g>
                <ellipse cx="300" cy="350" rx="400" ry="200" fill="url(#heroTextBg)" opacity="0.6" />

                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <g key={i}>
                    <path
                      id={`thread${i}`}
                      d={`M${50 + i * 10} 720 Q${200 + i * 20} ${590 + i * 10} ${350 + i * 15} ${540 + i * 5} Q${500 + i * 10} ${490 + i * 5} ${650 + i * 10} ${520 + i * 5} Q${800 + i * 10} ${550 - i * 5} ${950 + i * 10} ${460 - i * 10} Q${1100 + i * 10} ${370 - i * 5} 1200 340`}
                      stroke={`url(#threadFade${(i % 3) + 1})`}
                      strokeWidth={0.5 + (i % 3) * 0.3}
                      fill="none"
                      opacity={0.4 + (i % 3) * 0.15}
                    />
                    <circle
                      r={1 + (i % 3) * 0.5}
                      fill={`url(#neonPulse${(i % 3) + 1})`}
                      opacity="1"
                      filter="url(#neonGlow)"
                    >
                      <animateMotion dur={`${4 + i * 0.2}s`} repeatCount="indefinite">
                        <mpath href={`#thread${i}`} />
                      </animateMotion>
                    </circle>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>

        <Navigation />

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-start justify-start sm:justify-center min-h-screen px-4 sm:px-6 lg:px-12 max-w-6xl pt-24 sm:pt-32 lg:pt-20 pl-6 sm:pl-12 lg:pl-20 pointer-events-auto">
          <div className="mb-4 sm:mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2">
              <span className="text-white text-xs md:text-xs">The Future is Autonomous</span>
            </div>
          </div>

          <h1 className="text-white text-4xl sm:text-3xl md:text-5xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 text-balance lg:text-4xl">
            Redefining Industries
            <br />
            Through{" "}
            <LineShadowText className="italic font-light" shadowColor="white">
              Automation
            </LineShadowText>
            <br />& Aerial Intelligence
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-sm mb-6 sm:mb-8 max-w-2xl text-pretty lg:text-xl">
            Driving the future of drone technology with precision agriculture,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            aerial intelligence, and AI-enabled logistics solutions.
          </p>

          <Link href="/quote" className="pointer-events-auto">
            <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-xs lg:text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
              Get a Quote
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
        </main>
      </div>

      {/* Intro Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-white/80 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              At <span className="text-orange-500 font-semibold">Ether Space Network (ESN)</span>, we are driving the
              future of drone technology, precision agriculture, logistics, and intelligent automation. Our innovative
              solutions empower businesses, governments, and industries to operate more efficiently, sustainably, and
              profitably.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-white/70 text-lg">Our proven process from consultation to scaling</p>
          </div>

          {/* Interactive Image Slider */}
          <div className="workflow-slider-container">
            <input className="workflow-radio" type="radio" name="workflow" id="workflow1" defaultChecked />
            <label className="workflow-card" htmlFor="workflow1">
              <div className="workflow-collapsed-label">
                <span className="workflow-collapsed-step">01</span>
                <span className="workflow-collapsed-text">Consultation</span>
              </div>
              <div className="workflow-content">
                <h1 className="workflow-title">
                  <span className="workflow-step">01</span>
                  <span className="workflow-name">Consultation & Needs Assessment</span>
                </h1>
                <h3 className="workflow-description">
                  <span>Understanding your unique requirements and challenges through detailed analysis</span>
                </h3>
              </div>
            </label>

            <input className="workflow-radio" type="radio" name="workflow" id="workflow2" />
            <label className="workflow-card" htmlFor="workflow2">
              <div className="workflow-collapsed-label">
                <span className="workflow-collapsed-step">02</span>
                <span className="workflow-collapsed-text">Deployment</span>
              </div>
              <div className="workflow-content">
                <h1 className="workflow-title">
                  <span className="workflow-step">02</span>
                  <span className="workflow-name">Custom Drone Deployment & Strategy</span>
                </h1>
                <h3 className="workflow-description">
                  <span>Designing the perfect solution tailored to your specific operations</span>
                </h3>
              </div>
            </label>

            <input className="workflow-radio" type="radio" name="workflow" id="workflow3" />
            <label className="workflow-card" htmlFor="workflow3">
              <div className="workflow-collapsed-label">
                <span className="workflow-collapsed-step">03</span>
                <span className="workflow-collapsed-text">Execution</span>
              </div>
              <div className="workflow-content">
                <h1 className="workflow-title">
                  <span className="workflow-step">03</span>
                  <span className="workflow-name">Execution & Performance Optimization</span>
                </h1>
                <h3 className="workflow-description">
                  <span>Implementing and fine-tuning systems for maximum efficiency and results</span>
                </h3>
              </div>
            </label>

            <input className="workflow-radio" type="radio" name="workflow" id="workflow4" />
            <label className="workflow-card" htmlFor="workflow4">
              <div className="workflow-collapsed-label">
                <span className="workflow-collapsed-step">04</span>
                <span className="workflow-collapsed-text">Support</span>
              </div>
              <div className="workflow-content">
                <h1 className="workflow-title">
                  <span className="workflow-step">04</span>
                  <span className="workflow-name">Continuous Support & Expansion</span>
                </h1>
                <h3 className="workflow-description">
                  <span>Ongoing maintenance, updates, and technical assistance for your operations</span>
                </h3>
              </div>
            </label>

            <input className="workflow-radio" type="radio" name="workflow" id="workflow5" />
            <label className="workflow-card" htmlFor="workflow5">
              <div className="workflow-collapsed-label">
                <span className="workflow-collapsed-step">05</span>
                <span className="workflow-collapsed-text">Scaling</span>
              </div>
              <div className="workflow-content">
                <h1 className="workflow-title">
                  <span className="workflow-step">05</span>
                  <span className="workflow-name">Scaling & Long-Term Partnership</span>
                </h1>
                <h3 className="workflow-description">
                  <span>Growing together as your business needs evolve and expand</span>
                </h3>
              </div>
            </label>
          </div>
        </div>

        <style jsx>{`
          .workflow-slider-container {
            display: flex;
            height: 24rem;
            margin: 0 auto;
            max-width: 90vw;
            width: 100%;
            gap: 0.8rem;
          }

          .workflow-radio {
            display: none;
          }

          .workflow-card {
            background: transparent;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 1.5rem;
            cursor: pointer;
            flex: 1;
            overflow: hidden;
            position: relative;
            transition: all 0.5s cubic-bezier(0.05, 0.6, 0.39, 0.94);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .workflow-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
            z-index: 0;
            transition: all 0.5s ease;
          }

          .workflow-card:hover {
            box-shadow: 0 0.7rem 1.5rem rgba(249, 115, 22, 0.3);
            border-color: rgba(249, 115, 22, 0.5);
          }

          .workflow-card:hover::before {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%);
          }

          /* Properly assigned background images to each card */
          .workflow-card:nth-of-type(2) {
            background-image: url("/consultation-drone-meeting.jpg");
          }

          .workflow-card:nth-of-type(4) {
            background-image: url("/drone-deployment-field.jpg");
          }

          .workflow-card:nth-of-type(6) {
            background-image: url("/drone-execution-flight.jpg");
          }

          .workflow-card:nth-of-type(8) {
            background-image: url("/drone-support-maintenance.jpg");
          }

          .workflow-card:nth-of-type(10) {
            background-image: url("/drone-scaling-fleet.jpg");
          }

          /* Added collapsed state label styling */
          .workflow-collapsed-label {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-90deg);
            z-index: 2;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            opacity: 1;
            transition: opacity 0.3s ease;
            white-space: nowrap;
          }

          .workflow-collapsed-step {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f97316;
          }

          .workflow-collapsed-text {
            font-size: 1rem;
            font-weight: 600;
            color: white;
            letter-spacing: 0.05em;
          }

          .workflow-content {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2rem 1.5rem;
          }

          .workflow-title {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            opacity: 0;
            transform: translateX(2rem);
            transition: 290ms cubic-bezier(0.05, 0.6, 0.42, 0.94) 300ms;
            transition-property: opacity, transform;
            user-select: none;
          }

          .workflow-step {
            font-size: 3rem;
            font-weight: 700;
            color: #f97316;
            line-height: 1;
          }

          .workflow-name {
            font-size: 1.5rem;
            font-weight: 600;
            color: white;
            line-height: 1.2;
          }

          .workflow-description {
            opacity: 0;
            transform: translateX(2rem);
            transition: 290ms cubic-bezier(0.05, 0.62, 0.4, 0.95) 300ms;
            transition-property: opacity, transform;
            user-select: none;
            color: rgba(255, 255, 255, 0.8);
            font-size: 1rem;
            line-height: 1.5;
            font-weight: 400;
          }

          /* Hide collapsed label and show expanded content when checked */
          .workflow-radio:checked + .workflow-card {
            flex: 9;
            border-color: rgba(249, 115, 22, 0.8);
            box-shadow: 0 0.5rem 2rem rgba(249, 115, 22, 0.4);
          }

          .workflow-radio:checked + .workflow-card::before {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(249, 115, 22, 0.2) 100%);
          }

          .workflow-radio:checked + .workflow-card .workflow-collapsed-label {
            opacity: 0;
            pointer-events: none;
          }

          .workflow-radio:checked + .workflow-card .workflow-title {
            opacity: 1;
            transform: translateX(0);
          }

          .workflow-radio:checked + .workflow-card .workflow-description {
            opacity: 1;
            transform: translateX(0);
          }

          @media (max-width: 768px) {
            .workflow-slider-container {
              flex-direction: column;
              height: auto;
              gap: 1rem;
            }

            .workflow-card {
              min-height: 8rem;
            }

            .workflow-radio:checked + .workflow-card {
              min-height: 16rem;
            }

            .workflow-collapsed-label {
              transform: translate(-50%, -50%) rotate(0deg);
            }

            .workflow-step {
              font-size: 2rem;
            }

            .workflow-name {
              font-size: 1.2rem;
            }

            .workflow-description {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </section>

      {/* Core Services Section */}
      <section id="services" className="relative bg-gradient-to-b from-zinc-900 to-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-white/70 text-lg">Comprehensive drone solutions for every industry</p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300 ${
                  index === 0
                    ? "md:col-span-2 md:row-span-1"
                    : index === 3
                      ? "md:col-span-2 md:row-span-1"
                      : "md:col-span-1"
                }`}
              >
                <service.icon className="w-14 h-14 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/60 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">By the Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-gradient-to-b from-black to-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300"
              >
                <p className="text-white/80 text-base leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <p className="text-orange-500 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-zinc-900 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Get a custom quote tailored to your needs. Fast, free, and designed for your success.
          </p>
          <Link href="/quote" className="pointer-events-auto">
            <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
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
