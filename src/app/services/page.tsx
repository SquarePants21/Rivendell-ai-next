export default function Services() {
  const services = [
    {
      id: "web",
      title: "Web Development",
      icon: "🌐",
      description: "Modern, fast, and conversion-focused websites built for performance and scalability.",
      features: [
        "Custom website design (UI/UX)",
        "Business & corporate websites",
        "Landing pages & funnels",
        "E-commerce websites",
        "SEO-friendly architecture",
        "Hosting & maintenance support",
      ],
    },
    {
      id: "ai",
      title: "AI Solutions & AI Agents",
      icon: "🤖",
      description: "Smart AI systems that work like digital employees for your business.",
      features: [
        "AI chatbots (website, WhatsApp, social)",
        "Custom AI agents",
        "Knowledge-base AI assistants",
        "AI-powered analytics",
        "Task automation using AI",
        "Custom LLM integrations",
      ],
    },
    {
      id: "design",
      title: "Graphic Design & Branding",
      icon: "🎨",
      description: "Visual identities that make brands unforgettable and impactful.",
      features: [
        "Logo & brand identity design",
        "Social media creatives",
        "Marketing banners & posters",
        "Pitch decks & presentations",
        "UI assets & brand guidelines",
        "Brand strategy consultation",
      ],
    },
    {
      id: "automation",
      title: "Business Automation",
      icon: "⚙️",
      description: "Automate business operations to save time, money, and human effort.",
      features: [
        "Workflow automation",
        "CRM & ERP automation",
        "Email & WhatsApp automation",
        "Lead management systems",
        "Internal dashboards & reporting",
        "API integrations",
      ],
    },
    {
      id: "smm",
      title: "Social Media Marketing",
      icon: "📱",
      description: "Data-driven social strategies that convert followers into loyal customers.",
      features: [
        "Social media strategy & planning",
        "Content creation & scheduling",
        "Instagram, Facebook, LinkedIn, TikTok management",
        "Paid ads setup & optimization",
        "Analytics & performance reporting",
        "Community management",
      ],
    },
    {
      id: "support",
      title: "Company IT & Tech Support",
      icon: "🔐",
      description: "Reliable technical infrastructure and ongoing support for your needs.",
      features: [
        "IT consulting",
        "System setup & maintenance",
        "Cloud services",
        "Cybersecurity basics",
        "Tech audits & optimization",
        "24/7 technical support",
      ],
    },
  ];

  return (
    <main className="pt-24 pb-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold elven-text mb-6 leading-tight">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and help you thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={service.id} id={service.id} className="card group animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-light/70 mb-6 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-light/60 flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 py-20 px-6 md:px-12 bg-primary/20 border-y border-primary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 elven-text">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-lg text-light/80 mb-8">
            Ready to discover which services align with your vision?
          </p>
          <button className="btn-primary">Schedule a Consultation</button>
        </div>
      </section>
    </main>
  );
}
