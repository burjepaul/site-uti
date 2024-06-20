import { Fragment, useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { DetectScroll } from "../../config/helper"
import './navigation.styles.scss'
import './burger-menu.styles.scss'
import Button from "../../components/button/button"

const Navigation = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    
    const scroll = DetectScroll()

    const toggle_hide = () => {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
        setIsMenuClicked(!isMenuClicked)
    }

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            toggle_hide()
        }
        setIsMenuClicked(!isMenuClicked)
    }
    
    window.addEventListener('resize', () => {setViewportWidth(window.innerWidth)})

    if (viewportWidth < 600 ) {
    return (
        <Fragment>
            <div style={{width:'100%', height:'9vh'}}>
                <Link className="logo-container" to="/">

                </Link>
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </nav>

                <div className={menu_class}>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/gallery'>
                            Catalog
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/products'>
                            Products
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/aboutus'>
                            Our Story
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/contact'>
                            Contact
                        </Link>
                </div>
            <Outlet/>
            </div>
        </Fragment>
    )
    }
    else{
        return(
          <Fragment>
            <div className="navigation" style={scroll === 'down' ? {opacity: 0} : {opacity: 100}}>
                <Link className="logo-container-nav" to="/">
                    <p className="logo-text">
                        IronCraft
                    </p>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/gallery'>
                        Catalog
                    </Link>
                    <Link className="nav-link" to='/products'>
                        Products
                    </Link>
                    <Link className="nav-link" to='/aboutus'>
                        About us
                    </Link>
                </div>
                <Link className="nav-link-contact" to='/contact'>
                    <Button buttonText="ENG" model="2"/>
                </Link>
                <Link className="nav-link-contact" to='/contact'>
                    <Button buttonText="Contact Us" model="1"/>
                </Link>
            </div>
            <Outlet/>
          </Fragment>
        )  
}
    }
    
  

export default Navigation