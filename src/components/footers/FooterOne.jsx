import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/img/logo.png";

export const FooterOne = () => {
  return (
    <footer className="td_footer td_style_1">
      <div className="container">
        <div className="td_footer_row">
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <div className="td_footer_text_widget td_fs_18">
                <img src={footerLogo} alt="Logo" />
                <p>"Empowering Minds, Shaping Futures."</p>
              </div>
              <ul className="td_footer_address_widget td_medium td_mp_0">
                <li>
                  <i className="fa-solid fa-phone-volume"></i>
                  <a href="#"> 01744-225803 , 225803</a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Shri Krishna Ayush
                  University,Umri Road, Sector 8,Kurukshetra, Haryana – 136118
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Navigate
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>

                <li>
                  <Link to="/">Help Center</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Courses
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/">BAMS</Link>
                </li>
                <li>
                  <Link to="/">Diploma in Panchakarma</Link>
                </li>
                <li>
                  <Link to="/">
                    Certificate in Herbal Medicine
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Master in Ayurvedic Pharmacology
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Ayurvedic Nutrition and Dietetics
                  </Link>
                </li>
                <li>
                  <Link to="/">PhD in Ayurveda</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Subscribe Now
              </h2>
              <div className="td_newsletter td_style_1">
                <p className="td_mb_20 td_opacity_7">
                  subscribe to our newsletter to get the latest news and updates
                </p>
                <form action="#" className="td_newsletter_form">
                  <input
                    type="email"
                    className="td_newsletter_input"
                    placeholder="Email address"
                  />
                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_30 td_medium"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Subscribe</span>
                    </span>
                  </button>
                </form>
              </div>
              <div className="td_footer_social_btns td_fs_20">
                <a href="#" className="td_center">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="td_center">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" className="td_center">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="td_center">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_footer_bottom td_fs_18">
        <div className="container">
          <div className="td_footer_bottom_in">
            <p className="td_copyright mb-0">
<<<<<<< HEAD
              Copyright ©SHRI KRISHNA AYUSH UNIVERSITY  | All Right Reserved
=======
              Copyright © BigByte Innovations Pvt. Ltd. | All Right Reserved
>>>>>>> 3c76358a3e63fd440789875a12d7594aee589a66
            </p>
            <ul className="td_footer_widget_menu">
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy & Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
