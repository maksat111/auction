import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../MetaData/MetaData";
import Loader from "../Loader/Loader";
import { clearErrors, createProduct } from "../../actions/productAction";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { useHistory } from "react-router-dom";

import "./addlotstyles.scss";

const Addlot = () => {
  let history = useHistory();
  // history.push("/lot");

  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);
  // HOOKS
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [images, setImages] = useState([]);
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      history.push("/lot");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("itemName", name);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("startingBid", price);
    myForm.set("bidEnd", new Date(endDate + " " + endTime));
    // myForm.set("endTime" , endTime);
    // new Date(endDate + ' ' + endTime)

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(createProduct(myForm));
  };

  const createProductImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <MetaData title="Add Auctions"></MetaData>

      <div className=" addlotcls" data-aos="fade-up" data-aos-delay="400">
        <div className="row">
          <div className="col-11 mx-auto">
            <section className="section form-elements">
              <div className="row">
                <div className="card">
                  <div className="card-body">
                    <div className="section-title" data-aos="fade-up">
                      <h2>Haryt goşmak</h2>
                      <p>Maglumatlary dolduryň</p>
                    </div>

                    {/* <h5 className="card-title">ADD LOT</h5> */}

                    <div className="row">
                      <div className="col-18 mx-auto">
                        <form
                          className="formbd"
                          encType="multipart/form-data"
                          onSubmit={createProductSubmitHandler}
                        >
                          {/* LOT NAME */}
                          <div className="row mb-3 rowset">
                            <label
                              for="inputText"
                              className="col-sm-2 col-form-label"
                            >
                              Ady
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* LOT DESCRIPTION */}

                          <div className="row mb-3 rowset">
                            <label
                              for="inputPassword"
                              className="col-sm-2 col-form-label"
                            >
                              Haryt barada
                            </label>
                            <div className="col-sm-10">
                              <textarea
                                className="form-control"
                                style={{ height: "100px" }}
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                              ></textarea>
                            </div>
                          </div>

                          {/* CATEGORY */}
                          <div className="row mb-3 rowset">
                            <label className="col-sm-2 col-form-label">
                              Kategoriýasy
                            </label>
                            <div className="col-sm-10">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                              >
                                <option selected value="">
                                  Kategoriýa saýlaň
                                </option>

                                {/* <option value="Clothes">Clothes</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Property">Property</option>
                    <option value="Household">Household</option>
                    <option value="Vehicle">Vehicle</option> */}

                                <option value="Sungat">Sungat</option>
                                <option value="Emläk">Emläk</option>
                                <option value="Şaý-sepler">Şaý-sepler</option>
                                <option value="Ulaglar">Ulaglar</option>
                                <option value="Sport enjamlary">
                                  Sport enjamlary
                                </option>
                                <option value="Senagat enjamlary">
                                  Senagat enjamlary
                                </option>
                                {/* <option value="Machinery">Machinery</option> */}
                                <option value="Seýrek we gadymy miras">
                                  Seýrek we gadymy miras
                                </option>
                                <option value="Başga">Başga</option>
                              </select>
                            </div>
                          </div>

                          {/* LOT START PRICE */}

                          <div className="row mb-3 rowset">
                            <label
                              for="inputNumber"
                              className="col-sm-2 col-form-label"
                            >
                              Başlangyç baha
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="number"
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* END DATE */}
                          <div className="row mb-3 rowset">
                            <label
                              for="inputDate"
                              className="col-sm-2 col-form-label"
                            >
                              Gutarýan güni
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="date"
                                className="form-control"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* END TIME */}

                          <div className="row mb-3 rowset">
                            <label
                              for="inputTime"
                              className="col-sm-2 col-form-label"
                            >
                              Gutarýan wagty
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="time"
                                className="form-control"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* LOT IMAGES */}

                          <div className="row mb-3 rowset">
                            <label
                              for="inputNumber"
                              className="col-sm-2 col-form-label"
                            >
                              Suraty
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={createProductImageChange}
                                multiple
                              />
                            </div>
                          </div>

                          {/* PAYMENT METHOD */}
                          {/* <div className="row mb-3 rowset">
                  <legend className="col-form-label col-sm-2 pt-0">PAYMENT METHODS</legend>
                  <div className="col-sm-10">

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                      <label className="form-check-label" for="gridCheck1">
                        CASH
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        OTHER
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        DEBIT CARD
                      </label>
                    </div>

                    

                  </div>
                </div> */}

                          {/* DELIVERY METHODS */}

                          {/* <div className="row mb-3 rowset">
                  <legend className="col-form-label col-sm-2 pt-0">DELIVERY METHODS</legend>
                  <div className="col-sm-10">

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                      <label className="form-check-label" for="gridCheck1">
                        POST OFFICE
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        PERSONAL MEETING
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        COURIOUR
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        OTHER
                      </label>
                    </div>

                    

                  </div>
                </div> */}

                          {/* Create Button */}

                          <div className="row mb-3 rowset submitbtn">
                            <div className="col-sm-10">
                              <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading ? true : false}
                              >
                                Döretmek
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
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

export default Addlot;
