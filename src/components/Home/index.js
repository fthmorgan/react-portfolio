import { Link } from "react-router-dom"
import LogoTitle from '../../assets/images/logo-f.png'
import './index.scss'
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters/index.js"
import Loader from "react-loaders"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'i', 't', 'h']
  const jobArray = ['a', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {

    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
          </h1>
          <h2>Full-Stack Developer/ Graphic Designer / STEM Enthusiast</h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home