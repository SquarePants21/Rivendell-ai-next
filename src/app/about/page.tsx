export default function About() {
  return (
    <main className="pt-24 pb-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold elven-text mb-6 leading-tight">
            About <span className="gradient-text">Rivendell</span>
          </h1>
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            Where ancient wisdom meets cutting-edge technology. We partner with businesses to become their long-term technology & innovation team.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-bold mb-6 elven-text">Our Story</h2>
            <p className="text-light/80 mb-4 leading-relaxed">
              Rivendell AI was born from a simple idea: businesses shouldn't have to navigate the digital realm alone. We envisioned a partner that could bridge the gap between ancient business wisdom and future technology.
            </p>
            <p className="text-light/80 mb-4 leading-relaxed">
              Like the legendary realm of Rivendell from Tolkien's LOTR, we created a sanctuary where innovation thrives and businesses find sanctuary from digital chaos. Our team brings together specialists from every domain of technology.
            </p>
            <p className="text-light/80 leading-relaxed">
              Today, we help startups, SMEs, and enterprises build, automate, scale, and dominate in the digital era.
            </p>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-secondary/50 backdrop-blur-md border border-primary/30 rounded-2xl p-12 text-center">
                <div className="text-7xl mb-4">🏰</div>
                <p className="text-2xl font-bold mb-4">Rivendell</p>
                <p className="text-light/70 text-sm">
                  A sanctuary of innovation where businesses transform and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 elven-text">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Innovation",
              description: "We embrace the latest technologies to create solutions that truly matter.",
              icon: "💡",
            },
            {
              title: "Partnership",
              description: "Your success is our success. We build long-term relationships, not quick wins.",
              icon: "🤝",
            },
            {
              title: "Excellence",
              description: "We never compromise on quality. Every solution is crafted with precision and care.",
              icon: "⭐",
            },
            {
              title: "Transparency",
              description: "Clear communication and honest recommendations guide every decision we make.",
              icon: "🎯",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="card text-center"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-sm text-light/70">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 elven-text">Industries We Serve</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            "Startups & SaaS",
            "E-commerce",
            "Corporate",
            "Real Estate",
            "Healthcare",
            "Education",
            "Finance",
            "Logistics",
            "Retail",
            "Agencies",
          ].map((industry, idx) => (
            <div
              key={idx}
              className="card text-center hover:border-accent transition-colors cursor-pointer"
            >
              <p className="font-semibold">{industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 elven-text">Our Process</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: "1", title: "Discovery", desc: "Understanding your goals" },
            { step: "2", title: "Strategy", desc: "Designing your roadmap" },
            { step: "3", title: "Execution", desc: "Building solutions" },
            { step: "4", title: "Optimization", desc: "Continuous improvement" },
            { step: "5", title: "Support", desc: "Long-term partnership" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-light/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-primary/20 border-y border-primary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 elven-text">
            Join the Rivendell Family
          </h2>
          <p className="text-lg text-light/80 mb-8">
            Become part of a thriving community of innovative businesses.
          </p>
          <button className="btn-primary">Get Started Today</button>
        </div>
      </section>
    </main>
  );
}
