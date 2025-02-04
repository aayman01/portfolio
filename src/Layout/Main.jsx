import Banner from "../Components/Banner";
// import Contact from "../Components/contact";
import Education from "../Components/Education/Education";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar/NavBar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Main = () => {
    return (
      <div>
        <NavBar />
        <div className="max-w-6xl mx-auto px-4">
          <Banner />
          <Skills />
          <Projects />
          <Education/>
          {/* <Contact/> */}
        </div>
          <Footer/>
      </div>
    );
};

export default Main;