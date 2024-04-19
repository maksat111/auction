import React from "react";
import Img from "../images/values-1.png";
import Img2 from "../images/values-3.png";
import Img3 from "../images/features.png";
import About3 from "../images/about3.jpg";

import About1 from "../images/about1.jpg";

import About4 from "../images/about4.png";
import Team from "../images/team.png";
import Loader from "../Loader/Loader";
import { FcNext } from "react-icons/fc";
import MetaData from "../MetaData/MetaData";

import "./aboutstyle.scss";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <MetaData title="ABOUT US"></MetaData>
      {/* <h1>Welcome About Page</h1> */}

      <div className="container-fluid nav_bg abtcls">
        <div className="row">
          <div className="col-12 mx-auto">
            <section id="values" className="values">
              <div className="container" data-aos="fade-up">
                {/* <header className="section-header">
                  <h2>About Us</h2>
                  <p>Nonprofit Auction Software</p>
                </header> */}

                <div className="section-title" data-aos="fade-up">
                  <h2>Biz barada</h2>
                </div>

                <div className="row abtclssection">
                  <div
                    className="col-lg-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="box">
                      <img src={About4} className="img-fluid" alt="" />
                      <h3>Wezipesi</h3>
                      <p>
                        Fiziki tertipde auksion, bir hili kyn. Adamlar önümi
                        dünýä derejesinde satyp bilmeýärler. Syýahat etmeli
                        auksion ýerine. Bu programma arkaly gowy adam Internet
                        aňsatlyk bilen söwda arkaly has ýokary önüm satyp biler.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 mt-4 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="box">
                      <img src={About3} className="img-fluid" alt="" />
                      <h3>Ulanyş aňsatlygy</h3>
                      <p>
                        Netije programma arkaly aňsatlyk bilen döredilip bilner
                        diňe, üçünji tarap päsgelçiliksiz. Hemme satyjylar we
                        gatnaşyjylar ulgamymyz tarapyndan barlanýar.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 mt-4 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="box">
                      <img src={About1} className="img-fluid" alt="" />
                      <h3>Döwrebaplygy</h3>
                      <p>
                        Programmamyz, Filtr funksiýasyny üpjün edýär Müşderi
                        ýa-da gatnaşyjy ony öz islegleri boýunça süzüp biler
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* WHY-US */}

            <section id="why-us" className="why-us section-bg">
              <div className="container-fluid" data-aos="fade-up">
                <div className="section-title" data-aos="fade-up">
                  <h2>FAQ'S</h2>
                </div>

                <div className="row">
                  <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                    <div className="content">
                      <h3>
                        <strong>
                          {" "}
                          Biz umumy soraglaryň sanawyny döretdik agzalardan
                          aldylar
                        </strong>
                      </h3>
                      <p>
                        Bu sahypada jogabyňyzy tapmasaňyz, haýyş edýärin Biziň
                        bilen habarlaşyň we soraglaryňyzy çözeris.
                      </p>
                    </div>

                    <div className="accordion-list">
                      <ul>
                        <li>
                          <a
                            data-bs-toggle="collapse"
                            className="collapse"
                            data-bs-target="#accordion-list-1"
                          >
                            <span>01</span>
                            Auksion we teklip maglumatlary Iň oňat teklip{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="accordion-list-1"
                            className="collapse show"
                            data-bs-parent=".accordion-list"
                          >
                            <p>
                              Biz üpjün etmek pikiri bilen gelýär has satmak
                              isleýän satyjylar üçin platforma söwda arkaly önüm
                              we iň gowusyny almak isleýär bahasy. Toparymyz
                              ähli ulanyjylary barlaýar. Biz bu platformany 100%
                              ygtybarly etmäge synanyşýar we howpsuz.
                            </p>
                          </div>
                        </li>

                        <li>
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-list-2"
                            className="collapsed"
                          >
                            <span>02</span> Kim emlägi auksion edip biler? Iň
                            oňat teklip{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="accordion-list-2"
                            className="collapse"
                            data-bs-parent=".accordion-list"
                          >
                            <p>
                              Islendik şahsyýet, edaralar, banklar we hökümet
                              Bölümler emläkleri auksion edip bilerler Iň oňat
                              teklip. Şahsy adamlar ähli maglumatlary bermeli
                              görnüşinde, RBS talap edip biler talap edilýär.
                              Banklar we edaralar iň oňat teklip edip bilerler
                              degişli Resullara we olaryň düzgünlerine
                              laýyklykda häsiýetler. Üýtgeşik ulanyjy
                              şahsyýetnamasy we paroly gowşurylar Bankyň /
                              edaranyň ygtyýarly işgäri diňe howpsuzlygy üpjün
                              etmek üçin. SLA ýerine ýetiriler RBS we edaralaryň
                              arasynda.
                            </p>
                          </div>
                        </li>

                        <li>
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-list-3"
                            className="collapsed"
                          >
                            <span>03</span>
                            Aragatnaşyk maglumatyny nädip almaly?
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="accordion-list-3"
                            className="collapse"
                            data-bs-parent=".accordion-list"
                          >
                            <p>
                              Jikme-jiklikleri bilen satyjyny hasaba almak bilen
                              belli bir emläk üçin shema. Biz onuň
                              maglumatlaryny aldyk barlanylandan soň satyjynyň
                              maglumatlary bolar Auksion gutaranda, auksiony
                              bilen elýeterlidir Satyjy Bidder maglumat
                              mahabatyny we teklipini aldy Taryh we ulanyjy
                              satyjy bilen habarlaşyp biler.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="col-lg-5 align-items-stretch order-1 order-lg-2 img bgimgctrl"
                    style={{ backgroundImage: `url(${Img2})` }}
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    &nbsp;
                  </div>
                </div>
                {/* <img src={Img2} className="img-fluid" alt="" /> */}
              </div>
            </section>

            {/* END WHY US */}

            {/*  About Writtern */}
            <section id="about" className="about">
              <div className="container sectionfivecls" data-aos="fade-up">
                <div className="section-title">
                  <h2>Gymmatlyklarymyz</h2>
                </div>

                <div className="row content ourvaluescls">
                  <div className="col-lg-6">
                    <p>
                      <FcNext />
                      Adamlar her gün eAuction-da kärhana gurýarlar. Peýdasyz
                      guramalar möhüm serişdeleri ýygnaýarlar. Telekeçiler täze
                      gazanýarlar başarnyklary we öwrüp boljak täze bazarlara
                      girmek arzuwlar we pikirler işde üstünlik gazanmak.
                    </p>
                    <p>
                      <FcNext /> eAuction ylham beriji telekeçiligi döredýär
                      alyjylarymyz, satyjylarymyz we işläp düzüjilerimiz üçin
                      tejribe. Täzelikleri kabul etmek ösüşimiziň esasyny düzdi
                      we soňky 25 ýylda müşderiniň wepalylygy.
                    </p>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <NavLink to="/" className="btn-learn-more">
                      Köpräk okamak
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
            {/*  End About Section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
