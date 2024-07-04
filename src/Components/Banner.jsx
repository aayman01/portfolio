import { IoDownloadOutline } from 'react-icons/io5';
import bannerimg from '../assets/bannerimg1.png';
const Banner = () => {
    return (
      <div className="bg-slate-900 py-10 px-4 md:px-16 w-full">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-6">
          <div className="">
            <p className="text-5xl font-bold mb-4">
              Hi, I am <br /> Aayman Alfee Rahman!
            </p>
            <p className="pb-4 text-5xl text-[#7ce0d3] font-bold">
              A Junior Web Developer
            </p>
            <p className="pb-6 md:w-3/4">
              With a solid foundation in web development and a passion for
              building responsive and user-centric web applications, I
              specialize in{" "}
              <span className="text-[#7ce0d3] font-medium">
                HTML, CSS, JavaScript, and React
              </span>
              . Committed to continuous learning and professional growth. Always
              eager to learn and take on new challenges
            </p>
            <button className="btn font-medium text-base btn-primary">
              Resume
              <IoDownloadOutline className="font-medium text-xl" />
            </button>
          </div>
          <div className="">
            <img
              src={bannerimg}
              className="w-[400px] md:w-[600px] rounded-full border-[#7ce0d3] border-2"
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;