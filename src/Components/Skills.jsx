import SectionTItle from "../Shared/SectionTItle";
import firebase from "../assets/firebase.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import reactimg from "../assets/react.png";
import js from "../assets/javascript.png";
import vscode from "../assets/vscode.png";
import github from "../assets/github.png";
import { FaGitAlt } from "react-icons/fa";



const Skills = () => {
    return (
      <div className="">
        <SectionTItle heading="My Skills"></SectionTItle>
        <div className="flex items-center justify-center gap-5">
          <img className="w-16" src={reactimg} alt="" />
          <img className="w-16" src={css} alt="" />
          <img className="w-16" src={js} alt="" />
          <img className="w-16" src={tailwind} alt="" />
          <img className="w-14" src={firebase} alt="" />
          <img className="w-28" src={mongodb} alt="" />
          <img className="w-28" src={express} alt="" />
          <img className="w-20" src={nodejs} alt="" />
        </div>
        <div className="flex items-center justify-center gap-5 mt-3">
          <img className="w-20" src={vscode} alt="" />
          <img className="w-16" src={github} alt="" />
          <span className="text-orange-600 text-7xl">
            <FaGitAlt />
          </span>
        </div>
      </div>
    );
};

export default Skills;