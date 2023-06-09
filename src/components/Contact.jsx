import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_mo8btha",
        "template_nmcg3dk",
        {
          from_name: form.name,
          to_name: "Darkhan Iglikov",
          from_email: form.email,
          to_email: "shmudivel@icloud.com",
          message: form.message,
        },
        "uhV_tp01UMHpkkWMw"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent, I'll get back to you soon!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong, please try again later!");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black p-8 "
      >
        <p className={styles.sectionSubText}>Start the</p>{" "}
        <h3 className={`${styles.sectionHeadText} text-white`}>Project</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            {/* <span className="text-white font-medium mb-4">Your Name</span> */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your beautiful name"
              className="bg-black border-[1px] border-white py-4 px-6 placeholder:text-secondary text-white outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-white font-medium mb-4">Your email</span> */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Reach me at"
              className="bg-black border-[1px] border-white py-4 px-6 placeholder:text-secondary text-white  outline-none  font-medium"
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-white font-medium mb-4">Your Message</span> */}
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="I want to discuss..."
              className="bg-black border-[1px] border-white  py-4 px-6 placeholder:text-secondary text-white  outline-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-black border-[1px] border-white  py-3 px-8  outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Submitting... " : "Submit"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
