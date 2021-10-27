import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'
import logo from './../../assets/images/logo.png'


const Header = (props) => {
  const {btnLinkTo,btnText} = props;
  return (
    <nav className={styles.nav}>
       <div>
         <img src={logo} alt="logo" />
       </div>
        <Link className={styles.btn} to={btnLinkTo}>{btnText}</Link>
    </nav>
  );
}

export default Header;
