import { Link } from 'gatsby';
import './navbar.module.styl';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Simple Recipe logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <Link to="/" className="nav-link" activeClassName="active-lin">
            Home
          </Link>
          <Link to="/recipes" className="nav-link" activeClassName="active-lin">
            Recipes
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-lin">
            Tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-lin">
            About
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="nav-link"
              activeClassName="active-lin"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
    // <nav>
    //   <FiAlignJustify />
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/recipes">Recipes</Link>
    //     </li>{' '}
    //     <li>
    //       <Link to="/tags">Tags</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Navbar;
