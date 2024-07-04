import SectionTItle from "../Shared/SectionTItle";
import project2 from "../assets/p2full.png";
import project3 from "../assets/p3full.png";
import reactimg from "../assets/react.png";
import firebase from "../assets/firebase.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import img from '../assets/p1full.png'
import { RxExternalLink } from "react-icons/rx";


const Projects = () => {
    return (
      <div>
        <SectionTItle heading="Projects"></SectionTItle>
        <div className="px-4 md:px-10">
          <div className="flex items-center justify-between bg-primary shadow-xl text-white rounded-xl mt-10 gap-6">
            <div className="w-1/2 ml-4">
              <img className="w-full" src={img} alt="Projects Picture" />
            </div>
            <div className="w-3/4 mt-10 pr-3">
              <h2 className="text-3xl font-bold">PharmaPlaza</h2>
              <p>
                {" "}
                Our platform offers an extensive selection of prescription
                medications, over-the-counter drugs, vitamins, supplements,
                personal care products, and medical devices.Vendors can easily
                list their healthcare products, manage inventory, and process
                orders through a user-friendly interface. Users can submit
                queries and receive expert advice from healthcare professionals,
                ensuring informed purchase decisions.A clean, intuitive design
                ensures customers can quickly find and purchase the products
                they need with minimal effort.Advanced security measures,
                including encryption and secure payment gateways, protect user
                data and transaction details.Products are organized into clear
                categories such as Prescription Medications, Vitamins &
                Supplements, First Aid, Personal Care, Medical Devices, Baby &
                Child Care, and Herbal Products.Vendors can track their sales,
                monitor customer feedback, and gain insights into their
                performance.The website is fully responsive, providing a
                seamless shopping experience across all devices, including
                smartphones and tablets.
              </p>

              <p className="text-2xl font-bold">Technology Used</p>
              <div className="flex items-center gap-2 mt-3">
                <img className="w-12" src={reactimg} alt="" />
                <img className="w-14" src={css} alt="" />
                <img className="w-14" src={tailwind} alt="" />
                <img className="w-12" src={firebase} alt="" />
                <img className="w-20" src={mongodb} alt="" />
                <img className="w-16" src={express} alt="" />
                <img className="w-16" src={nodejs} alt="" />
              </div>

              <div className="card-actions justify-start mt-3 pb-8">
                <a
                  href="https://bucolic-conkies-2c096d.netlify.app"
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-4"
                >
                  Live Link{" "}
                  <RxExternalLink className="text-lg ml-1 font-semibold" />
                </a>
                <a
                  href="https://github.com/aayman01/Pharma_Plaza_Client"
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-4"
                >
                  Github Client{" "}
                  <RxExternalLink className="text-lg ml-1 font-semibold" />
                </a>
                <a
                  href="https://github.com/aayman01/Pharma_Plaza_Server"
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-4"
                >
                  Github Server{" "}
                  <RxExternalLink className="text-lg ml-1 font-semibold" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-primary shadow-xl text-white rounded-xl mt-10 gap-6 p-6">
            <div className="w-3/4 mt-10 pr-3">
              <h2 className="text-4xl font-bold mb-3">HealthTap</h2>
              <p>
                {" "}
                This platform provides a seamless and efficient way to manage
                your health with a user-friendly booking system and access to a
                wide range of medical specialties.Schedule appointments with
                just a few clicks, making healthcare management
                effortless.Consult with board-certified professionals across
                various specialties to receive the best possible care.Access
                services in general medicine, dermatology, mental health,
                paediatrics, orthopaedics, cardiology, and more. Whatever your
                health needs, we have a specialist ready to help.Your personal
                and medical information is protected with industry-standard
                encryption, ensuring your data remains safe and confidential.Our
                website is fully responsive, providing an optimal viewing
                experience across all devices, including desktops, tablets, and
                smartphones. Manage your health on the go with ease.
              </p>

              <p className="text-2xl font-bold">Technology Used</p>
              <div className="flex items-center gap-2 mt-3">
                <img className="w-12" src={reactimg} alt="" />
                <img className="w-14" src={css} alt="" />
                <img className="w-14" src={tailwind} alt="" />
                <img className="w-12" src={firebase} alt="" />
                <img className="w-20" src={mongodb} alt="" />
                <img className="w-16" src={express} alt="" />
                <img className="w-16" src={nodejs} alt="" />
              </div>

              <div className="card-actions justify-start mt-3 pb-8">
                <a
                  href="https://health-tap-3d23f.web.app"
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-4"
                >
                  Live Link{" "}
                  <RxExternalLink className="text-lg ml-1 font-semibold" />
                </a>
                <a
                  href="https://github.com/aayman01/health-tap-client"
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-4"
                >
                  Github Client{" "}
                  <RxExternalLink className="text-lg ml-1 font-semibold" />
                </a>
                <a
                  href="https://github.com/aayman01/Health_Tap_Server"
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-4"
                >
                  Github Server{" "}
                  <RxExternalLink className="text-lg ml-1 font-semibold" />
                </a>
              </div>
            </div>
            <div className="w-1/2 ml-4">
              <img className="w-full" src={project2} alt="Projects Picture" />
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-10">
          <div className="flex items-center justify-between bg-primary shadow-xl text-white rounded-xl mt-10 gap-6 p-4">
            <div className="w-1/2 ml-4">
              <img className="w-full" src={project3} alt="Projects Picture" />
            </div>
            <div className="w-3/4 mt-10 pr-3">
              <h2 className="text-3xl font-bold">OilArtistry</h2>
              <p>
                {" "}
                Discover and Buy Beautiful Watercolor Paintings Welcome to my
                platform, your go-to destination for exquisite watercolor
                paintings. Whether you're an art enthusiast or a collector, our
                website offers a seamless and secure shopping
                experience.Effortlessly explore different categories to find the
                art that resonates with you the most.Artists can create an
                account to showcase and sell their own watercolor paintings
                directly on our platform, providing a space for creative talents
                to reach a broader audience. Browse our entire collection of
                available watercolor paintings to find the perfect piece for
                your collection or home. From abstract to landscapes, we have
                something for everyone.Enjoy a safe and secure shopping
                experience with our encrypted payment processing and buyer
                protection, ensuring your transactions are protected.Our website
                is designed to be responsive, ensuring an optimal viewing
                experience across various devices, including desktops, tablets,
                and smartphones. Shop for your favorite art pieces anytime,
                anywhere.
              </p>

              <p className="text-2xl font-bold">Technology Used</p>
              <div className="flex items-center gap-2 mt-3">
                <img className="w-12" src={reactimg} alt="" />
                <img className="w-14" src={css} alt="" />
                <img className="w-14" src={tailwind} alt="" />
                <img className="w-12" src={firebase} alt="" />
                <img className="w-20" src={mongodb} alt="" />
                <img className="w-16" src={express} alt="" />
                <img className="w-16" src={nodejs} alt="" />
              </div>

              <div className="card-actions justify-start mt-3 pb-8">
                <a
                  href="https://oilartistry-1e48c.web.app"
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-4"
                >
                  Live Link{" "}
                  <RxExternalLink className="text-lg ml-1 font-semibold" />
                </a>
                <a
                  href="https://github.com/aayman01/Oil-Artistry-Client"
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-4"
                >
                  Github Client{" "}
                  <RxExternalLink className="text-lg ml-1 font-semibold" />
                </a>
                <a
                  href="https://github.com/aayman01/Oil-Artistry-Server"
                  target="blank"
                  className="badge badge-outline hover:bg-white hover:text-[#7ce0d3] font-medium p-4"
                >
                  Github Server{" "}
                  <RxExternalLink className="text-lg ml-1 font-semibold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;