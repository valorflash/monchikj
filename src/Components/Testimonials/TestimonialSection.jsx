import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import profileImage from '../../assets/chidimma.jpg'
import eventPlanner from '../../assets/ifeanyi.jpg'
import eventOrganizer from '../../assets/funke.jpg'

const testimonials = [
  {
    name: "Adaeze Okonkwo", role: "Birthday Party Host",
    image: profileImage,
    rating: 5,
    text: "Prissy Treats made my daughter's birthday absolutely magical! The cake was not only stunning but incredibly delicious. Everyone kept asking where I got it from!"
  },
  {
    name: "Chidi Nnamdi", role: "Wedding Planner",
    image: eventPlanner,
    rating: 5,
    text: "I've worked with many bakers, but Prissy Treats stands out. Their wedding cakes are true works of art. Professional service and amazing taste!"
  },
  {
    name: "Funke Adeyemi", role: "Event Organizer",
    image: eventOrganizer,
    rating: 5,
    text: "The small chops were a hit at our corporate event! Fresh, perfectly seasoned, and the presentation was beautiful. Will definitely order again!"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-rose-50/50 relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 text-pink-200 opacity-30"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Quote className="w-32 h-32" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-pink-500 font-medium mb-4 bg-pink-100 px-4 py-2 rounded-full">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our{' '}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400">Happy Customers</span>{' '}
            Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what people who've tasted our treats have to say!</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={itemVariants} whileHover={{ y: -10 }}>
              <div className="h-full bg-white shadow-xl rounded-3xl overflow-hidden relative">
                <div className="h-2 bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400" />
                <div className="p-8">
                  <div className="absolute top-6 right-6 text-pink-100">
                    <Quote className="w-12 h-12" />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-pink-100" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-pink-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-2 text-gray-600">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 border-2 border-white" />
              ))}
            </div>
            <span className="text-sm font-medium">500+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9 Average Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
