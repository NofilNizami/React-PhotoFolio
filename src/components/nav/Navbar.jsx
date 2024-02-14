import React, { useRef } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { GiBirdTwitter } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";


const Navbar = () => {

    const menu2 = useRef();

    const showMenu = () => {
        if(menu2.current.style.transform === 'translateX(100%)'){
            menu2.current.style.transform = 'translateX(0%)';
            menu2.current.style.opacity = '1';
            menu2.current.style.width = '200px';


        }else{
        menu2.current.style.transform = 'translateX(100%)';
            menu2.current.style.opacity = '0';
            menu2.current.style.width = '0px';

        }
    }

  return (
    <>
      <div className="d-flex p-3 main-nav justify-content-between">
        <div className="logo">
          <div className="d-flex align-items-center gap-2">
            <IoCameraOutline className="m-0 p-0" color="#32CF93" size={40} />
            <h3 className="m-0 p-0">PhotoFolio</h3>
          </div>
        </div>

        <div className="menu">
          <ul className="text-uppercase d-flex list-unstyled gap-5 m-0 p-0">
            <Link className="h" to={'/'}>
              <li>Home</li>
              </Link>
              <Link className="h" to={'/about'}>
              <li>About</li>
              </Link>

            <li className="m-0 p-0 position-relative gallery">
              gallery <MdKeyboardArrowDown className="m-0 p-0" size={20} />
              <div className="sub-menu p-3">
                <ul className="list-unstyled d-flex flex-column gap-3 text-capitalize">
                  <li>nature</li>
                  <li>people</li>
                  <li>architecture</li>
                  <li>animal</li>
                  <li>sports</li>
                  <li>travel</li>
                  <li className="sub-menu-child">
                  
                    <div className="d-flex position-relative align-items-center justify-content-between">
                      Sub Menu
                      <MdKeyboardArrowDown size={20} />
                    </div>
                    <div className="sub-another p-3">
                      <ul className="list-unstyled d-flex flex-column gap-3 text-capitalize">
                        <li>Sub Menu 1</li>
                        <li>Sub Menu 2</li>
                        <li>Sub Menu 3</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <Link className="h" to={'/services'}>
              <li>Services</li>
              </Link>
              <Link className="h" to={'/contact'}>
              <li>Contact</li>
              </Link>
          </ul>
        </div>

        <div className="social-icons">
          <div className="icons d-flex text-white p-0 gap-3">
            <GiBirdTwitter className="icon" size={20} />
            <FaFacebook className="icon" size={20} />
            <FaInstagram className="icon" size={20} />
            <FaLinkedin className="icon" size={20} />
          </div>
        </div>

        <div className="logomain">
          <GiHamburgerMenu onClick={showMenu} className="logo" size={20} />

          <div ref={menu2} className="menu menu2">
            <ul className="text-uppercase d-flex flex-column list-unstyled m-0 p-0">
              <Link className="h" to={'/'}>
              <li>Home</li>
              </Link>
              <Link className="h" to={'/about'}>
              <li>About</li>
              </Link>

              <li className="m-0 p-0 position-relative gallery">
                gallery <MdKeyboardArrowDown className="m-0 p-0" size={20} />
                <div className="sub-menu p-3">
                  <ul className="list-unstyled d-flex flex-column gap-3 text-capitalize">
                    <li>nature</li>
                    <li>people</li>
                    <li>architecture</li>
                    <li>animal</li>
                    <li>sports</li>
                    <li>travel</li>
                    <li className="sub-menu-child">
                      {" "}
                      <div className="d-flex position-relative align-items-center justify-content-between">
                        Sub Menu
                        <MdKeyboardArrowDown size={20} />
                      </div>
                      <div className="sub-another mb-0 p-3">
                        <ul className="list-unstyled d-flex flex-column gap-3 text-capitalize">
                          <li>Sub Menu 1</li>
                          <li>Sub Menu 2</li>
                          <li>Sub Menu 3</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <Link className="h" to={'/services'}>
              <li>Service</li>
              </Link>
              <Link className="h" to={'/contact'}>
              <li>Contact</li>
              </Link>
            </ul>

            <div className="social-icon2 mt-4 text-center">
          <div className="icons justify-content-center d-flex text-white m-0 p-0 gap-3">
            <GiBirdTwitter className="icon" size={20} />
            <FaFacebook className="icon" size={20} />
            <FaInstagram className="icon" size={20} />
            <FaLinkedin className="icon" size={20} />
          </div>
        </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
