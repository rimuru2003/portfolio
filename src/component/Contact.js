import React, { useState } from "react";
import "../css/Contact.css";
import Conimg from "../pic/contact.svg";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const [con, setCon] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  const settingcon = (e) => {
    setCon({ ...con, [e.target.name]: e.target.value });
    // console.log(con)
  };

  return (
    <div className="co1">
      <div className="co2">
        <img className="imgc" src={Conimg} />
      </div>
      <div className="co3">
        <h1 className="co4">Contact Me</h1>
        <p className="co5">
          I’m thrilled you’re here! Whether you have questions, project ideas,
          or just want to chat, reach out. I’m excited for new opportunities!
        </p>
        <form className="co6">
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
            placeholder="Email"
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
            type="text"
            className="co10 custom-scrollbar"
            name="text"
            value={con.text}
            placeholder="your msg:"
            onChange={settingcon}
            id="desc"
            cols="30"
            rows="10"
          />
        </form>
        <button className="co11">
          Send
          <AiOutlineSend className="co12" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
