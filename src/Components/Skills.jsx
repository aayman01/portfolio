import SectionTItle from "../Shared/SectionTItle";
import firebase from "../assets/firebase.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import reactimg from "../assets/react.svg";
import js from "../assets/javascript.svg";
import vscode from "../assets/vscode.png";
import github from "../assets/github.png";
import { FaGitAlt } from "react-icons/fa";
import typescript from "../assets/typescript.svg";
import nextjs from "../assets/next-js.svg";
import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.5,
      rotate: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const toolVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className="" id="skills">
      <SectionTItle heading="My Skills" />
      <motion.div 
        className="flex items-center justify-center gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="grid grid-cols-4 md:grid-cols-10 gap-5">
          <motion.img 
            className="w-16" 
            src={reactimg} 
            alt="React"
            variants={skillVariants}
            whileHover="hover"
          />
          <motion.img 
            className="w-14 mt-2" 
            src={nextjs} 
            alt="Next.js"
            variants={skillVariants}
            whileHover="hover"
          />
          <motion.img 
            className="w-16" 
            src={typescript} 
            alt="TypeScript"
            variants={skillVariants}
            whileHover="hover"
          />
          <motion.img 
            className="w-16" 
            src={css} 
            alt="CSS"
            variants={skillVariants}
            whileHover="hover"
          />
          <motion.img 
            className="w-16" 
            src={js} 
            alt="JavaScript"
            variants={skillVariants}
            whileHover="hover"
          />
          <motion.img 
            className="w-16" 
            src={tailwind} 
            alt="Tailwind"
            variants={skillVariants}
            whileHover="hover"
          />
          <motion.img 
            className="w-14 mt-2" 
            src={firebase} 
            alt="Firebase"
            variants={skillVariants}
            whileHover="hover"
          />
          <motion.img 
            className="w-28 mt-2" 
            src={mongodb} 
            alt="MongoDB"
            variants={skillVariants}
            whileHover="hover"
          />
          <motion.img 
            className="w-28 mt-2" 
            src={express} 
            alt="Express"
            variants={skillVariants}
            whileHover="hover"
          />
          <motion.img 
            className="w-20 mt-2" 
            src={nodejs} 
            alt="Node.js"
            variants={skillVariants}
            whileHover="hover"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex items-center justify-center gap-5 mt-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img 
          className="w-20" 
          src={vscode} 
          alt="VS Code"
          variants={toolVariants}
          whileHover="hover"
        />
        <motion.img 
          className="w-16" 
          src={github} 
          alt="GitHub"
          variants={toolVariants}
          whileHover="hover"
        />
        <motion.span 
          className="text-orange-600 text-7xl"
          variants={toolVariants}
          whileHover="hover"
        >
          <FaGitAlt />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Skills;