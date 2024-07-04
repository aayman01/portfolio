import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo1.png"
const Footer = () => {
    return (
      <div>
        <footer className="footer bg-base-100 text-neutral-content items-center pb-4 md:p-0">
          <aside className="grid-flow-col items-center">
            <img className="w-20" src={logo} alt="" />
            <p>
              Copyright © ${new Date().getFullYear()} - All right reserved by -
              Aayman Alfee Rahman
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 place-self-center md:justify-self-end  mr-4">
            <a
              className="text-3xl"
              href="https://www.facebook.com/aayman.rahman.3"
              target="blank"
            >
              <FaFacebook />
            </a>
            <a
              className="text-3xl"
              href="https://www.instagram.com/abman_rahman/?hl=en"
              target="blank"
            >
              <FaInstagram />
            </a>
            <a
              className="text-3xl"
              href="https://www.linkedin.com/in/aayman-alfee-rahman"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;