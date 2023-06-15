import React from "react";
import styles from "./Navbar.module.css";

//import { ModalBox } from "./Modal";
import { Link, useNavigate } from "react-router-dom";
//import { showLoginPage } from "../../Redux/Otp/action";
import { useDispatch } from "react-redux";

let data = [
  { name: "Medicine", link: "/healthcare" },
  { name: "Lab Tests", link: "/healthcare" },
  { name: "HealthCare", link: "/healthcare" },
  { name: "Health Blogs", link: "/healthcare" },
  { name: "PLUS", link: "/healthcare" },
  { name: "Offers", link: "/offer" },
  { name: "Surgeries", link: "/healthcare" },
  { name: "Value Stores", link: "/healthcare" },
];
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.main_navbar}>
        <div className={styles.navbar}>
          <div className={styles.navbar_part}>
            <div className={styles.navbar_part1}>
              <div className={styles.logo}>
                <img
                  onClick={() => navigate("/")}
                  src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=360x0"
                  alt=""
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles.logo_mumbai}>
                <div>Delivery to</div>
                <div>
                  <p>
                    400001 Mumbai{" "}
                    <span>
                      <select className={styles.select}></select>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.navbar_part2}>
              <div className={`${styles.icons} ${styles.logo_part_background}`}>
                <div className={styles.logo_part}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="c-cZuCZG c-cZuCZG-gtZKQU-size-large c-cZuCZG-dmsdwv-rotate-up c-cZuCZG-icDNilq-css"
                  >
                    <path
                      d="M17.5 2H7.5C6.39543 2 5.5 2.89543 5.5 4V20C5.5 21.1046 6.39543 22 7.5 22H17.5C18.6046 22 19.5 21.1046 19.5 20V4C19.5 2.89543 18.6046 2 17.5 2Z"
                      stroke="#30363C"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                    ></path>
                    <path
                      d="M12.5 18H12.51"
                      stroke="#30363C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                    ></path>
                  </svg>
                </div>
                <div className={styles.text_part}>
                  <a href="https://apps.apple.com/IN/app/id982432643?mt=8">
                    Download Now
                  </a>
                </div>
              </div>
              <div>
                <div className={styles.logo_part}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="c-cZuCZG c-cZuCZG-gtZKQU-size-large c-cZuCZG-dmsdwv-rotate-up c-cZuCZG-ieMTBas-css"
                  >
                    <path
                      d="M12 10.04C13.6679 10.04 15.02 8.68789 15.02 7.01999C15.02 5.35209 13.6679 3.99999 12 3.99999C10.3321 3.99999 8.98003 5.35209 8.98003 7.01999C8.98003 8.68789 10.3321 10.04 12 10.04Z"
                      stroke="#30363C"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                    ></path>
                    <path
                      d="M6.12002 20H17.88C18.1558 20.0026 18.4294 19.9509 18.6852 19.8478C18.941 19.7447 19.174 19.5922 19.3708 19.3991C19.5677 19.2059 19.7246 18.9759 19.8325 18.7221C19.9405 18.4683 19.9974 18.1958 20 17.92V16.57C20 15.76 19 15 17.67 14.37C15.8894 13.4975 13.9329 13.044 11.95 13.044C9.96718 13.044 8.01061 13.4975 6.23002 14.37C4.97002 15 4.00002 15.74 4.00002 16.54V17.89C3.99869 18.1683 4.05268 18.4441 4.15887 18.7013C4.26506 18.9586 4.42133 19.1922 4.61859 19.3885C4.81584 19.5848 5.05016 19.74 5.30792 19.845C5.56567 19.95 5.84172 20.0026 6.12002 20Z"
                      stroke="#30363C"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                    ></path>
                  </svg>
                </div>
                <div
                  className={styles.text_part}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <div
                    onClick={() => {
                     // showLoginPage(dispatch);
                    }}
                  >
                    Hello,Login
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.logo_part}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="c-cZuCZG c-cZuCZG-gtZKQU-size-large c-cZuCZG-dmsdwv-rotate-up c-cZuCZG-hECRKn-type-rounded c-cZuCZG-ibKzAFS-css"
                  >
                    <path
                      d="M10.6737 5.09702C10.968 3.63433 13.032 3.63433 13.3263 5.09702C13.5281 6.09956 14.7041 6.53299 15.495 5.89632C16.6489 4.96744 18.23 6.31092 17.527 7.62301C17.0452 8.52232 17.6709 9.61981 18.6809 9.64692C20.1545 9.68647 20.5129 11.7448 19.1416 12.2924C18.2016 12.6676 17.9843 13.9157 18.7408 14.5939C19.8446 15.5833 18.8126 17.3934 17.4145 16.9202C16.4562 16.5959 15.4976 17.4105 15.6466 18.4224C15.864 19.8988 13.9245 20.6137 13.1539 19.3412C12.6257 18.469 11.3743 18.469 10.8461 19.3412C10.0755 20.6137 8.13597 19.8988 8.35339 18.4224C8.50241 17.4105 7.54375 16.5959 6.5855 16.9202C5.18743 17.3934 4.15544 15.5833 5.25917 14.5939C6.01567 13.9157 5.79835 12.6676 4.85842 12.2924C3.48706 11.7448 3.84547 9.68647 5.31905 9.64692C6.32905 9.61981 6.95478 8.52232 6.47296 7.62301C5.76999 6.31092 7.35109 4.96744 8.50503 5.89632C9.29594 6.53299 10.4719 6.09955 10.6737 5.09702Z"
                      stroke="#30363C"
                      stroke-width="1.4"
                      fill="none"
                    ></path>
                    <path
                      d="M9.80078 9.69922V9.69922"
                      stroke="#30363C"
                      stroke-width="2"
                      stroke-linecap="round"
                      fill="none"
                    ></path>
                    <path
                      d="M14.4014 14.3008V14.3008"
                      stroke="#30363C"
                      stroke-width="2"
                      stroke-linecap="round"
                      fill="none"
                    ></path>
                    <path
                      d="M9.30581 13.8042C9.03244 14.0776 9.03244 14.5208 9.30581 14.7942C9.57917 15.0676 10.0224 15.0676 10.2958 14.7942L9.30581 13.8042ZM14.8958 10.1942C15.1691 9.92083 15.1691 9.47761 14.8958 9.20424C14.6224 8.93088 14.1792 8.93088 13.9058 9.20424L14.8958 10.1942ZM10.2958 14.7942L14.8958 10.1942L13.9058 9.20424L9.30581 13.8042L10.2958 14.7942Z"
                      fill="none"
                    ></path>
                  </svg>
                </div>
                <Link
                  to="/offer"
                  className={styles.text_part}
                  style={{ textDecoration: "none" }}
                >
                  Offers
                </Link>
              </div>
              <div>
                <div className={styles.logo_part}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="c-cZuCZG c-cZuCZG-gtZKQU-size-large c-cZuCZG-dmsdwv-rotate-up c-cZuCZG-igUKFFH-css"
                  >
                    <path d="M3.4082 2.9739C3.0216 2.9739 2.7082 3.2873 2.7082 3.6739C2.7082 4.0605 3.0216 4.3739 3.4082 4.3739V2.9739ZM5.17586 3.6739V4.37393L5.18193 4.37388L5.17586 3.6739ZM6.18789 4.0462L5.72919 4.57496L6.18789 4.0462ZM6.69914 4.9939L7.38087 4.83502C7.37814 4.82333 7.37512 4.8117 7.37179 4.80016L6.69914 4.9939ZM9.07095 15.1708L8.38922 15.3297C8.46307 15.6466 8.74556 15.8708 9.07095 15.8708V15.1708ZM18.1906 15.1708V15.8708C18.1989 15.8708 18.2072 15.8706 18.2154 15.8703L18.1906 15.1708ZM19.1927 14.3608L19.8718 14.5308C19.874 14.5221 19.876 14.5133 19.8778 14.5045L19.1927 14.3608ZM20.5295 7.98836L19.8466 7.8345L19.8445 7.84464L20.5295 7.98836ZM19.5274 6.70836L19.5436 6.00855C19.5382 6.00842 19.5328 6.00836 19.5274 6.00836V6.70836ZM7.20995 6.00836C6.82335 6.00836 6.50995 6.32176 6.50995 6.70836C6.50995 7.09496 6.82335 7.40836 7.20995 7.40836V6.00836ZM3.4082 4.3739H5.17586V2.9739H3.4082V4.3739ZM5.18193 4.37388C5.39613 4.37202 5.54964 4.41921 5.72919 4.57496L6.64659 3.51743C6.18993 3.12128 5.69871 2.96934 5.16979 2.97393L5.18193 4.37388ZM5.72919 4.57496C5.72916 4.57493 5.72976 4.57545 5.73096 4.57661C5.73216 4.57777 5.73387 4.57949 5.73608 4.58183C5.74055 4.58659 5.74652 4.59337 5.75382 4.60252C5.76872 4.62121 5.78641 4.64627 5.80613 4.67822C5.84626 4.74322 5.88535 4.82128 5.92077 4.90268C5.95564 4.98282 5.98316 5.05742 6.00186 5.11188C6.0111 5.13878 6.01789 5.15993 6.02209 5.17335C6.02418 5.18004 6.02561 5.18476 6.02635 5.18723C6.02672 5.18847 6.02692 5.18915 6.02694 5.18923C6.02695 5.18927 6.02692 5.18916 6.02685 5.18889C6.02681 5.18876 6.02676 5.18859 6.0267 5.18839C6.02667 5.18828 6.02663 5.18817 6.0266 5.18804C6.02658 5.18798 6.02655 5.18788 6.02654 5.18785C6.02651 5.18775 6.02648 5.18764 6.69914 4.9939C7.37179 4.80016 7.37176 4.80005 7.37173 4.79994C7.37172 4.7999 7.37168 4.79978 7.37166 4.7997C7.37161 4.79954 7.37156 4.79936 7.37151 4.79918C7.3714 4.7988 7.37128 4.79839 7.37115 4.79794C7.37088 4.79702 7.37057 4.79595 7.3702 4.79471C7.36948 4.79223 7.36855 4.78909 7.36742 4.78534C7.36518 4.77784 7.36213 4.76784 7.35831 4.75562C7.35068 4.73121 7.33987 4.69769 7.32599 4.65727C7.29847 4.57709 7.25774 4.46643 7.2045 4.34409C7.11077 4.12867 6.93203 3.76504 6.64659 3.51743L5.72919 4.57496ZM6.01741 5.15279L8.38922 15.3297L9.75268 15.0119L7.38087 4.83502L6.01741 5.15279ZM9.07095 15.8708H18.1906V14.4708H9.07095V15.8708ZM18.2154 15.8703C18.5993 15.8567 18.9685 15.7188 19.2673 15.4773L18.3873 14.3885C18.3246 14.4392 18.2468 14.4683 18.1657 14.4712L18.2154 15.8703ZM19.2673 15.4773C19.5662 15.2358 19.7784 14.9036 19.8718 14.5308L18.5137 14.1908C18.4943 14.2684 18.45 14.3378 18.3873 14.3885L19.2673 15.4773ZM19.8778 14.5045L21.2146 8.13208L19.8445 7.84464L18.5076 14.2171L19.8778 14.5045ZM21.2124 8.1422C21.2694 7.88931 21.2694 7.62695 21.2125 7.37407L19.8467 7.68165C19.858 7.73199 19.858 7.78419 19.8467 7.83452L21.2124 8.1422ZM21.2125 7.37407C21.1555 7.12119 21.043 6.88418 20.8833 6.68012L19.7809 7.54318C19.8129 7.58402 19.8353 7.63132 19.8467 7.68165L21.2125 7.37407ZM20.8833 6.68012C20.7235 6.47607 20.5205 6.31005 20.2888 6.19395L19.6615 7.44557C19.7082 7.46896 19.749 7.50232 19.7809 7.54318L20.8833 6.68012ZM20.2888 6.19395C20.0571 6.07786 19.8026 6.01456 19.5436 6.00855L19.5111 7.40817C19.5635 7.40939 19.6149 7.42219 19.6615 7.44557L20.2888 6.19395ZM19.5274 6.00836H7.20995V7.40836H19.5274V6.00836Z"></path>
                    <path
                      d="M10.7781 20.5007C11.601 20.5007 12.2681 19.8369 12.2681 19.0179C12.2681 18.199 11.601 17.5352 10.7781 17.5352C9.95518 17.5352 9.28809 18.199 9.28809 19.0179C9.28809 19.8369 9.95518 20.5007 10.7781 20.5007Z"
                      stroke="#30363C"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                    ></path>
                    <path
                      d="M17.3982 20.5007C18.2211 20.5007 18.8882 19.8369 18.8882 19.0179C18.8882 18.199 18.2211 17.5352 17.3982 17.5352C16.5753 17.5352 15.9082 18.199 15.9082 19.0179C15.9082 19.8369 16.5753 20.5007 17.3982 20.5007Z"
                      stroke="#30363C"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                    ></path>
                  </svg>
                </div>
                <Link
                  to="/cart"
                  className={styles.text_part}
                  style={{ textDecoration: "none" }}
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.small_nav}>
          <div className={styles.small_navv}>
            {data.map((el) => (
              <Link to={el.link} className={styles.link}>
                {el.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.ModalBox}>
        ModalBox 
      </div>
    </div>
  );
};

export default Navbar;