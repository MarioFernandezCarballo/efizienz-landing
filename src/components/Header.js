import { useState } from 'react';
import logo from '../images/logo.png';
import logoMini from '../images/logoMini.png';
import MenuSVG from '../images/MenuSVG';
import CloseSVG from '../images/CloseSVG';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="header-logo" style={{backgroundImage: `url(${logo})`}}/>
        <div className="header-logo-mini" style={{backgroundImage: `url(${logoMini})`}}/>
        <div className='header-links'>
          <a href='#product'>Producto</a>
          <a href='#pricing'>Precios</a>
          <a href='#us'>Nosotros</a>
        </div>
        <div className='header-links-mini' onClick={()=>setIsVisible(true)}>
          <MenuSVG />
        </div>
      </div>
      {isVisible &&
        <div className='header-menu-mini light'>
          <div className='close-button' onClick={() => setIsVisible(false)}>
            <CloseSVG />
          </div>
        </div>
        }
    </header>
  )
}