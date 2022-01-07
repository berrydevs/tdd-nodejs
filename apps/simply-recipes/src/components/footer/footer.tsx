import './footer.module.styl';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className='page-footer'>
      <p>
        &copy; {new Date().getFullYear()} <span>Simply Recipes</span>. Built by{' '}
        <a href="www.berrydevs.com">Berrydevs</a>
      </p>
    </footer>
  );
}

export default Footer;
