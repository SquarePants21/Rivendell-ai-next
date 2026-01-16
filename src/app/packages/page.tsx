export default function Packages() {
  const packages = [
    {
      name: "Starter",
      subtitle: "For Startups & Small Businesses",
      icon: "🌱",
      features: [
        "Business website",
        "Basic branding",
        "Social media setup",
        "Monthly maintenance",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      subtitle: "For Growing Companies",
      icon: "🚀",
      features: [
        "Advanced website & SEO",
        "Social media management",
        "Graphic design support",
        "Business automation",
        "AI chatbot integration",
        "Priority support",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      subtitle: "For Enterprises & High-Growth Teams",
      icon: "👑",
      features: [
        "Full digital ecosystem",
        "Custom AI agents",
        "End-to-end automation",
        "Dedicated account manager",
        "Advanced analytics",
        "24/7 premium support",
      ],
      highlighted: false,
    },
  ];

  return (
    <main className="pt-24 pb-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold elven-text mb-6 leading-tight">
            Subscription <span className="gradient-text">Packages</span>
          </h1>
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            Flexible monthly plans tailored to your business needs. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`relative transition-all duration-300 ${
                pkg.highlighted
                  ? "md:scale-105 md:-translate-y-4"
                  : ""
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-dark px-4 py-1 rounded-full text-sm font-bold z-20">
                  {pkg.badge}
                </div>
              )}
              
              <div
                className={`card h-full flex flex-col ${
                  pkg.highlighted
                    ? "border-accent bg-secondary/80 ring-2 ring-accent/30"
                    : ""
                }`}
              >
                <div className="text-6xl mb-4">{pkg.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-light/70 text-sm mb-6">{pkg.subtitle}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-sm text-light/80 flex items-start gap-3">
                      <span className="text-primary text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    pkg.highlighted
                      ? "btn-primary w-full"
                      : "btn-secondary w-full"
                  }
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary/20 border-y border-primary/30 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 elven-text">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I change packages anytime?",
                a: "Yes! You can upgrade or downgrade your subscription at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "What if I need custom services?",
                a: "All packages are fully customizable. Contact us to discuss your specific needs and we'll tailor a solution for you.",
              },
              {
                q: "Is there a contract or lock-in period?",
                a: "No. Our subscription model is flexible with no long-term contracts. Cancel anytime if you're not satisfied.",
              },
              {
                q: "How do I get started?",
                a: "Click 'Choose Plan', schedule a consultation, and we'll guide you through the onboarding process.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h4 className="font-bold text-lg mb-3">{item.q}</h4>
                <p className="text-light/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 elven-text">
            Still have questions?
          </h2>
          <p className="text-lg text-light/80 mb-8">
            Our team is ready to help you find the perfect plan.
          </p>
          <button className="btn-primary">Contact Our Team</button>
        </div>
      </section>
    </main>
  );
}
