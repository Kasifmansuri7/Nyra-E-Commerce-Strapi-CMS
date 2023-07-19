import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../Hooks/useFetch";

function FeaturedProduct({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featured-products">
      <div className="top">
        <h1> {type} products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          animi doloremque laboriosam hic exercitationem illo rerum similique
          consequatur repudiandae quidem aperiam, voluptates aliquid deleniti
          ducimus eveniet pariatur quis quasi. Pariatur?
        </p>
      </div>
      <div className="bottom">
        {error
          ? error
          : loading
          ? "Loading..."
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default FeaturedProduct;

// const data = [
//   {
//     id: 1,
//     img: "https://i.ibb.co/jJ57XBh/edoardo-cuoghi-Nr-W6-FV5-LKc-unsplash.jpg",
//     img2: "https://i.ibb.co/4WMH8GN/max-harlynking-nf-Wp1m-Cm-Bp-M-unsplash.jpg",
//     title: "Long Sleeve Winter Jacket",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 2,
//     img: "https://i.ibb.co/n6sJmY1/wesley-tingey-JOhjfzje-JLw-unsplash.jpg",
//     img2: "https://i.ibb.co/xM573rB/toa-heftiba-O3ymv-T7-Wf9-U-unsplash.jpg",
//     title: "Long Sleeve T-shirt",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 3,
//     img: "https://i.ibb.co/4WMH8GN/max-harlynking-nf-Wp1m-Cm-Bp-M-unsplash.jpg",
//     img2: "https://i.ibb.co/jJ57XBh/edoardo-cuoghi-Nr-W6-FV5-LKc-unsplash.jpg",
//     title: "Jacket",
//     isNew: false,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 4,
//     img: "https://i.ibb.co/xM573rB/toa-heftiba-O3ymv-T7-Wf9-U-unsplash.jpg",
//     img2: "https://i.ibb.co/n6sJmY1/wesley-tingey-JOhjfzje-JLw-unsplash.jpg",
//     title: "Jeans Jacket",
//     isNew: false,
//     oldPrice: 19,
//     price: 12,
//   },
// ];
