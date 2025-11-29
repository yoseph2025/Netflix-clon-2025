import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <footer class="netflix-footer">
        <div class="footer-container">
          <p class="top-text">Questions? Contact us.</p>
          <ul>
            <li><FacebookIcon/></li>
            <li><InstagramIcon/></li>
            <li><YouTubeIcon/></li>
          </ul>
          <div class="footer-links">
            <div class="col">
              <a href="#">FAQ</a>
              <a href="#">Investor Relations</a>
              <a href="#">Privacy</a>
              <a href="#">Speed Test</a>
            </div>

            <div class="col">
              <a href="#">Help Center</a>
              <a href="#">Jobs</a>
              <a href="#">Cookie Preferences</a>
              <a href="#">Legal Notices</a>
            </div>

            <div class="col">
              <a href="#">Account</a>
              <a href="#">Ways to Watch</a>
              <a href="#">Corporate Information</a>
              <a href="#">Only on Netflix</a>
            </div>

            <div class="col">
              <a href="#">Media Center</a>
              <a href="#">Terms of Use</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
