import React from "react";
import { motion } from "framer-motion";
import { Heart, Award, Users, Stethoscope } from "lucide-react";
import AnimatedSection from "../Components/ui/AnimatedSection";

const stats = [
  { icon: Heart, label: "Happy Customers", value: "2,000+" },
  { icon: Award, label: "Premium Quality", value: "100%" },
  { icon: Users, label: "Healthcare Workers", value: "Trusted by" },
  { icon: Stethoscope, label: "Product Range", value: "Growing" },
];

export default function About() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 bg-[#020617]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            About MonChikJ
          </h1>

          {/* Optional subtle divider (replaces logo space nicely) */}
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-70"></div>
        </AnimatedSection>

        {/* Story */}
        <AnimatedSection className="mb-20">
          <div className="bg-[#0B0F14] border border-white/5 rounded-3xl p-8 sm:p-12 space-y-6">
            
            <h2 className="text-2xl font-bold text-white">
              Care in Every Stitch
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              MonChikJ was born from a simple belief: healthcare workers deserve to look and feel their best. 
              Every day, they give their all to care for others — and they deserve scrubs that care for them in return.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              We meticulously design each piece with premium fabrics, modern fits, and thoughtful details. 
              From the breathable materials to the functional pockets, every element is crafted with purpose.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              Our mission is to redefine medical workwear — blending luxury fashion aesthetics with the 
              durability and comfort that healthcare professionals need.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-[#0B0F14] border border-white/5 hover:border-cyan-500/30 transition">
                
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-cyan-400" />
                </div>

                <p className="text-2xl font-bold text-white">
                  {stat.value}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Values */}
        <AnimatedSection>
          <div className="text-center">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Comfort First",
                  desc: "Every fabric and stitch is chosen for maximum all-day comfort.",
                },
                {
                  title: "Modern Style",
                  desc: "Professional doesn't have to mean boring. We bring fashion to healthcare.",
                },
                {
                  title: "Built to Last",
                  desc: "Premium materials that maintain quality through countless washes and shifts.",
                },
              ].map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 hover:border-cyan-500/40 transition">
                    
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {value.title}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {value.desc}
                    </p>
                  </div>

                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}