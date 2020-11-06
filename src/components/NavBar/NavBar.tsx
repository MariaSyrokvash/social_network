import React from 'react';
import navbar from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {NavBarDataType} from "../../redux/store";

type NavBarTypeProps = {
  navBarData: Array<NavBarDataType>
}

const NavBar = (props: NavBarTypeProps) => {

  return (
    <nav className={navbar.nav}>
      <ul className={navbar.nav__list}>
        <li className={navbar.nav__item}>
          <NavLink to='/profile' className={navbar.nav__link} activeClassName={navbar.active}>Profile</NavLink>
        </li>
        <li className={navbar.nav__item}>
          <NavLink to='/dialogs' className={navbar.nav__link} activeClassName={navbar.active}>Messages</NavLink>
        </li>
        <li className={navbar.nav__item}>
          <NavLink to='/news' className={navbar.nav__link} activeClassName={navbar.active}>News</NavLink>
        </li>
        <li className={navbar.nav__item}>
          <NavLink to='/music' className={navbar.nav__link} activeClassName={navbar.active}>Music</NavLink>
        </li>
        <li className={navbar.nav__item}>
          <NavLink to='/settings' className={navbar.nav__link} activeClassName={navbar.active}>Settings</NavLink>
        </li>
      </ul>
      <Friends navBarData={props.navBarData}/>
    </nav>
  )
}

export default NavBar;
