"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Premium Rayluxeo Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand-blue/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 md:px-12">
          {/* Main Title with staggered animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold elven-text mb-6 leading-tight animate-fade-in-up">
            Rivendell
            <br />
            <span className="gradient-text">AI Agency</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-light/80 mb-8 font-light animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
            Elevating European businesses with cutting-edge AI solutions, modern web development, and strategic digital transformation.
          </p>

          {/* Supporting text */}
          <p className="text-base md:text-lg text-light/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            From concept to launch, we provide the full stack of intelligent digital services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link href="/contact" className="btn-animated btn-anim-primary px-8 py-4 text-lg hover:-translate-y-1">
              Start Your Project
            </Link>
            <Link href="/services" className="btn-animated btn-anim-secondary px-8 py-4 text-lg hover:-translate-y-1">
              Explore Services
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="card">
              <div className="text-4xl font-bold gradient-text mb-2">25+</div>
              <p className="text-light/70 text-sm">Companies Served</p>
            </div>
            <div className="card">
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <p className="text-light/70 text-sm">Projects Completed</p>
            </div>
            <div className="card">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <p className="text-light/70 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid Layout */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
            <p className="text-light/70 text-lg">Comprehensive solutions tailored for European enterprises</p>
          </div>

          {/* 3+3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Web Development",
                description: "Building fast, responsive sites on modern frameworks and custom architectures.",
                icon: "🌐",
                id: 0,
              },
              {
                title: "AI & Automation",
                description: "Intelligent solutions and agents that automate and optimize your business processes.",
                icon: "🤖",
                id: 1,
              },
              {
                title: "Brand & Design",
                description: "Stunning visuals and compelling brand identities for your digital presence.",
                icon: "🎨",
                id: 2,
              },
            ].map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="service-card group"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-accent mb-3 elven-text">{service.title}</h3>
                <p className="text-light/70 mb-4 flex-grow">{service.description}</p>
                <div className="flex items-center text-accent service-card-arrow">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Services Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Social Media Marketing",
                description: "Targeted campaigns that drive engagement and grow your audience.",
                icon: "📱",
                id: 3,
              },
              {
                title: "IT Support & Consulting",
                description: "Expert technical support and strategic IT consulting for your infrastructure.",
                icon: "🛠️",
                id: 4,
              },
              {
                title: "Digital Strategy",
                description: "Comprehensive digital transformation and strategic roadmaps for growth.",
                icon: "📊",
                id: 5,
              },
            ].map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="service-card group"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-accent mb-3 elven-text">{service.title}</h3>
                <p className="text-light/70 mb-4 flex-grow">{service.description}</p>
                <div className="flex items-center text-accent service-card-arrow">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Design */}
      <section className="py-20 px-6 md:px-12 bg-secondary/30 backdrop-blur border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose <span className="gradient-text">Rivendell</span></h2>
            <p className="text-light/70 text-lg">Excellence, innovation, and partnership in every engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "✨",
                title: "Innovation First",
                description: "We leverage the latest technologies and AI methodologies to drive real results for your business.",
              },
              {
                icon: "🤝",
                title: "True Partnership",
                description: "Your success is our success. We collaborate closely with you at every step of the journey.",
              },
              {
                icon: "🎯",
                title: "Results Driven",
                description: "Measurable outcomes and transparent reporting ensure accountability and business growth.",
              },
              {
                icon: "🛡️",
                title: "Trusted & Secure",
                description: "Enterprise-grade security and reliability standards for your complete peace of mind.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card p-8 group hover:border-accent/50">
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-accent mb-3 elven-text">{item.title}</h3>
                <p className="text-light/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-6 elven-text animate-fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-light/70 text-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Let's discuss how Rivendell AI can help you achieve your digital goals and unlock new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/contact" className="btn-primary">
              Get Started Today
            </Link>
            <Link href="/packages" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
