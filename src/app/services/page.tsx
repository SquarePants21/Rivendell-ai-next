import { Icon } from "@/src/components/Icon";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "web",
      title: "Web Development",
      iconName: "Globe",
      description: "Websites crafted with the care of elven architects — responsive, swift, built with Next.js and React for enduring performance.",
      features: [
        "Custom responsive design (mobile-first)",
        "SEO optimization & fast load times",
        "Business websites & landing pages",
        "E-commerce platforms with payment integration",
        "CMS integration (easy content updates)",
        "Hosting setup & ongoing maintenance",
      ],
    },
    {
      id: "ai",
      title: "AI Solutions & AI Agents",
      iconName: "Bot",
      description: "Like the wise counsel of old, our AI serves tirelessly — automating tasks, enhancing service, providing insights sharp as mithril.",
      features: [
        "AI chatbots for website, WhatsApp & social media",
        "Custom AI agents for specific business tasks",
        "RAG-based knowledge assistants",
        "Intelligent process automation",
        "Natural language processing (NLP) solutions",
        "AI integration with existing tools",
      ],
    },
    {
      id: "design",
      title: "Graphic Design & Branding",
      iconName: "Palette",
      description: "Banners and sigils worthy of the great houses — professional visual identities that herald your value across all realms.",
      features: [
        "Complete logo & brand identity packages",
        "Social media graphics & templates",
        "Marketing collateral (brochures, flyers, banners)",
        "Professional pitch decks & presentations",
        "Brand style guides & UI kits",
        "Brand positioning & messaging strategy",
      ],
    },
    {
      id: "automation",
      title: "Business Automation",
      iconName: "Cog",
      description: "Streamline your kingdom's operations — custom automation as reliable as dwarven machinery, freeing your fellowship for greater quests.",
      features: [
        "Custom workflow automation (Zapier, Make, n8n)",
        "CRM & ERP system automation",
        "Email marketing automation & sequences",
        "Automated lead capture & nurturing",
        "Custom dashboards & business intelligence",
        "Third-party API integrations",
      ],
    },
    {
      id: "smm",
      title: "Social Media Marketing",
      iconName: "Smartphone",
      description: "Strategic campaigns that spread your word across the digital lands — authentic content and measured results that build loyal followings.",
      features: [
        "Comprehensive social strategy & calendar",
        "Professional content creation & copywriting",
        "Multi-platform management (Instagram, Facebook, LinkedIn, TikTok)",
        "Paid advertising campaigns & A/B testing",
        "Detailed analytics & monthly reporting",
        "Active community engagement & responses",
      ],
    },
    {
      id: "support",
      title: "Company IT & Tech Support",
      iconName: "Lock",
      description: "Steadfast guardians of your technical realm — keeping your systems secure and operational like the watchers at the gates.",
      features: [
        "Technology strategy & consulting",
        "Cloud infrastructure setup (AWS, Azure, Google Cloud)",
        "System monitoring & maintenance",
        "Cybersecurity audits & implementation",
        "Technology stack optimization",
        "Ongoing technical support & troubleshooting",
      ],
    },
  ];

  return (
    <main className="pt-24 pb-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="heading-1 mb-6 leading-tight">
            The Council's <span className="text-primary-600">Crafts</span>
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto">
            From grand edifices to intelligent automation, we forge practical solutions that help UK businesses grow faster and work wiser.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={service.id} id={service.id} className="card animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="mb-6">
                <Icon name={service.iconName as any} size={40} className="text-primary-600" />
              </div>
              <h3 className="heading-5 font-bold mb-3 text-neutral-900">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-neutral-600 flex items-start gap-2">
                    <span className="text-primary-600 mt-1 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 py-20 px-6 md:px-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Let's Forge Something <span className="text-primary-600">Legendary</span>
          </h2>
          <p className="text-body text-neutral-600 mb-8">
            Come, let us council together. Discover which of our crafts align with your vision. Free guidance, honest fellowship.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Convene with the Council
          </Link>
        </div>
      </section>
    </main>
  );
}
