"use client";

import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // Here you would typically send the form data to your backend
    alert("Thank you for reaching out! We'll contact you soon.");
    setFormState({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <main className="pt-24 pb-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold elven-text mb-6 leading-tight">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            Ready to begin your digital transformation? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: "📧",
              title: "Email",
              value: "contact@rivendellai.com",
              desc: "We'll get back to you within 24 hours",
            },
            {
              icon: "🌍",
              title: "Location",
              value: "Global (Remote-First)",
              desc: "Serving clients worldwide",
            },
            {
              icon: "⏰",
              title: "Availability",
              value: "24/7 Support",
              desc: "We're always here when you need us",
            },
          ].map((item, idx) => (
            <div key={idx} className="card text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-primary font-semibold mb-2">{item.value}</p>
              <p className="text-sm text-light/70">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none focus:border-primary/80 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none focus:border-primary/80 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none focus:border-primary/80 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none focus:border-primary/80 transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none focus:border-primary/80 transition-colors resize-none"
                  placeholder="Tell us about your project and how we can help..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map/Service Areas */}
      <section className="py-20 px-6 md:px-12 bg-primary/20 border-y border-primary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 elven-text">Why Rivendell?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Specialists across web, AI, design, and automation with years of experience.",
              },
              {
                title: "Quick Response",
                description: "We understand your business needs and provide tailored solutions fast.",
              },
              {
                title: "Long-Term Partnership",
                description: "We don't just build projects—we grow with you through continuous support.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-light/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
