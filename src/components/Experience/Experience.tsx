import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PROJECT_ITEMS } from "./experience-items.data";
import Spline from "@splinetool/react-spline";

const Experience = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-6 relative">
        <Swiper
          direction="vertical"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mb-20"
        >
          {PROJECT_ITEMS.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-12 items-center h-full cursor-grab"
              >
                {/* Project Details */}
                <div>
                  <motion.h2
                    key={`title-${project.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-500 text-transparent bg-clip-text"
                  >
                    {/* Blue square behind the text */}
                    <div className="absolute left-0 top-24 transform -translate-y-1/2 bg-blue-800 w-14 h-48 -z-10" />
                    {project.title}
                  </motion.h2>
                  <motion.p
                    key={`desc-${project.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-50 text-xl mb-8"
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-lg border border-gray-600 text-gray-100 backdrop-blur-md rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* 3D Visualization */}
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-[400px]"
                >
                  <Spline
                    scene={project.shape}
                  />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Experience;
