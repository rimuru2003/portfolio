import React, { useEffect, useState, useRef } from "react";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";

const Contact = () => {
  const [con, setCon] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const [cont, setCont] = useState(null);
  const form = useRef();

  const [cons, setCons] = useState(null);
  const items = useSelector((state) => state.counter.items);
  const contabout = items.info?.find((item) => item.contactMe)?.contactMe || "";

  const imga = items.img?.find((item) => item.contact)?.contact || "";
  useEffect(() => {
    setCons(contabout);
    setCont(imga);
  }, [contabout, imga]);

  const settingcon = (e) => {
    setCon({ ...con, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oef3i38", "template_2uxlppp", form.current, "P5Sm3jFvsLS-rA0Ol")
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="co1">
      <div className="co2">
        <img className="imgc" src={cont} alt="Contact" />
      </div>
      <div className="co3">
        <h1 className="co4">Contact Me</h1>

        <p className="co5">{cons}</p>
        <form className="co6" ref={form} onSubmit={sendEmail}>
          <input
            autoComplete="off"
            type="text"
            className="co7"
            name="name"
            value={con.name}
            placeholder="Your Name:"
            onChange={settingcon}
          />
          <input
            autoComplete="off"
            type="text"
            className="co8"
            name="email"
            value={con.email}
            placeholder="Email:"
            onChange={settingcon}
          />
          <input
            autoComplete="off"
            type="text"
            className="co9"
            name="subject"
            value={con.subject}
            placeholder="Subject:"
            onChange={settingcon}
          />
          <textarea
            autoComplete="off"
            className="co10 custom-scrollbar"
            name="text"
            value={con.text}
            placeholder="Your Message:"
            onChange={settingcon}
            id="desc"
          />
          <button type="submit" className="co11">
            Send
            <AiOutlineSend className="co12" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
