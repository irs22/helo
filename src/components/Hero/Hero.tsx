import Lottie from "lottie-react"
import heroAnimation from '../../assets/images/hero.json'
import { BsArrowRight } from 'react-icons/bs'
import './Hero.scss'
import { NavLink } from "react-router-dom"

// what should be add to this Component
//    - our purpose 
//    - small description
//    - a hero image
//    - btn animation 
//    - Responsiveness


const Hero = () => {


      return (
            <section className="hero">
                  <div className="wrapper">
                        <div className="details">
                              <h1>Unlock Success with Past Papers</h1>
                              <span><span className="qttn"></span> Unlock a world of knowledge with Academic ArchiveLK. Your one-stop destination for Sri Lankan O/L past papers, providing students with valuable resources to excel in their exams <span className="qttn"></span></span>

                              <NavLink className="btn primary" to="/downloads">Let's Start <BsArrowRight />
                              </NavLink>
                        </div>

                        <div className="img_wrapper">
                              <Lottie animationData={heroAnimation} className="hero_img" />
                        </div>

                  </div>


            </section>
      )


}

export default Hero
