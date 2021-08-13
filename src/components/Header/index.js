import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="navigation">
          <Link className="navigation__link" to="/">
            <span>Main</span>
          </Link>
          <div className="navigation__line"></div>
          <Link className="navigation__link" to="/history">
            <span>History</span>
          </Link>
        </nav>
      </header>
    )
  }
}

export default Header
