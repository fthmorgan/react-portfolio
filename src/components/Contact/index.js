import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/index.js'
import { useEffect, useState } from 'react'

const Contact = () => {
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
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>Thank you for visiting my portfolio website! I'm thrilled to connect with you. Whether you have a project in mind, a potential collaboration, or simply want to say hello, feel free to reach out using the contact form below or via email. I'm always eager to discuss new opportunities and connect with fellow enthusiasts in the world of technology and design. Looking forward to hearing from you!</p>
          <div className='contact-form'>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required />
              </li>
              <li className='half'>
                <input type='email' name='email' placeholder='Email' required />
              </li>
              <li>
                <input type='text' name='subject' placeholder='Subject' required />
              </li>
              <li>
                <textarea placeholder='Message' name='message' required></textarea>
              </li>
              <li>
                <input type='submit' className='flat-button' value='SEND' />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact