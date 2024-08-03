import React, { useEffect, useRef } from 'react';
import bellIcon from '../../assets/bell_icon.svg';
import caretIcon from '../../assets/caret_icon.svg';
import logo from '../../assets/logo.png';
import profileImg from '../../assets/profile_img.png';
import searchIcon from '../../assets/search_icon.svg';
import './NavBar.css';

const DropdownMenu = () => (
  <div className="dropdown">
    <p>Sign Out</p>
  </div>
);

const NavBar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="Search Icon" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="Bell Icon" className="icons" />
        <div className="navbar-profile">
          <img src={profileImg} alt="Profile" className="profile" />
          <img src={caretIcon} alt="Caret Icon" />
          <DropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;