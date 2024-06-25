import React from 'react'
import './home.styles.scss'
import Button from '../../components/button/button'
import { Link } from "react-router-dom"

const Home = () => {
    return (
      <div className='home-container'>
        
        <div className='hero-container'>

          <div className='hero-content'>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
          <div className="hero-button">
            <Link className="nav-link-contact" to='/contact'>
              <Button buttonText="Find more" model="1"/>
            </Link>
          </div>
          </div>


        </div>
      </div>
    )
  }


export default Home