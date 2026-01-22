"use client";

import Link from "next/link";
import { Icon } from "@/src/components/Icon";

export default function Home() {


  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="relative z-10 text-center max-w-5xl px-6 md:px-12">
          {/* Main Title */}
          <h1 className="heading-1 mb-6 leading-tight animate-fade-in">
            Rivendell
            <br />
            <span className="text-primary-600">The Council of AI Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-neutral-600 mb-8 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
            One Solution to Rule All Workflows — Your fellowship of expert developers and AI engineers, guiding UK businesses through their digital transformation journey.
          </p>

          {/* Supporting text */}
          <p className="text-body text-neutral-600 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Like the legendary haven where great councils convened, we bring together the finest minds in web development, AI engineering, and digital strategy to forge solutions that stand the test of time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link href="/contact" className="btn-primary">
              Begin Your Quest
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Council
            </Link>
          </div>

          {/* Value Props Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="card">
              <div className="text-4xl font-bold text-primary-600 mb-2">🏰</div>
              <p className="text-neutral-600 text-sm">Your Digital Sanctuary</p>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-primary-600 mb-2">£0</div>
              <p className="text-neutral-600 text-sm">To Join the Council</p>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-primary-600 mb-2">⚡</div>
              <p className="text-neutral-600 text-sm">Swift 2-4 Week Forging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2">Our <span className="text-primary-600">Services</span></h2>
            <p className="text-neutral-600 text-lg mt-4">The Council's crafts — forged for UK businesses seeking their path to greatness</p>
          </div>

          {/* 3+3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Web Development",
                description: "Crafted with the precision of elven smiths — fast, SEO-optimized websites built with Next.js and React. From landing pages to grand platforms.",
                iconName: "Globe",
                id: 0,
              },
              {
                title: "AI & Automation",
                description: "Intelligent agents as tireless as the watchers of old — custom AI chatbots and workflow automation working round the clock.",
                iconName: "Bot",
                id: 1,
              },
              {
                title: "Brand & Design",
                description: "Visual banners worthy of the great halls — professional logos and brand identities that herald your business with distinction.",
                iconName: "Palette",
                id: 2,
              },
            ].map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="card-interactive"
              >
                <div className="mb-4">
                  <Icon name={service.iconName as any} size={32} className="text-primary-600" />
                </div>
                <h3 className="heading-5 font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4 flex-grow text-sm">{service.description}</p>
                <div className="flex items-center text-primary-600 font-medium text-sm">
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
                description: "Data-driven social campaigns, content creation, and community management across all major platforms.",
                iconName: "Smartphone",
                id: 3,
              },
              {
                title: "IT Support & Consulting",
                description: "Reliable technical infrastructure, cloud services, and ongoing support to keep your business running smoothly.",
                iconName: "Settings",
                id: 4,
              },
              {
                title: "Digital Strategy",
                description: "Strategic roadmaps for digital transformation, technology audits, and growth planning tailored to SMBs.",
                iconName: "BarChart3",
                id: 5,
              },
            ].map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="card-interactive"
              >
                <div className="mb-4">
                  <Icon name={service.iconName as any} size={32} className="text-primary-600" />
                </div>
                <h3 className="heading-5 font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4 flex-grow text-sm">{service.description}</p>
                <div className="flex items-center text-primary-600 font-medium text-sm">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2">Why Choose <span className="text-primary-600">Rivendell</span></h2>
            <p className="text-neutral-600 text-lg mt-4">Why journey with Rivendell: legendary AI craft, fellowship with UK SMBs, and paths flexible to your quest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                iconName: "Sparkles",
                title: "Masters of AI Craft",
                description: "Our dedicated AI engineer wields powers most agencies cannot — cutting-edge automation and intelligent solutions forged in the latest technologies.",
              },
              {
                iconName: "Handshake",
                title: "Fellowship with SMBs",
                description: "We walk alongside growing businesses, understanding your trials. Our solutions are practical, affordable, and grow as your legend expands.",
              },
              {
                iconName: "Target",
                title: "Many Paths, One Goal",
                description: "Whether fixed quests, monthly counsel, or hourly aid — we adapt to your journey. No binding scrolls or rigid contracts.",
              },
              {
                iconName: "Shield",
                title: "Guardians of the Realm",
                description: "UK-based sentinels, GDPR compliant, versed in the laws of these lands. Partner with those who know your kingdom.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card p-8">
                <div className="mb-4">
                  <Icon name={item.iconName as any} size={32} className="text-primary-600" />
                </div>
                <h3 className="heading-5 font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6 animate-fade-in">
            Ready to Embark on Your Digital Quest?
          </h2>
          <p className="text-body text-neutral-600 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Gather with us for a free 30-minute council. We'll chart your path with honest wisdom and clear guidance — no obligations, just fellowship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link href="/contact" className="btn-primary">
              Join the Council
            </Link>
            <Link href="/packages" className="btn-secondary">
              View Quest Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
