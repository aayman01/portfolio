import img from '../assets/logo1.png'
const NavBar = () => {
    return (
      <div className="navbar p-0">
        <div className="flex-1 ml-5">
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <img className="w-[80px]" src={img} alt="" />
        </div>
        <div className="flex-none mr-5">
          <ul className="menu menu-horizontal px-1 text-[#7ce0d3]">
            <li>
              <button className="font-bold ">Skills</button>
            </li>
            <li>
              <button className="">About Me</button>
            </li>
            <li>
              <button className="">Projects</button>
            </li>
            <li>
              <button className="">Contacts</button>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NavBar;