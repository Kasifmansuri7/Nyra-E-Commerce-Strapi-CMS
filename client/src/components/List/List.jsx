import React from "react";
import useFetch from "../Hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

function List({ subCat, maxPrice, catId, sort }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&[sort][price]=${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "Loading..."
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
}

export default List;

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
