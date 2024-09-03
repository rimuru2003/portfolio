import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/Navbar.css";
import { DiGhostSmall } from "react-icons/di";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const txt = "Aryan Singh";
  const speed = 100;

  const [listItems, setListItems] = useState([""]);
  const listTxt = ["Home", "About", "Skill", "Project", "Contact"];

  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation(); // Use this hook to get current route

  useEffect(() => {
    const typeWriter = () => {
      if (i < txt.length) {
        setText((prevText) => prevText + txt.charAt(i));
        setI((prevI) => prevI + 1);
      }
    };

    if (i < txt.length) {
      const timer = setTimeout(typeWriter, speed);
      return () => clearTimeout(timer);
    }
  }, [i, txt]);

  useEffect(() => {
    listTxt.forEach((item, index) => {
      setTimeout(() => {
        setListItems((prevListItems) => {
          const newListItems = [...prevListItems];
          newListItems[index] = item;
          return newListItems;
        });
      }, index * 200);
    });
  }, [listTxt]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => ({
        y: window.scrollY,
        lastY: prevState.y,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      if (scrollData.y > 100 && scrollData.lastY < scrollData.y) {
        headerElement.classList.add("hideNav");
      } else {
        headerElement.classList.remove("hideNav");
      }
    }
  }, [scrollData]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isProjectPage = location.pathname === '/projects';

  return (
    <div id="header" className={`n1 ${isProjectPage ? 'hide-navbar' : ''}`}>
      <h1 className="n2">{text}</h1>
      <ul className="n3">
        {listItems.map((item, index) => (
          <li key={index} onClick={() => scrollToSection(item.toLowerCase())}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
