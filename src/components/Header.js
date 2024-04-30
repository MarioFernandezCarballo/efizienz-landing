import logo from '../images/logo.png';
import logoMini from '../images/logoMini.png';

export default function Header() {
  return (
    <header className="header-container-light">
      <div className="header-wrapper">
        <div className="header-logo" style={{backgroundImage: `url(${logo})`}}/>
        <div className="header-logo-mini" style={{backgroundImage: `url(${logoMini})`}}/>
        <div className='header-links'>
          <a href='#'>Producto</a>
          <a href='#'>Precios</a>
          <a href='#'>Nosotros</a>
        </div>
      </div>
    </header>
  )
}