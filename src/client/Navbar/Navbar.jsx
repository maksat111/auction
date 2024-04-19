import React, { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbarstyle.scss";
import { RiAuctionFill } from "react-icons/ri";
import { UserContext } from "../../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const RenderMenu = () => {
    console.log(`state is ${state}`);
    if (state) {
      return (
        <>
          {/* USER LOGGED IN  */}

          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link active"
              aria-current="page"
              to="/home"
            >
              Baş sahypa
            </NavLink>
          </li>

          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              aria-current="page"
              to="/addlot"
            >
              Haryt döretmek
            </NavLink>
          </li>
          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              aria-current="page"
              to="/updatelot"
            >
              Meniň harytlarym
            </NavLink>
          </li>

          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/lot"
            >
              Teklip etmek
            </NavLink>
          </li>

          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/about"
            >
              Programma barada
            </NavLink>
          </li>
          {/* 
        <li className="nav-item px-3 mx-auto licls ">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/service">Services</NavLink>
        </li> */}

          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/service"
            >
              Hyzmatlarymyz
            </NavLink>
          </li>

          {/* <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/contact"
            >
              Habarlaşmak
            </NavLink>
          </li> */}

          {/* <li className="dropdown nav-item px-3 mx-auto licls"><NavLink to="#" className="nav-link"><span id='headrdr'>Connect Us</span> </NavLink>
            <ul className='ddlist'>
            <li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link fdbck" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link fdbck" to="/feedback">Feedback</NavLink>
        </li>
              
            </ul>
          </li>
         */}
          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/bidstatus"
            >
              Tekliplerim
            </NavLink>
          </li>
          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/profile"
            >
              Profilim
            </NavLink>
          </li>
          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/logout"
            >
              Çykmak
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link active"
              aria-current="page"
              to="/home"
            >
              Baş sahypa
            </NavLink>
          </li>
          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link active"
              aria-current="page"
              to="/addlot"
            >
              Haryt döretmek
            </NavLink>
          </li>
          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link active"
              aria-current="page"
              to="/updatelot"
            >
              Meniň harytlarym
            </NavLink>
          </li>

          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/lot"
            >
              Teklip etmek
            </NavLink>
          </li>

          <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/about"
            >
              Programma barada
            </NavLink>
          </li>

          <li className="nav-item px-3 mx-auto licls ">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/service"
            >
              Hyzmatlar
            </NavLink>
          </li>

          {/* <li className="nav-item px-3 mx-auto licls">
            <NavLink
              activeClassName="menu_active"
              excat
              className="nav-link"
              to="/contact"
            >
              Habarlaşmak
            </NavLink>
          </li> */}

          <li className="nav-item px-5 mx-auto ">
            <div className="signupbtn">
              <NavLink to="/signup" className="btn-get-started" id="bt1">
                Ulgama girmek
              </NavLink>
            </div>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <div className="container-fluid nav_bg navbarpg">
        <div className="row">
          <div className="col-13 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-logo" to="/home">
                  <RiAuctionFill />
                  Auksiýa
                </NavLink>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-navbar">
                    <RenderMenu />
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
