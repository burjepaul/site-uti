import React from 'react'
import './home.styles.scss'
import Button from '../../components/button/button'
import { Link } from "react-router-dom"
import Shield from '../../assets/scut.png'
import Suport from '../../assets/suport-lumanari.png'

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

        <div className='shield-container'>
          
          <div className='shield-text'>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, ad!
            </h2>
          </div>
          <div className='shield-img-container'>
            <img className='shield-img' src={Shield} alt='shield'/>
          </div>
          <p>1</p>
        </div>

        <div className='suport-container'>
          
          <div className='suport-img-container'>
          <img className='suport-img' src={Suport} alt='suport'/>
          </div>
          <div className='suport-text'>
          <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, ad!
          </h2>
          </div>
          <p>1</p>
          
          </div>
       
        <div className='shield-text'>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, ad!
          </h2>
        </div>
  
      </div>
    )
  }


export default Home