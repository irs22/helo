import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import './Footer.scss'
import { NavLink } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'
import { FiDownloadCloud } from 'react-icons/fi'
import { BsPeople } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="wrapper">
        <div className="info">
          <Logo/>
          <div className="desc">Unlock a world of knowledge with Academic ArchiveLK. Your one-stop destination for Sri Lankan O/L past papers, providing students with valuable resources to excel in their exams.</div>
        </div>

        <div className="navigations">
          <h3>Links</h3>
          <ul>
            <NavLink to="/"><BiHomeAlt /> Home</NavLink>
            <NavLink to="/downloads"><FiDownloadCloud /> Downloads</NavLink>
            <NavLink to="/about"><BsPeople />About</NavLink>
            <a href="mailto:mail.irusha@gmail.com"><HiOutlineMail />Contact</a>
          </ul>
        </div>
        <div className="socials">
          <h3>Social Media</h3>
          <ul>
            <a target="_blank" href="/"><FiGithub /> Github</a>
            <a target="_blank" href="https://t.me/+R49yf095irMyZTg9"><SiTelegram /> Telegram</a>
            <a target="_blank" href="/facebook"><FaFacebookSquare /> Facebook</a>
            <a target="_blank" href="https://chat.whatsapp.com/F0XxiDXggqBAdgPrOh1Gdh"><AiOutlineWhatsApp /> Whatsapp</a>
          </ul>
        </div>

        <div className="fFooter">
          <a href="https://github.com/irs22">&copy; {new Date().getFullYear()}   @Irusha Pekshana. All Rights Reserved.</a>
        </div>

      </div>

    </footer>
  )
}

export default Footer
