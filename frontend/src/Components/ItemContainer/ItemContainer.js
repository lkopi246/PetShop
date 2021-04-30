import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import "./ItemContainer.css";
const ItemContainer = () => {
  const items = [
    {
      id: "1_XL",
      category: "mats",
      name: "First",
      prices: [1000, 500, 300],
      types: ["XL", "L", "M"],
      counter: 1,
    },
    {
      id: "2_XL",
      category: "mats",
      name: "second",
      prices: [1000, 500],
      types: ["XL", "L"],
      counter: 1,
    },
    {
      id: "3_XL",
      category: "mats",
      name: "First",
      prices: [1000, 500],
      types: ["XL", "L"],
      counter: 1,
    },
  ];

  return (
    <section className="iblockContainer">
      {items.map((item) => (
        <ShopItem key={item.id} data={item} />
      ))}
    </section>
  );
};

export default ItemContainer;
