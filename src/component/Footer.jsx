import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "../css/Footer.css";

const Footer = () => {
    const links = [
        {
          href: "https://www.instagram.com/aryansingh070503/?hl=en",
          icon: <FaInstagram />,
          color: "#c32aa3",
          id: 1,
        },
        {
          href: "https://x.com/karansnh007",
          icon: <FaSquareXTwitter />,
          color: "#000000",
          id: 2,
        },
        {
          href: "mailto:karansnh007@gmail.com",
          icon: <SiGmail />,
          color: "#BB001B",
          id: 3,
        },
        {
          href: "https://github.com/rimuru2003",
          icon: <FaGithub />,
          color: "#000000",
          id: 4,
        },
        {
          href: "https://www.linkedin.com/in/aryan-singh-a57715224/",
          icon: <FaLinkedin />,
          color: "#0a66c2",
          id: 5,
        },
    ];

    return (
        <div className="footer">
            <div className="footer-links ">
                {links.map((link) => (
                    <a 
                        key={link.id} 
                        href={link.href} 
                        className="footer-link reveal" 
                        style={{ color: link.color }}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Footer;
