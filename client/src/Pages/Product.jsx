import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/Hooks/useFetch";
import "./Product.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

function Product() {
  const productId = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  console.log(data);

  return (
    <div className="product">
      {loading ? (
        "Loading"
      ) : (
        <React.Fragment>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes.img?.data.attributes.url
                }
                alt=""
                onClick={() => setSelectedImage("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes.img2?.data.attributes.url
                }
                alt=""
                onClick={() => setSelectedImage("img2")}
              />
            </div>

            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImage]?.data.attributes?.url
                }
                alt="product"
              />
            </div>
          </div>

          <div className="right">
            <h1 className="title">{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>

            <div className="quantity">
              <button
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data?.attributes?.title,
                    desc: data?.attributes?.desc,
                    price: data?.attributes?.price,
                    img: data?.attributes?.img?.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>

            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: POLO</span>
              <hr />
              <span>Product Type: T Shirt</span>
              <hr />
              <span>Tag: T Shirt, Women, Top</span>
              <hr />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Product;

// const images = [
//   "https://i.ibb.co/jJ57XBh/edoardo-cuoghi-Nr-W6-FV5-LKc-unsplash.jpg",
//   "https://i.ibb.co/4WMH8GN/max-harlynking-nf-Wp1m-Cm-Bp-M-unsplash.jpg",
// ];
