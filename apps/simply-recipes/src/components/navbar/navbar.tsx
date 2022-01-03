import { Link } from 'gatsby';
import './navbar.module.styl';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>{' '}
        <li>
          <Link to="/tags">Tags</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
