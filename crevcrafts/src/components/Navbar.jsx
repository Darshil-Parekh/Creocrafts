import { useState } from 'react'
import logo from '../Images/Logo.svg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="navbar__brand" href="/" aria-label="CreovueCrafts home">
          <img src={logo} alt="CreovueCrafts" />
        </a>

        <div
          id="main-navigation-links"
          className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}
        >
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services <span className="navbar__chevron" aria-hidden="true"></span>
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <button
          className="navbar__menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar