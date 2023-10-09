import './index.scss'
import AnimatedLetters from "../AnimatedLetters/index.js"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faVuejs } from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {

    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Hello, I'm Faith, hailing from the picturesque city of Boise, Idaho. While my academic journey led me through the fascinating world of biology, my passion for learning knows no bounds.
          </p>
          <p>Academic Background: I have a solid foundation in biology, having pursued it in college. The intricacies of life sciences have always captivated my curiosity, and it's a subject close to my heart. But as life often takes unexpected turns, I've embarked on a new adventure: the world of coding and technology.</p>
          <p>Love for the Outdoors: When I'm not immersed in lines of code or exploring the digital realm, you can often find me outdoors, pursuing my love for hiking. Idaho's natural beauty provides an endless playground for this hobby, and I'm always up for discovering new trails and hidden gems.</p>
          <p>Passion for Science: My love for science extends beyond the lab. Whether it's reading about the latest advancements in various scientific fields or engaging in spirited discussions about the mysteries of the universe, I'm always eager to expand my horizons.</p>
          <p>A Lifelong Learner: What truly defines me is my unquenchable thirst for knowledge. Learning is not just a pastime; it's a way of life for me. The world of coding and technology has opened up exciting new avenues for exploration, and I'm eager to embrace the challenges and opportunities it offers. Join me on this incredible journey of self-discovery and growth as I delve into the world of coding, and let's learn, explore, and innovate together.</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faVuejs} color="#41B883
" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D
" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#f06529
" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9
" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNode} color="#41B883
" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28
" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About