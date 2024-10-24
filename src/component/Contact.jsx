import React, { useEffect, useState, useRef } from "react";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [con, setCon] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const items = useSelector((state) => state.counter.items);
  const [cont, setCont] = useState(null);
  const form = useRef();

  const [captchaVerified, setCaptchaVerified] = useState(false); // Captcha state
  const [cons, setCons] = useState(null);
  const contabout = items.info?.find((item) => item.contactMe)?.contactMe || "";
  const imga = items.img?.find((item) => item.contact)?.contact || "";

  useEffect(() => {
    setCons(contabout);
    setCont(imga);
  }, [contabout, imga]);

  const settingcon = (e) => {
    setCon({ ...con, [e.target.name]: e.target.value });
  };

  const onCaptchaChange = (value) => {
    setCaptchaVerified(!!value); // If value exists, captcha is verified
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, subject, text } = con;
    if (!captchaVerified) {
      toast.error("Please verify the CAPTCHA.");
      return;
    }
    if (name && email && subject && text) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            toast.success("Email sent successfully!");
            setCon({ name: "", email: "", subject: "", text: "" });
          },
          (error) => {
            toast.error("Failed to send email. Please try again.");
            console.error("FAILED...", error.text);
          }
        );
    } else {
      toast.error("Please enter all details.");
    }
  };

  return (
    <div className="co1">
      <div className="co2">
        <img className="imgc reveal" src={cont} alt="Contact" />
      </div>
      <div className="co3 reveal">
        <h1 className="co4 reveal">Contact Me</h1>
        <p className="co5 reveal">{cons}</p>
        <form className="co6" ref={form} onSubmit={sendEmail}>
          <input
            autoComplete="off"
            type="text"
            className="co7 reveal"
            name="name"
            value={con.name}
            placeholder="Your Name:"
            onChange={settingcon}
          />
          <input
            autoComplete="off"
            type="email"
            className="co8 reveal"
            name="email"
            value={con.email}
            placeholder="Email:"
            onChange={settingcon}
          />
          <input
            autoComplete="off"
            type="text"
            className="co9 reveal"
            name="subject"
            value={con.subject}
            placeholder="Subject:"
            onChange={settingcon}
          />
          <textarea
            autoComplete="off"
            className="co10 custom-scrollbar reveal"
            name="text"
            value={con.text}
            placeholder="Your Message:"
            onChange={settingcon}
            id="desc"
          />

          {/* CAPTCHA Component */}
          <ReCAPTCHA
            className="recapt"
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Using env variable
            onChange={onCaptchaChange}
          />

          <button type="submit" className="co11 reveal">
            Send
            <AiOutlineSend className="co12" />
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
