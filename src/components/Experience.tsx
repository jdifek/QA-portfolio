import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sphere } from './3d/Sphere';
import { Cube } from './3d/Cube';
import { Torus } from './3d/Torus';

const projects = [
  {
    id: 1,
    title: 'E-commerce Testing Framework',
    description: 'Developed and maintained an end-to-end testing framework for a large e-commerce platform.',
    technologies: ['Cypress', 'TypeScript', 'GitHub Actions'],
    shape: 'cube',
  },
  {
    id: 2,
    title: 'API Testing Suite',
    description: 'Created comprehensive API testing suite with automated performance testing.',
    technologies: ['Postman', 'Newman', 'Jenkins', 'JMeter'],
    shape: 'sphere',
  },
  {
    id: 3,
    title: 'Mobile App Testing',
    description: 'Implemented automated testing for iOS and Android applications.',
    technologies: ['Appium', 'Java', 'TestNG', 'BrowserStack'],
    shape: 'torus',
  },
];

const Experience: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState(projects[0]);

  const renderShape = () => {
    switch (selectedProject.shape) {
      case 'sphere':
        return <Sphere />;
      case 'torus':
        return <Torus />;
      default:
        return <Cube />;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* 3D Visualization */}
          <motion.div 
            key={selectedProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-[400px] bg-gradient-to-br from-[#1e293b]/50 to-[#334155]/50 rounded-lg overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/10"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.7} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
              {renderShape()}
              <OrbitControls enableZoom={false} />
            </Canvas>
          </motion.div>

          {/* Project Details */}
          <div>
            <motion.h2
              key={`title-${selectedProject.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text"
            >
              {selectedProject.title}
            </motion.h2>
            <motion.p
              key={`desc-${selectedProject.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-blue-100 mb-6"
            >
              {selectedProject.description}
            </motion.p>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-900/50 rounded-full text-sm border border-blue-500/30 text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project List */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-blue-300">Other Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  selectedProject.id === project.id
                    ? 'bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-400/50 shadow-lg shadow-blue-500/20'
                    : 'bg-gradient-to-br from-[#1e293b]/50 to-[#334155]/50 border-blue-500/30 hover:border-blue-400/50'
                } border`}
                onClick={() => setSelectedProject(project)}
              >
                <h4 className="text-xl font-semibold mb-2 text-blue-200">{project.title}</h4>
                <p className="text-blue-100/80 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;