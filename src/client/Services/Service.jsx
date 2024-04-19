import React from "react";
import "./servicestyle.scss";
import MetaData from "../MetaData/MetaData";

import Img from "../images/values-1.png";
import Team from "../images/team.png";

import { NavLink } from "react-router-dom";
import { MdSell, MdLocalShipping } from "react-icons/md";
import { AiFillUpCircle } from "react-icons/ai";

const Service = () => {
  return (
    <>
      <MetaData title="SERVICES"></MetaData>
      {/* Component 1 */}

      {/* Conponent 2 */}

      {/* My Service Section */}

      <div className="row mt-5">
        <div className="col-12 mx-auto">
          <div className="row">
            <section id="services" className="services">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2>Hyzmatlar</h2>
                  <p>
                    Ulgamyň maksady onlaýn auksion etmek degişli howpsuzlyk
                    ulgamy
                  </p>
                </div>

                <div className="row">
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-0 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="icon">
                        {" "}
                        <div className="fabrsicn">
                          <MdSell />
                        </div>
                      </div>
                      <h4 className="title">
                        <NavLink to="">Elýeterlilik</NavLink>
                      </h4>
                      <p className="description">
                        Web-programma 24 * 7 elýeterli bolup biler. Ulanyjy
                        girip biler we islän wagtyňyz web sahypasynda hasaba
                        alyň. Önüm diňe satyjy tarapyndan kesgitlenen wagt üçin
                        elýeterli bolar
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="icon">
                        <div className="fabrsicn">
                          <MdLocalShipping />
                        </div>
                      </div>
                      <h4 className="title">
                        <NavLink to="">Çeýeligi</NavLink>
                      </h4>
                      <p className="description">
                        Satyjy önüm maglumatlaryny täzeläp / goşup / pozup biler
                        dessine. Satyjy islendik täzelenme girizensoň, maglumat
                        bazasy bolar täzelenmeli
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="icon">
                        <div className="fabrsicn">
                          <AiFillUpCircle />
                        </div>
                      </div>
                      <h4 className="title">
                        <NavLink to="">Ygtybarlylyk</NavLink>
                      </h4>
                      <p className="description">
                        Ulanyjy üçin amatly web sahypasy. Kömek / aragatnaşyk
                        bölümi arkaly zerur bolsa ulanyjy islendik kömegi alyp
                        biler.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="icon">
                        <div className="fabrsicn">
                          <MdSell />
                        </div>
                      </div>
                      <h4 className="title">
                        <NavLink to="">Howpsuzlyk</NavLink>
                      </h4>
                      <p className="description">
                        Paroly şifrlemek şol ýerde bolar. Jikme-jiklikler önüm
                        dogry we ygtybarly. Önümiň subutnamalary şol ýerde
                        bolmaly. Satyjynyň ähli hakyky şahsyýetleri we gatnaşyjy
                        şol ýerde bolar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
