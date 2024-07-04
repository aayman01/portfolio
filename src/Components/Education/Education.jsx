import SectionTItle from "../../Shared/SectionTItle";
import "./Education.css";
const Education = () => {
  const timelineItems = [
    { id: 1, content: "Started project", date: "January 2023" },
    { id: 2, content: "First milestone", date: "February 2023" },
    { id: 3, content: "Beta release", date: "March 2023" },
    { id: 4, content: "Official launch", date: "April 2023" },
  ];

  return (
    <div className="container">
      <SectionTItle heading="Educations"></SectionTItle>
      <div className="timeline flex flex-col">
        <div className="checkpoint">
          <div className="bg-primary">
            <h3 className="text-xl font-bold">2019-2020</h3>
            <h2 className="text-xl font-bold">SSC</h2>
            <p className="text-lg font-bold">Khulna Zilla School</p>
            <p className="font-medium">GPA - 4.56 out of 5</p>
          </div>
        </div>
        <div className="checkpoint">
          <div className="bg-primary">
            <h3 className="text-xl font-bold">2021-2022</h3>
            <h2 className="text-xl font-bold">Diploma in Civil</h2>
            <p className="text-lg font-bold">Khulna Polytechnic Institute</p>
            <p className="font-medium">
              Currently Studying(Will be Graduate in 2025)
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div className="bg-primary">
            <h3 className="font-bold text-xl">2024</h3>
            <h2 className="text-xl font-bold">Web Development</h2>
            <p className="font-bold">Programming hero</p>
            <p className="font-medium">Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
