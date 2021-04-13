import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Product from "../Product/Product";

const Shop = (props) => {
  const { products, addToCart } = props;

  return (
    <div className="shop">
      <h2>This is Shop</h2>
      <div className="product">
        {products.map((item) => (
          <Product key={item.id} addToCart={addToCart} product={item} />
        ))}
      </div>
      <div className="product">
        {products.map((item) => (
          <Product key={item.id} addToCart={addToCart} product={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
