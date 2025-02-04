import SectionTItle from "../Shared/SectionTItle";
import project2 from "../assets/p2full.png";
import project3 from "../assets/p3full.png";
import reactimg from "../assets/react.svg";
import firebase from "../assets/firebase.png";
import typescript from "../assets/typescript.svg";
import tailwind from "../assets/tailwind.png";
import js from "../assets/javascript.svg"
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";

import img from '../assets/p1full.png'
import { RxExternalLink } from "react-icons/rx";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 3,
    title: "Urban Drive",
    image: project3,
    description:
      "It's a car rental website where you can rent a car for a day or a month. You can also see the cars and the prices.You can akso add your own car for rent. You can also see the reviews of the cars.",
    technologies: [
      reactimg,
      typescript,
      tailwind,
      firebase,
      mongodb,
      express,
      nodejs,
    ],
    links: {
      live: "https://cheery-bubblegum-eecb30.netlify.app",
      clientRepo: "https://github.com/aayman01/UrbanDrive-Client",
      serverRepo: "https://github.com/aayman01/UrbanDrive-Server",
    },
  },
  {
    id: 1,
    title: "PharmaPlaza",
    image: img,
    description:
      "Our platform offers an extensive selection of prescription medications, over-the-counter drugs, vitamins, supplements, personal care products, and medical devices.",
    technologies: [reactimg, js, tailwind, firebase, mongodb, express, nodejs],
    links: {
      live: "https://bucolic-conkies-2c096d.netlify.app",
      clientRepo: "https://github.com/aayman01/Pharma_Plaza_Client",
      serverRepo: "https://github.com/aayman01/Pharma_Plaza_Server",
    },
  },
  {
    id: 2,
    title: "HealthTap",
    image: project2,
    description:
      "This platform provides a seamless and efficient way to manage your health with a user-friendly booking system and access to a wide range of medical specialties.",
    technologies: [reactimg, tailwind, firebase, mongodb, express, nodejs],
    links: {
      live: "https://health-tap-3d23f.web.app",
      clientRepo: "https://github.com/aayman01/health-tap-client",
      serverRepo: "https://github.com/aayman01/Health_Tap_Server",
    },
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <div id="projects" className="container mx-auto px-4">
      <SectionTItle heading="Projects" />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project) => (
          <motion.div 
            key={project.id} 
            className="bg-primary shadow-xl text-white rounded-xl p-6"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                className="w-full h-48 object-cover rounded-lg" 
                src={project.image} 
                alt={project.title}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-lg font-bold mb-2">Technologies</p>
                <div className="grid grid-cols-4 gap-2">
                  {project.technologies.map((tech, index) => (
                    <img 
                      key={index} 
                      className="w-12 h-12 object-contain" 
                      src={tech} 
                      alt="tech"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={project.links.live}
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-3"
                >
                  Live Link <RxExternalLink className="inline ml-1" />
                </a>
                <a
                  href={project.links.clientRepo}
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-3"
                >
                  Github Client <RxExternalLink className="inline ml-1" />
                </a>
                <a
                  href={project.links.serverRepo}
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-3"
                >
                  Github Server <RxExternalLink className="inline ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;