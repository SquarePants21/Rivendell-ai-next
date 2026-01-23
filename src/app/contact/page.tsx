"use client";

import { useState } from "react";
import { Icon } from "@/src/components/Icon";
import Link from "next/link";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    gdpr: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormState((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.gdpr) {
      alert("Please agree to our privacy policy to continue.");
      return;
    }
    console.log("Form submitted:", formState);
    alert("Thank you for reaching out! We'll contact you soon.");
    setFormState({ name: "", email: "", phone: "", company: "", service: "", message: "", gdpr: false });
  };

  return (
    <main className="pt-24 pb-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="heading-1 mb-6 leading-tight">
            Make <span className="text-primary-600">Contact</span>
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto">
            The gates of Rivendell stand open. Send word of your quest and we shall answer within a day's turning (oft much swifter). Free council, without burden.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              iconName: "Mail",
              title: "Send Word",
              value: "contact@rivendellai.com",
              desc: "Your herald shall receive reply within 24 hours",
            },
            {
              iconName: "MapPin",
              title: "Our Sanctuary",
              value: "United Kingdom",
              desc: "A remote fellowship serving UK realms",
            },
            {
              iconName: "Clock",
              title: "Swift Reply",
              value: "Within One Day",
              desc: "Usually same-day for urgent quests",
            },
          ].map((item, idx) => (
            <div key={idx} className="card text-center">
              <div className="mb-4">
                <Icon name={item.iconName as any} size={40} className="text-primary-600 mx-auto" />
              </div>
              <h3 className="heading-5 font-bold mb-2 text-neutral-900">{item.title}</h3>
              <p className="text-primary-600 font-semibold mb-2">{item.value}</p>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="+44 0000 000000"
                  />
                </div>
                <div>
                  <label className="label">Service Interest *</label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Select a service...</option>
                    <option value="web">Web Development</option>
                    <option value="ai">AI & Automation</option>
                    <option value="design">Brand & Design</option>
                    <option value="strategy">Digital Strategy</option>
                    <option value="support">IT Support</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="label">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="input"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="label">Message *</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="textarea"
                  placeholder="Tell us about your project and how we can help..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="gdpr"
                  id="gdpr"
                  checked={formState.gdpr}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <label htmlFor="gdpr" className="text-sm text-neutral-600">
                  I agree to the <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link> and consent to being contacted regarding my inquiry. *
                </label>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Rivendell */}
      <section className="py-20 px-6 md:px-12 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Why Choose the Rivendell Council?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Veteran Fellowship",
                description: "Developers, AI engineers, and designers with proven valor across many campaigns and industries.",
              },
              {
                title: "Swift as the Wind",
                description: "Most quests completed within 2-4 weeks. We move with both speed and craftsmanship.",
              },
              {
                title: "True Counsel",
                description: "No false promises, no hidden tolls. We speak plainly from the first meeting to the last.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="heading-5 font-bold mb-3 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
