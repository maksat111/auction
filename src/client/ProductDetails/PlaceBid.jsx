import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import { useHistory } from "react-router-dom";
import { axiosInstance } from "../../config/axios";

const PlaceBid = ({ product }) => {
  const [ammount, setAmmount] = useState("");

  const alert = useAlert();
  const bidSubmitHandler = (e) => {
    e.preventDefault();

    if (ammount > product.startingBid) {
      console.log(`ammount is valid`);

      const myForm = new FormData();

      myForm.set("productId", product._id);
      myForm.set("bidAmmount", ammount);

      console.log(myForm);
      axiosInstance
        .post("/products/bid", myForm, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
          //handle success
          console.log(response);
          if (response.status === 201) {
            //   alert("Bid Placed SuccessFully");
            e.preventDefault();

            setAmmount("");
            alert.success("Üstünlikli teklip berildi!");
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    } else {
      console.log(`ammount is invalid`);
      //   history.push("/lot");
      alert.error(`Teklip başlangyç bahadan ýokary bolmaly!`);
    }
  };

  return (
    <>
      {/* onSubmit={searchSubmitHandler} */}
      {/* <h1>place Bid called</h1> */}
      <form className="searchBox" onSubmit={bidSubmitHandler}>
        <div className="placeBid">
          <div className="product_count">
            <label for="qty">Mukdary:</label>
            <input
              type="number"
              name="qty"
              id="sst"
              maxlength="12"
              title="Quantity:"
              className="input-text qty"
              onChange={(e) => setAmmount(e.target.value)}
              required
            />
          </div>
          <div className="card_area d-flex">
            <button className="primary-btn" type="submit">
              Teklip etmek
            </button>
            <div className="pd-social-links">
              <a className="icon_btn" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="icon_btn" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="icon_btn" href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a className="icon_btn" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceBid;
