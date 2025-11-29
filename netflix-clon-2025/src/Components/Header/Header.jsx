import React from "react";
import "./header.css";
import Netflixlogo from '../../assets/Images/Netflix_Logo_RGB.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div>
      <header class="netflix-header">
        <div class="container">
          <div class="logo">
            <img src={Netflixlogo} alt="Netflix Logo" />
          </div>

          <nav class="nav" id="navMenu">
            <a href="#">Home</a>
            <a href="#">TV Shows</a>
            <a href="#">Movies</a>
            <a href="#">New & Popular</a>
            <a href="#">My List</a>
          </nav>

          <div class="actions">
            <ul>
              <li><SearchIcon/></li>
              <li><NotificationsNoneIcon/></li>
              <li><MoveToInboxIcon/></li>
              <li><ArrowDropDownIcon/></li>
            </ul>
          </div>

          <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
