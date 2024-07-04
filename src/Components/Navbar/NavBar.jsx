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
              <a href='#skills' className="font-bold">Skills</a>
            </li>
            <li>
              <a href='#projects' className="font-bold">Projects</a>
            </li>
            {/* <li>
              <a href='#contacts' className="font-bold">Contacts</a>
            </li> */}
          </ul>
        </div>
      </div>
    );
};

export default NavBar;