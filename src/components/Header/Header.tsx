import React from 'react';
import header from './Header.module.css';
import Search from "./SearchInput/Search";
import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";


const Header = () => {
  return (
    <header className={header.header}>
      <div>
        <a href='#' className={header.link}>
          <img src='https://iqonic.design/themes/socialv/html/images/logo.png' alt='logo' className={header.header__logo} />
          <h1 className={header.title}>SocialReact</h1>
        </a>
      </div>
      <Search />
      <HeaderNavBar />
    </header>
  )
}

export default Header;