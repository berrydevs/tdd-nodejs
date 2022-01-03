import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import './layout.module.styl';
import * as layoutStyles from './layout.module.styl'

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
      <h1 className={layoutStyles.test}>Layout</h1>
      <Footer></Footer>
    </>
  );
}

export default Layout;
