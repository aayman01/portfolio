import { useState } from "react";
import SectionTItle from "../Shared/SectionTItle";
import { motion } from "framer-motion";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      const result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
    setButtonText("Send");
  };

  const inputStyle = "w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:border-[#7ce0d3] focus:outline-none text-white";

  return (
    <section id="contact" className="py-12 px-4">
      <div className="container mx-auto">
        <SectionTItle heading="Get In Touch" />
        
        <div className="max-w-4xl mx-auto mt-10 bg-gray-900 rounded-xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="text"
                  className={inputStyle}
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />
              </motion.div>
              
              <motion.div
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="text"
                  className={inputStyle}
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="email"
                  className={inputStyle}
                  value={formDetails.email}
                  placeholder="Email Address"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </motion.div>
              
              <motion.div
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="tel"
                  className={inputStyle}
                  value={formDetails.phone}
                  placeholder="Phone No."
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                />
              </motion.div>
            </div>

            <motion.div
              whileTap={{ scale: 0.99 }}
            >
              <textarea
                rows="6"
                className={inputStyle}
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
            </motion.div>

            <div className="flex flex-col items-center gap-4">
              <motion.button
                type="submit"
                className="btn btn-primary px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {buttonText}
              </motion.button>

              {status.message && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center ${
                    status.success ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {status.message}
                </motion.p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
