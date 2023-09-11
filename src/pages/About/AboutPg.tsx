import Lottie from 'lottie-react';
import AboutAnimation from '../../assets/images/about.json';

const AboutPg = () => {
  return (
    <div>
        <div className="aboutPg">
        <div className="wrapper">
          <h1>About</h1>
          <Lottie animationData={AboutAnimation} className="aboutImg"/>
          <p>
            AcademicArchive LK is a platform dedicated to assisting Sri Lankan students in accessing past papers.
            Founded in 2023 by Irusha Pekshana, the platform offers free access to past papers for the LK O/L General Education (GEO) exam.
            Serving as a valuable resource, AcademicArchive LK supports students preparing for examinations in Sri Lanka.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPg
