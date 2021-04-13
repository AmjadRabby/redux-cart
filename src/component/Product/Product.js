import React from "react";

const Product = (props) => {
  const { addToCart, product } = props;
  const { name, id } = product;
  return (
    <div className="item">
      <div className="">
        <h5>{name}</h5>
        <button onClick={() => addToCart(id, name)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
