import { NavLink } from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => {
  return (
    <section className="NotFound">

      <div className="wrapper">
        <div className="data">
          <span >Error 404</span>
          <h1 className="title">Hey Buddy</h1>
          <p className="subtext">
            We can't seem to find the page <br /> you are looking for.
          </p>
          <NavLink to="/" className="btn">Go Home</NavLink>
        </div>
      </div>

    </section>
  )
}

export default NotFound