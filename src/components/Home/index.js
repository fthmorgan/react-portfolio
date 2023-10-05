import { Link } from "react-router-dom"
import LogoTitle from '../../assets/images/logo-f.png'
import './index.scss'
import { useState } from "react"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'o']

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br />I'm
          <img src={LogoTitle} alt="developer" />aith
          <br />
          a web developer
        </h1>
        <h2>Full-Stack Developer/ Graphic Designer / STEM Enthusiast</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home