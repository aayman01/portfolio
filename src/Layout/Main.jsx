import Banner from "../Components/Banner";
import NavBar from "../Components/Navbar/NavBar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Main;