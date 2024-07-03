import { IoDownloadOutline } from 'react-icons/io5';
import bannerimg from '../assets/bannerimg1.png';
const Banner = () => {
    return (
      <div className="bg-slate-900 pt-2 pb-5 px-16">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className="">
            <p className="text-3xl font-bold">Hi, I am Aayman!</p>
            <p className="pb-6 text-5xl text-[#7ce0d3] font-bold">
              A Web Developer
            </p>
            <button className="btn font-medium text-base btn-primary">
              Resume
              <IoDownloadOutline className='font-medium text-xl' />
            </button>
          </div>
          <div className="">
            <img
              src={bannerimg}
              className="w-[300px] rounded-full border-[#7ce0d3] border-2"
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;