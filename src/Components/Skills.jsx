import SectionTItle from "../Shared/SectionTItle";
import firebase from "../assets/firebase.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import reactimg from "../assets/react.png";

const Skills = () => {
    return (
      <div>
        <SectionTItle heading="My Skills"></SectionTItle>
        <div className="flex">
          <img className="w-12" src={reactimg} alt="" />
          <img className="w-14" src={css} alt="" />
          <img className="w-14" src={tailwind} alt="" />
          <img className="w-12" src={firebase} alt="" />
          <img className="w-20" src={mongodb} alt="" />
          <img className="w-16" src={express} alt="" />
          <img className="w-16" src={nodejs} alt="" />
        </div>
      </div>
    );
};

export default Skills;