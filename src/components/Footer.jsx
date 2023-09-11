import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineArrowUp } from 'react-icons/ai'
import img from '../assets/logo.png'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={img} alt="" />
            <h2>Bibek Regmi</h2>
            <p>Motivation is temporary, but discipline last forever.</p>

        </div>

        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.linkedin.com/in/bibek-regmi-a50388171/" target='blank'><AiFillLinkedin/></a>
                <a href="https://github.com/BibekRegmi9" target='blank'><AiFillGithub/></a>
                <a href="https://twitter.com/RegmiOG" target='blank'><AiFillTwitterCircle/></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer