import React from "react";
import { Link } from "react-router-dom";

import heroBg from "../../assets/img/home_1/hero_bg_1.jpg";

export const HeroOne = () => {
  return (
    <>
      <section
        className="td_hero td_style_1 td_heading_bg td_center td_bg_filed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container">
          <div
            className="td_hero_text wow fadeInRight"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <p className="td_hero_subtitle_up td_fs_18 td_white_color td_spacing_1 td_semibold text-uppercase td_mb_10 td_opacity_9">
              Knowledge is Power
            </p>
            <h1 className="td_hero_title td_fs_64 td_white_color td_mb_12">
              <span>Educve</span> - The Best Place to Invest in your Knowledge
            </h1>
            <p className="td_hero_subtitle td_fs_18 td_white_color td_opacity_7 td_mb_30">
              A university is a vibrant institution that serves as a hub for
              higher education and research. It provides a dynamic environment.
            </p>
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_radius_10 td_medium"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>View Our Program</span>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1575 4.34302L3.84375 15.6567"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="td_lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <div className="container">
        <div className="td_hero_btn_group">
          <Link
            to="/courses-grid-view"
            className="td_btn td_style_1 td_radius_10 td_medium td_fs_20 wow fadeInUp"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Apply Now</span>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1575 4.34302L3.84375 15.6567"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
          <Link
            to="/signup"
            className="td_btn td_style_1 td_radius_10 td_medium td_fs_20 wow fadeInUp"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Request Info</span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7945 12.2734H8.95703C8.74129 12.2734 8.56641 12.4484 8.56641 12.6641V14.768C8.56641 14.9837 8.74129 15.1587 8.95703 15.1587H10.7945C11.0102 15.1587 11.1851 14.9837 11.1851 14.768V12.6641C11.1851 12.4483 11.0102 12.2734 10.7945 12.2734ZM10.4038 14.3774H9.34766V13.0547H10.4038V14.3774Z"
                  fill="currentColor"
                />
                <path
                  d="M13.0728 5.01978C12.7536 4.76443 12.3872 4.57568 11.9835 4.45861C10.202 3.94346 8.23896 4.61154 7.50396 6.33584C7.43154 6.5058 7.48806 6.7033 7.63951 6.80916L9.08424 7.81908C9.26111 7.94267 9.50451 7.89955 9.62814 7.72279C9.69381 7.62896 9.76912 7.5208 9.85353 7.39881C9.99142 7.19982 10.1816 7.0499 10.397 6.94576C10.489 6.90123 10.5962 6.87959 10.7247 6.87959C10.9277 6.87959 11.1021 6.93791 11.2577 7.05779C11.3854 7.15627 11.4423 7.28365 11.4423 7.47084C11.4423 7.60982 11.4012 7.72803 11.3129 7.84279C10.9575 8.30463 10.4116 8.55889 9.86623 8.85221C9.58689 9.00271 9.35529 9.17463 9.17787 9.36326C8.99771 9.55474 8.85728 9.76459 8.76064 9.9867C8.66752 10.2002 8.60357 10.4253 8.57072 10.6556C8.54017 10.8694 8.52466 11.0956 8.52466 11.3281C8.52466 11.5438 8.69955 11.7187 8.91529 11.7187H10.7668C10.9825 11.7187 11.1574 11.5438 11.1574 11.3281C11.1574 11.2158 11.1831 11.1262 11.2361 11.054C11.3113 10.9515 11.415 10.8558 11.5446 10.7694C11.971 10.485 12.1675 10.4474 12.6908 10.0988C13.1681 9.79709 13.5367 9.43678 13.7863 9.02787C14.043 8.60728 14.1732 8.0881 14.1732 7.48482C14.1732 6.92166 14.0697 6.42881 13.8654 6.01959C13.6629 5.61494 13.3962 5.27853 13.0728 5.01978ZM13.1195 8.62096C12.9324 8.92744 12.6465 9.2033 12.2698 9.44084C12.2104 9.47803 12.018 9.61357 11.7039 9.77424C11.4899 9.88385 11.2904 10 11.1112 10.1195C10.9053 10.2567 10.7354 10.4158 10.6062 10.592C10.5289 10.6973 10.471 10.8128 10.4325 10.9376H9.32384C9.38525 10.2872 9.62193 9.87127 10.2365 9.54021C10.8783 9.19498 11.4781 8.9092 11.9322 8.3192C12.1255 8.06775 12.2235 7.78236 12.2235 7.47092C12.2235 7.0426 12.0545 6.68584 11.7346 6.43908C11.4411 6.21303 11.1014 6.09842 10.7247 6.09842C10.479 6.09842 10.2543 6.14693 10.0567 6.24256C9.47986 6.52142 9.24478 6.91709 9.21091 6.95451L8.36205 6.36111C8.56916 5.99974 8.85256 5.71349 9.22185 5.49123C9.98404 5.03264 10.9217 4.9649 11.7661 5.20908C12.0706 5.29736 12.3461 5.43892 12.5847 5.62986C12.8193 5.81756 13.0152 6.06631 13.1666 6.36892C13.3161 6.66849 13.392 7.04396 13.392 7.4849C13.392 7.94252 13.3003 8.32474 13.1195 8.62096Z"
                  fill="currentColor"
                />
                <path
                  d="M10.5 1.32812C5.75047 1.32812 1.90625 5.17172 1.90625 9.92188C1.90625 11.5843 2.37914 13.1897 3.27582 14.5779L2.08254 18.1577C1.98266 18.4573 2.26367 18.7482 2.56801 18.6546L6.39953 17.4756C7.65207 18.1565 9.06594 18.5156 10.5 18.5156C15.2495 18.5156 19.0938 14.672 19.0938 9.92184C19.0938 5.17238 15.2502 1.32812 10.5 1.32812ZM10.5 17.7343C9.14422 17.7343 7.80855 17.3815 6.63734 16.7139C6.54387 16.6606 6.4323 16.6481 6.32902 16.6799L3.06375 17.6846L4.07715 14.6444C4.11562 14.529 4.09812 14.4023 4.02984 14.3016C3.15168 13.007 2.6875 11.4925 2.6875 9.92188C2.6875 5.61406 6.19219 2.10938 10.5 2.10938C14.8078 2.10938 18.3125 5.61406 18.3125 9.92188C18.3125 14.2296 14.8078 17.7343 10.5 17.7343Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>
          <Link
            to="#"
            className="td_btn td_style_1 td_radius_10 td_medium td_fs_20 wow fadeInUp"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Chat With Us</span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_34_1694)">
                  <path
                    d="M2.80635 15.5992C2.13805 15.5992 1.48514 15.4286 0.893423 15.0964C0.588974 14.9396 0.471056 14.5473 0.652933 14.2522C1.25723 13.2866 1.47544 12.1062 1.19876 10.9962C0.911987 9.84535 0.497046 8.87611 0.500016 7.65782C0.510313 3.38361 4.06791 -0.0814611 8.33776 0.0014578C12.4619 0.0845253 15.8608 3.55138 15.8609 7.67663C15.8609 13.0643 10.2146 16.8469 5.22991 14.7664C4.54285 15.3057 3.67925 15.5992 2.80635 15.5992ZM1.99429 14.2838C2.93328 14.5754 3.98934 14.3424 4.71344 13.6424C4.89185 13.4699 5.15872 13.4265 5.38258 13.5335C9.65016 15.5739 14.6728 12.3758 14.6727 7.67663C14.6727 4.17008 11.8201 1.2599 8.31385 1.1893C4.70047 1.11752 1.69682 4.04399 1.68811 7.66069C1.68529 8.81785 2.13676 9.74263 2.38349 10.8388C2.64343 11.994 2.50651 13.2155 1.99429 14.2838Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.193 20.0027C17.3201 20.0027 16.4565 19.7092 15.7695 19.17C13.1186 20.2763 9.96528 19.7725 7.79172 17.8954C7.5434 17.6809 7.51598 17.3059 7.73038 17.0575C7.94483 16.8092 8.31992 16.7817 8.56823 16.9962C10.496 18.661 13.3193 19.0355 15.6168 17.9371C15.8406 17.83 16.1074 17.8735 16.2859 18.046C17.01 18.746 18.0661 18.9791 19.0051 18.6873C18.4008 17.427 18.3171 15.9831 18.7854 14.6464C18.7896 14.6344 18.7942 14.6225 18.7991 14.6108C19.1411 13.8046 19.3134 12.9478 19.3113 12.0642C19.3075 10.5065 18.7893 9.06544 17.8126 7.89691C17.6022 7.64513 17.6358 7.27053 17.8875 7.06014C18.1392 6.8497 18.5139 6.88326 18.7242 7.13499C19.8646 8.49937 20.495 10.2489 20.4994 12.0614C20.5019 13.0995 20.3005 14.107 19.9008 15.0563C19.4809 16.2718 19.674 17.5732 20.3464 18.6557C20.5284 18.9508 20.4104 19.3431 20.1058 19.5C19.5142 19.8321 18.8612 20.0027 18.193 20.0027Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.18217 8.64459C8.7013 8.64459 9.12215 8.22397 9.12215 7.70511C9.12215 7.18625 8.7013 6.76562 8.18217 6.76562C7.66303 6.76562 7.24219 7.18625 7.24219 7.70511C7.24219 8.22397 7.66303 8.64459 8.18217 8.64459Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4.71732 8.64459C5.23646 8.64459 5.6573 8.22397 5.6573 7.70511C5.6573 7.18625 5.23646 6.76562 4.71732 6.76562C4.19819 6.76562 3.77734 7.18625 3.77734 7.70511C3.77734 8.22397 4.19819 8.64459 4.71732 8.64459Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.6431 8.64459C12.1622 8.64459 12.5831 8.22397 12.5831 7.70511C12.5831 7.18625 12.1622 6.76562 11.6431 6.76562C11.124 6.76562 10.7031 7.18625 10.7031 7.70511C10.7031 8.22397 11.124 8.64459 11.6431 8.64459Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_1694">
                    <rect
                      width="20"
                      height="20"
                      fill="currentColor"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
