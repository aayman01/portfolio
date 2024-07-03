import img from '../../assets/logo1.png';

const NavBar = () => {    
    return (
      <div
        className="navbar p-0 bg-slate-900"
      >
        <div className="flex-1 ml-5">
          <img className="w-[100px]" src={img} alt="" />
        </div>
        <div className="flex-none mr-5">
          <ul className="menu menu-horizontal px-1 text-[#7ce0d3] text-lg">
            <li>
              <button className="font-bold">Skills</button>
            </li>
            <li>
              <button className="font-bold">About Me</button>
            </li>
            <li>
              <button className="font-bold">Projects</button>
            </li>
            <li>
              <button className="font-bold">Contacts</button>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NavBar;