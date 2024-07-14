import React, { useState } from "react";
import "../css/Contact.css";
import Conimg from "../pic/contact.svg";

const Contact = () => {
  const [con, setCon] = useState({
    name: "",
    email: "",
    text: "",
  });

  const settingcon = (e) => {
    setCon({ ...con, [e.target.name]: e.target.value });
  };

  return (
    <div className="co1">
      <div className="co2">
        <img src={Conimg}/>
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
         
          name="name"
          value={con.name}
           placeholder="Your Name:"
          onChange={settingcon}
        />
         <input  
         autoComplete="off"
          type="text"
        
          name="email"
          value={con.email}
          placeholder="Email"
          onChange={settingcon}/>
        <textarea  autoComplete="off"
          type="text"

          name="text"
          value={con.text}
          placeholder="your msg:"

          onChange={settingcon}
          
          cols="30"
          rows="10"
          />
          </form>
       
      </div>
    </div>
  );
};

export default Contact;
