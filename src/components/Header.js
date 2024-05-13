import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/logo.png';
import logoMini from '../images/logoMini.png';
import MenuSVG from '../images/MenuSVG';
import CloseSVG from '../images/CloseSVG';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <header className="header-container light">
      <div className="header-wrapper">
        <div className='header-logo-container'>
          <div className="header-logo-mini" style={{backgroundImage: `url(${logoMini})`}}/>
          <div className="header-logo" style={{backgroundImage: `url(${logo})`}}/>
        </div>
        <div className='header-links body'>
          <a href='#us'>Nosotros</a>
          <a href='#product'>Producto</a>
          <a href='#pricing'>Precios</a>
          <a href='#contact'>Contacto</a>
        </div>
        <div className='header-links-mini' onClick={()=>setIsVisible(true)}>
          <MenuSVG />
        </div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className='header-mini'
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{hidden: { x: '-100%' }, visible: { x: 0 }
            }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <div className='container light'>
              <div className='wrapper'>
                <div className='header-mini-content'>
                  <div className='menu-mini-header'>
                    <div className="header-logo-mini" style={{ backgroundImage: `url(${logoMini})` }} />
                    <div className='close-button' onClick={() => setIsVisible(false)}>
                      <CloseSVG />
                    </div>
                  </div>
                  <div className='mini body'>
                    <a onClick={() => setIsVisible(false)} href='#us'>Nosotros</a> 
                    <a onClick={() => setIsVisible(false)} href='#product'>Producto</a>
                    <a onClick={() => setIsVisible(false)} href='#pricing'>Precios</a> 
                    <a onClick={() => setIsVisible(false)} href='#contact'>Contacto</a>
                  </div>
                  <footer className="footer-container">
                    <p>© 2024 Efizienz. All rights reserved.</p>
                  </footer>
                </div>
                
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}