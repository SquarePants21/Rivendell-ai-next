import { Icon } from "@/src/components/Icon";
import Link from "next/link";

export default function About() {
  return (
    <main className="pt-24 pb-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="heading-1 mb-6 leading-tight">
            About <span className="text-primary-600">Rivendell</span>
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto">
            A sanctuary where expert developers and AI engineers gather to guide UK businesses on their digital journey — modern technology without the enterprise burdens.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="heading-2 mb-6">Our Story</h2>
            <p className="text-body text-neutral-600 mb-4 leading-relaxed">
              Rivendell was founded on an ancient truth: every worthy enterprise deserves access to legendary technology without impossible prices or needless complexity. Too many SMBs wander lost with outdated systems and manual toil that holds them back.
            </p>
            <p className="text-body text-neutral-600 mb-4 leading-relaxed">
              Our fellowship unites full-stack developers, AI engineers, and designers — veterans of many campaigns from startups to great enterprises. We are seasoned, yet our company is young — which means we are hungry, focused, and committed to earning each alliance through valor and craft.
            </p>
            <p className="text-body text-neutral-600 leading-relaxed">
              We wield the technologies shaping the age: Next.js for swift digital halls, GPT-4 and Claude for wise automation, frameworks that scale like the grandest architectures. In our council, you gain master-level wisdom with the responsiveness of a close fellowship.
            </p>
          </div>

          <div className="animate-fade-in">
            <div className="relative">
              <div className="relative bg-neutral-50 border border-neutral-200 rounded-2xl p-12 text-center">
                <div className="mb-4">
                  <Icon name="Building2" size={48} className="text-primary-600 mx-auto" />
                </div>
                <p className="heading-4 font-bold mb-4 text-neutral-900">The Council Convenes</p>
                <p className="text-neutral-600 text-sm">
                  Seasoned champions & AI masters forging practical solutions for UK enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="heading-2 text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Innovation",
              description: "We stay at the vanguard — wielding the latest frameworks, AI wisdom, and development mastery to grant you an edge in all endeavors.",
              iconName: "Lightbulb",
            },
            {
              title: "Fellowship",
              description: "Your triumphs are our triumphs. Expect steady counsel, transparent paths, and unwavering commitment to your quest's success.",
              iconName: "Handshake",
            },
            {
              title: "Practicality",
              description: "Elegant code and clever solutions matter, yet only if they solve real challenges. We focus on what truly advances your realm.",
              iconName: "Star",
            },
            {
              title: "Honesty",
              description: "We speak plainly when something serves not, when timelines prove unrealistic, or when simpler paths exist. No riddles, no illusions.",
              iconName: "Target",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="card text-center"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="mb-4">
                <Icon name={value.iconName as any} size={32} className="text-primary-600 mx-auto" />
              </div>
              <h3 className="heading-5 font-bold mb-3 text-neutral-900">{value.title}</h3>
              <p className="text-sm text-neutral-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="heading-2 text-center mb-12">Industries We Serve</h2>
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
              className="card text-center hover:border-primary-300 hover:shadow-md transition-all cursor-pointer"
            >
              <p className="font-semibold text-neutral-900">{industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="heading-2 text-center mb-12">Our Process</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: "1", title: "Discovery", desc: "Free consultation to understand your needs" },
            { step: "2", title: "Strategy", desc: "Clear proposal with timeline & costs" },
            { step: "3", title: "Execution", desc: "Transparent development with regular updates" },
            { step: "4", title: "Launch", desc: "Testing, deployment, and training" },
            { step: "5", title: "Support", desc: "Ongoing maintenance and improvements" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">
                {item.step}
              </div>
              <h4 className="font-bold mb-2 text-neutral-900">{item.title}</h4>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Join the Rivendell Family
          </h2>
          <p className="text-body text-neutral-600 mb-8">
            Come, let us council on your quest. Free wisdom, honest guidance, without burden or binding oath.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Begin Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
