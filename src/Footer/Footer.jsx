import React from 'react'
import logo from '../assets/3.png'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
        <h4>
          We offer interactive and fun programming courses for kids to help them
          build their future with their own hands.
        </h4>
      </div>

      <div className={style.box}>
        <h4>Program</h4>
        <p>Coding</p>
        <p>Design</p>
        <p>Robotics</p>
        <p>Games</p>
        <p>Web</p>
      </div>

      <div className={style.box}>
        <h4>Benefits</h4>
        <p>Fun</p>
        <p>Experts</p>
        <p>Safe</p>
        <p>Projects</p>
        <p>Support</p>
      </div>

      <div className={style.box}>
        <h4>About</h4>
        <p>Creative</p>
        <p>Practical</p>
        <p>Future</p>
        <p>Skills</p>
        <p>Technology</p>
      </div>
    </footer>
  )
}

export default Footer

