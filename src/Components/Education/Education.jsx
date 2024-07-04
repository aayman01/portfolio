import SectionTItle from "../../Shared/SectionTItle";
import education from '../../assets/education.png'
import nohat from '../../assets/nohat.png'
import certificate from '../../assets/certificate.png'
const Education = () => {
  return (
    <div className="container">
      <SectionTItle heading="Educations"></SectionTItle>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-16">
        <div className="card bg-base-100 shadow-xl w-[300px]">
          <figure className="pt-2">
            <img className="w-24" src={education} alt="icon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">2019-2020</h2>
            <h2 className="font-bold text-xl">SSC</h2>
            <p className="text-lg font-bold">Khulna Zilla School</p>
            <p className="font-medium">GPA - 4.56 out of 5</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-[300px]">
          <figure className="pt-2">
            <img className="w-24" src={nohat} alt="icon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">2019-2020</h2>
            <h2 className="text-xl font-bold">Diploma in Civil</h2>
            <p className="text-lg font-bold">Khulna Polytechnic Institute</p>
            <p className="font-medium">
              Currently Studying(Will be Graduate in 2025)
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-[300px]">
          <figure className="pt-2">
            <img className="w-24" src={certificate} alt="icon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">2019-2020</h2>
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
