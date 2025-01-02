import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: Mail, text: 'contact@example.com', href: 'mailto:contact@example.com' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://linkedin.com' },
    { icon: Github, text: 'GitHub Profile', href: 'https://github.com' },
    { icon: MapPin, text: 'Remote / Worldwide', href: null },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-red-950 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Let's discuss how I can help improve your software testing process
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-black/30 rounded-lg border border-red-800/30 hover:border-red-500/50 transition-all hover:transform hover:translate-x-2"
                  >
                    <item.icon className="w-6 h-6 text-red-500 mr-4" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center p-4 bg-black/30 rounded-lg border border-red-800/30">
                    <item.icon className="w-6 h-6 text-red-500 mr-4" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-300">
              Available for full-time positions and consulting opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;