import { BsPeople } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownloadCloud } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import './Header.scss'
import Logo from "../Logo/Logo";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClassName = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className="header">
        <div className="nContent">
          <NavLink to="/"><Logo /></NavLink>


          <ul className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/downloads">Downloads</NavLink>
            <NavLink to="/about">About</NavLink>
            <a href="mailto:mail.irusha@gmail.com">Contact</a>
          </ul>

          <button className="btn" onClick={toggleClassName}>
            <CgMenuRight />
          </button>

          <div className={`mobileNav ${isActive ? 'active' : ' '}`}>
            <ul>
              <NavLink to="/"><BiHomeAlt /> Home</NavLink>
              <NavLink to="/downloads"><FiDownloadCloud /> Downloads</NavLink>
              <NavLink to="/about"><BsPeople />About</NavLink>
              <a href="mailto:mail.irusha@gmail.com"><HiOutlineMail />Contact</a>
            </ul>
          </div>
        </div>

      </section>


    </>
  );
};

export default Header;
