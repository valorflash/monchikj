import React from "react";
import { Sparkles, Shield, Droplets, Scissors } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const features = [
  {
    icon: Sparkles,
    title: "Premium Fabric",
    desc: "4-way stretch, breathable materials that keep you comfortable through every shift.",
  },
  {
    icon: Shield,
    title: "Durable Quality",
    desc: "Built to last through countless washes while maintaining color and shape.",
  },
  {
    icon: Droplets,
    title: "Moisture Wicking",
    desc: "Advanced fabric technology keeps you dry and fresh all day long.",
  },
  {
    icon: Scissors,
    title: "Modern Fit",
    desc: "Tailored silhouettes that look professional and feel incredibly comfortable.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 sm:py-28 px-4 bg-[#020617] relative overflow-hidden">

      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-500/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Why MonChikJ
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Designed Different
          </h2>
        </AnimatedSection>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              
              <div className="group p-6 rounded-2xl bg-[#0B0F14] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 h-full">

                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>

              </div>

            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}