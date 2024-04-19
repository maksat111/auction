import React, { useEffect, useState } from "react";
import "./footer.scss";
import { NavLink, useHistory } from "react-router-dom";

import { AiOutlineRight, AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { FiTwitter, FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
// import {BsFacebook} from 'react-icons/bs';
// import {FaInstagramSquare} from 'react-icons/fa';
// import {CgMail} from 'react-icons/cg';

import "font-awesome/css/font-awesome.min.css";
import { axiosInstance } from "../../config/axios";

const Footer = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showButton, setShowButton] = useState(true);
  const history = useHistory();
  const userContact = async () => {
    try {
      const res = await axiosInstance.get("/getdata");
      const data = res.data;
      // console.log(data);
      setUserData({ ...userData, name: data.name, email: data.email });
      // console.log(`data send to backend`);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  /*  USEEFFECT HOOK -> RUN ONLY ONE TIME WHEN FUNCTION IS CALLED -> ARRAY DENOTES -> NO OF TYMS USEEFFECT CALLLS -> callProfilePage is async function -> so we can not use it inside useEffect */

  useEffect(() => {
    userContact();
  }, []);

  const newsLetterSubmitHandler = () => {
    console.log("Handler called");
    history.push("/");
    setShowButton(false);
  };

  return (
    <>
      <div className="footercls">
        <footer id="footer">
          {showButton && (
            <div className="footer-newsletter">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <h4>Habarlarymyza goşulyň</h4>
                    <p>
                      Ýörite täze auksionlar wakalar we başgalar barada ilkinji
                      bolup biliň
                    </p>
                    <form onSubmit={newsLetterSubmitHandler}>
                      <input type="email" name="email" value={userData.email} />
                      <input type="submit" value="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Auksiýa</h3>
                  <p>
                    Türkmenistanyň Oguz han adyndaky inžener-tehnologiýalar
                    uniwersiteti <br />
                    <strong>Phone:</strong>+993 6******
                    <br />
                    <strong>Email:</strong> nurahmedowAly@gmail.com
                    <br />
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Peýdaly linkler</h4>
                  <ul>
                    {/* <li><NavLink to="/addlot" excat className="nav-link">Add Lot</NavLink></li> */}
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/home" excat className="nav-link">
                        Biz barada
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/service" excat className="nav-link">
                        Hyzmatlarymyz
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/contact" excat className="nav-link">
                        Habarlaşmak
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Bziň hyzmatlarymyz</h4>
                  <ul>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/signin" excat className="nav-link">
                        Ulmaga girmek
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/signin" excat className="nav-link">
                        Ulanyjy döretmek
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/lot" excat className="nav-link">
                        Aktiw auksiýalar
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <p>Onlaýn auksion programma goşundysy</p>
                  <div className="social-links mt-3">
                    {/* <NavLink to="https://twitter.com/RiyaPar18563538?t=XzT0mte2elxP7XWMUQSD7w&s=08" excat className="nav-link twitter"><FiTwitter/></NavLink>
        <NavLink to="/contact" excat className="nav-link twitter"><AiFillLinkedin/></NavLink>
        <NavLink to="/contact" excat className="nav-link twitter"><FiInstagram/></NavLink>
        <NavLink to="/contact" excat className="nav-link twitter"><FiMail/></NavLink>
 */}

                    <a href="#" className="nav-link twitter">
                      <FiTwitter />
                    </a>
                    <a href="#" className="nav-link twitter">
                      <AiFillLinkedin />
                    </a>
                    <a href="#" className="nav-link twitter">
                      <FiInstagram />
                    </a>
                    <a href="#" className="nav-link twitter">
                      <FiMail />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-4">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Onlaýn Auksiýa</span>
              </strong>
              . Ähli hukuklary goralan
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
