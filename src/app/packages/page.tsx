import { Icon } from "@/src/components/Icon";
import Link from "next/link";

export default function Packages() {
  const packages = [
    {
      name: "Seeker's Path",
      subtitle: "For New Ventures & Small Enterprises",
      iconName: "Sprout",
      features: [
        "Professional 5-10 page website",
        "Logo & basic brand guidelines",
        "Social media profile setup & graphics",
        "Monthly website updates & security",
        "Email support (24-48hr response)",
      ],
      highlighted: false,
    },
    {
      name: "Champion's Covenant",
      subtitle: "For Growing Enterprises",
      iconName: "Rocket",
      features: [
        "Advanced website with SEO optimization",
        "3-4 social platforms fully managed",
        "Ongoing graphic design support (10hrs/mo)",
        "Basic workflow automation",
        "AI chatbot for website or WhatsApp",
        "Priority support (same-day response)",
      ],
      highlighted: true,
      badge: "Most Chosen Path",
    },
    {
      name: "Council of Legends",
      subtitle: "For Great Houses & Scaling Realms",
      iconName: "Crown",
      features: [
        "Full custom web platform or ecosystem",
        "Advanced AI agents & custom integrations",
        "Complete automation infrastructure",
        "Dedicated account manager & strategy calls",
        "Custom analytics dashboards & reporting",
        "24/7 premium support with SLA guarantee",
      ],
      highlighted: false,
    },
  ];

  return (
    <main className="pt-24 pb-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="heading-1 mb-6 leading-tight">
            Quest <span className="text-primary-600">Packages</span>
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto">
            Choose your path forward — predictable monthly fellowship with all the crafts you need to grow. No hidden costs, no binding oaths, leave when you wish.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`relative transition-all duration-300 ${pkg.highlighted
                ? "md:scale-105 md:-translate-y-4"
                : ""
                }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20">
                  {pkg.badge}
                </div>
              )}

              <div
                className={`card h-full flex flex-col ${pkg.highlighted
                  ? "border-primary-200 bg-primary-50 ring-2 ring-primary-200"
                  : ""
                  }`}
              >
                <div className="mb-4">
                  <Icon name={pkg.iconName as any} size={40} className="text-primary-600" />
                </div>
                <h3 className="heading-4 font-bold mb-2 text-neutral-900">{pkg.name}</h3>
                <p className="text-neutral-600 text-sm mb-6">{pkg.subtitle}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-sm text-neutral-600 flex items-start gap-3">
                      <span className="text-primary-600 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={
                    pkg.highlighted
                      ? "btn-primary w-full text-center"
                      : "btn-secondary w-full text-center"
                  }
                >
                  Choose Plan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed-Price Projects */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mb-20 text-center">
        <div className="card bg-neutral-50 border-neutral-200">
          <h3 className="heading-4 font-bold mb-4 text-neutral-900">Prefer a Fixed-Price Project?</h3>
          <p className="text-neutral-600 mb-6">
            While our subscription paths offer the best continuous value, we also undertake singular quests and fixed-price builds.
            From MVPs to grand platform launches, we provide clear timelines and transparent, one-time investment quotes.
          </p>
          <Link href="/contact" className="text-primary-600 font-bold hover:underline">
            Enquire about a fixed-price project →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-neutral-50 border-y border-neutral-200 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I change packages anytime?",
                a: "Absolutely. Upgrade or downgrade with 30 days notice. Your new pricing takes effect at the start of the next billing cycle. No penalties for changes.",
              },
              {
                q: "What if I need custom services?",
                a: "All packages are fully customizable. We'll discuss your specific needs in a free consultation and create a tailored plan with transparent pricing for any add-ons.",
              },
              {
                q: "Is there a contract or lock-in period?",
                a: "No long-term contracts. Month-to-month subscription with 30 days cancellation notice. We earn your business every month through great service, not binding contracts.",
              },
              {
                q: "How do I get started?",
                a: "Click 'Choose Plan' above, fill out a quick form, and we'll schedule a free 30-minute consultation within 24 hours to discuss your goals and get started.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h4 className="font-bold text-neutral-900 mb-3">{item.q}</h4>
                <p className="text-neutral-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Still Pondering Your Path?
          </h2>
          <p className="text-body text-neutral-600 mb-8">
            We&apos;re here to help you find the perfect covenant for your quest&apos;s goals and treasury.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Seek Our Counsel
          </Link>
        </div>
      </section>
    </main>
  );
}
