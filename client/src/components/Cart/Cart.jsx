import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeReq } from "../../makeReq";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  //For Subtotal
  const total = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51NTHMVSGvIXlsx1GVPCAlKCrFVICq7p0mtyQAlw7UqKb0pItgIsqwn3q2se4895fj0n8UUKodLgGYkGAgeynTFzf00Zsb83LAX"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeReq.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 99)}</p>
            <div className="price">
              {item.quantity} &#215; &#8377;{item.price}{" "}
            </div>
          </div>
          <DeleteOutlineIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>&#8377;{total()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      {products.length !== 0 && (
        <p className="reset" onClick={() => dispatch(resetCart())}>
          Reset Cart
        </p>
      )}
    </div>
  );
}

export default Cart;

// const data = [
//   {
//     id: 1,
//     img: "https://i.ibb.co/jJ57XBh/edoardo-cuoghi-Nr-W6-FV5-LKc-unsplash.jpg",
//     img2: "https://i.ibb.co/4WMH8GN/max-harlynking-nf-Wp1m-Cm-Bp-M-unsplash.jpg",
//     title: "Long Sleeve Winter Jacket",
//     desc: "Long Sleeve Winter Jacket",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
// ];
