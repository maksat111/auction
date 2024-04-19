import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { FaBeer } from "react-icons/fa";
import { MdSecurity, MdEventAvailable } from "react-icons/md";

import Img from "../images/values-1.png";
import Img4 from "../images/arrow-310633_960_720.png";
import BidImg from "../images/values-3.png";
import Auction1 from "../images/auction1.png";

import "./homestyle.scss";
import MetaData from "../MetaData/MetaData";
import Product from "./Product";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";

// const product = {
//   name: "Blue Tshirt",
//   images: [{url : "https://image.shutterstock.com/image-vector/compatibility-testing-concept-icon-checking-600w-1498931552.jpg"}],
//   price: "rs.5000",
//   _id:"nihal",

// };

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  // console.log(productCount);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="BEST BID"></MetaData>
          <section id="header" className="d-flex align-items-center homepg">
            <div className="container-fluid nav_bg">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div
                      className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <h1>
                        <strong className="brand-name">
                          Onlaýn auksion
                          <br />
                        </strong>
                        bilen harytlary teklip ediň we satyň
                      </h1>

                      <h2 className="my-3">
                        Onlaýn auksion, auksion ulanyjylarynyň ýa-da
                        gatnaşyjylarynyň internet arkaly önümleri ýa-da
                        hyzmatlary satýan ýa-da teklip edýän hyzmatydyr.
                      </h2>
                      <div className="mt-3">
                        <NavLink to="/signup" className="btn-get-started">
                          Başlamak
                        </NavLink>
                      </div>
                    </div>

                    <div
                      className="col-lg-6 order-1 order-lg-2 header-img"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <img
                        src={Auction1}
                        className="img-fluid animated hedrimg"
                        alt="auction img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Home Section 2 */}

          <div className="container-fluid nav_bg sectiontwocls second-section-custom-style">
            <div className="row">
              <div className="col-10 mx-auto">
                <section className="section">
                  <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                      <div className="col-md-5" data-aos="fade-up">
                        <h2 className="section-heading">
                          Ulanyjy üçin amatly programma goşundysy
                        </h2>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="feature-1 text-center">
                          <div className="wrap-icon icon-1">
                            <div className="hmicn">
                              <MdSecurity />
                            </div>
                          </div>
                          <h3 className="mb-3">Howpsuzlyk</h3>
                          <p>
                            Satyjylaryň hemmesi ulgamymyz arkaly barlanmaly.
                            Hasabyňyzyň jikme-jiklikleri ygtybarlydyr.
                            Ulanyjynyň paroly şifrlenmeli. Siz üçünji tarapyň
                            päsgel bermezinden söwda tekliplerini edip
                            bilersiňiz.
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="feature-1 text-center mt-4">
                          <div className="wrap-icon icon-1">
                            <div className="hmicn">
                              <MdEventAvailable />
                            </div>
                          </div>
                          <h3 className="mb-3">Elýeterlilik</h3>
                          <p>
                            Programma 24/7 elýeterlidir. Ulanyjy islendik wagt
                            programma girip, hasaba alynýar. Önümiň köp bölegi
                            diňe satyjy tarapyndan kesgitlenen wagtda üçin
                            elýeterli bolar.
                          </p>
                        </div>
                      </div>

                      <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="feature-1 text-center mt-4">
                          <div className="wrap-icon icon-1">
                            <div className="hmicn">
                              <FaBeer />
                            </div>
                          </div>
                          <h3 className="mb-3">Çeýeligi</h3>
                          <p>
                            Satyjy önüm maglumatlaryny derrew täzeläp , goşup ,
                            pozup biler. Söwda arkaly önümiňizi satmak üçin
                            aňsat ädimler. Ulanyjy öz profilini aňsatlyk bilen
                            täzeläp biler.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Home Section 2-3 */}

                {/* <div className='arrowimg'>
<img src={Img4} alt="Auction Image" className="img-fluid"/>
           
           <h1> Follow This Path </h1>
</div>
 */}

                {/* Home Section 3 */}

                <section className="section secthreecls">
                  <div className="container">
                    <div
                      className="row justify-content-center text-center mb-2 homeimgcls mt-4"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="col-md-6 mb-5 flwpthcls">
                        <img
                          src={Img4}
                          alt="Auction Image"
                          className="img-fluid"
                        />
                        <h1> Ulanmak üçin şu aşakdaky ädimleri geçiň </h1>
                        {/* <strong className='brand-name'><br/>Follow This Path</strong> */}
                        {/* <strong className='brand-name'><br/> Follow This Path</strong> */}
                      </div>
                    </div>

                    {/* 
        <div className="row justify-content-center text-center mb-5 homeimgcls" data-aos="zoom-in" data-aos-delay="100">
          
          <div className="col-md-6 mb-5">
            <img src={Img} alt="Auction Image" className="img-fluid"/>
          </div>
        </div> */}

                    <div className="row">
                      <div className="col-md-4">
                        <div
                          className="step"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <span className="number">01</span>
                          <h3>Ulanyjy dörediň</h3>
                          <p>
                            Programmamyza giriň we ulanyjynyňyzyň profilini
                            düzüň.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 mt-4">
                        <div
                          className="step"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <span className="number">02</span>
                          <h3>Ulgama giriň</h3>
                          <p>
                            Dogry ulanyjy Id , parol we giriş bilen üpjün ediň
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 mt-4">
                        <div
                          className="step"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <span className="number">03</span>
                          <h3>Enjoy the app</h3>
                          <p>
                            Programmadan lezzet alyň. Auksion ulgamda söwda ediň
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="section secfourcls mt-5">
                  <div className="container">
                    <div className="row align-items-center crtlot">
                      <div
                        className="col-md-4 me-auto"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <h2 className="mb-4">Haryt dörediň</h2>
                        <p className="mb-4">
                          Söwda üçin element bilen baglanyşykly ähli dogry
                          maglumatlar meselem, harydyň ady, beýany,
                          kategoriýasyny, teklip edilen senesini, iň pes
                          bahasyny, gutarýan wagtyny, söwda, töleg usullarynyy,
                          önümiň suratlaryny giriziň
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Başlamak
                          </a>
                        </p>
                      </div>
                      <div
                        className="col-md-6"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                      >
                        <img
                          src={Img}
                          alt="Auction Image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="section">
                  <div className="container">
                    <div className="row align-items-center">
                      <div
                        className="col-md-4 ms-auto order-2"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <h2 className="mb-4">Baha teklip ediň</h2>
                        <p className="mb-4">
                          Müşderi önümiň jikme-jik görer we gyzyklanýan bolsa
                          baha teklip eder. Teklip etmek üçin şahsyýetiniziň
                          hakykylygyny barlamak hökmanydyr
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Başlamak
                          </a>
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <img
                        src={BidImg}
                        alt="Auction Image"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* PRODUCT COMPONENT */}

          {/* FEATURED PRODUCT */}

          <section className="product_section layout_padding mt-5">
            <div className="container">
              <div className="heading_container heading_center">
                <div className="section-title" data-aos="fade-up">
                  <h2>Aýratyn auksionlar</h2>
                  <p>Söwda başlaň!</p>
                </div>
              </div>
              <div className="row">
                {products &&
                  products.map((product) => <Product product={product} />)}
              </div>
              <div className="btn_box">
                <NavLink excat to={"/lot"} className="view_more-link">
                  Giňişleýin görmek
                </NavLink>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
