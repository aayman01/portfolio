import Banner from "../Components/Banner";
import Education from "../Components/Education/Education";
import NavBar from "../Components/Navbar/NavBar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Main = () => {
    return (
      <div>
        {/* <NavBar /> */}
        <div className="max-w-6xl mx-auto px-4">
          <Banner />
          <Skills />
          <Projects />
          <Education/>
        </div>
      </div>
    );
};

export default Main;