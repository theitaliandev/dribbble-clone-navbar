import { useMediaQuery } from 'react-responsive'
import {HiSearch, HiMenu} from 'react-icons/hi'
import { useState } from 'react'

import dribbleLogo from './image.svg'
import './navbar.css'
import links from './nav-links'


const reactIconStyle = {width: '18px', height: '18px', color: '#9e9ea7', cursor: 'pointer'}

function DesktopNavbar() {
    return(
        <div className='nav-container'>
            <nav className='nav-desktop'>
                <div>
                    <img src={dribbleLogo} alt="Dribble Logo" />
                </div>
                <ul className='desktop-menu'>
                    {links.map((link) => {
                        console.log(link)
                        return <li key={link.name}><a href={link.route}>{link.name}</a></li>
                    })}
                </ul>
            </nav>
            <ul className='desktop-menu-btns'>
                <li><HiSearch style={reactIconStyle}/></li>
                <li>Sign in</li>
                <li><p>Share my work</p></li>
            </ul>
        </div>
    )
}

function MobileNavbar({isOpen, setIsOpen}) {
    return(
        <>
            <nav className='nav-mobile'>
                    <HiMenu onClick={() => setIsOpen(!isOpen)} style={reactIconStyle}/>
                    <img src={dribbleLogo} alt="Dribble Logo" />
                    <p className='menu-mobile-btns'>Sign in</p>
            </nav>
            {isOpen ? (
                <div className='mobile-menu'>
                    <p>Hello world</p>
                </div>
            ) : (
                null
            )}
        </>
    )
}

export default function Navbar() {
    const notMobile = useMediaQuery({
        query: '(min-width: 1064px)'
      })
     
    const [isOpen, setIsOpen] = useState(false)  
    return(
        <header>
                {notMobile ? <DesktopNavbar /> : <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
        </header>
    )
}