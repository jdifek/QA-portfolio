import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gradient-to-br from-[#2d1321]/80 to-[#3d1f2f]/80 p-6 rounded-lg border border-red-500/20 hover:border-red-400/50 transition-all hover:shadow-lg hover:shadow-red-500/10"
    >
      <Icon className="w-8 h-8 text-red-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-red-200">{title}</h3>
      <p className="text-red-100/80">{description}</p>
    </motion.div>
  );
};