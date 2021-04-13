import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <div className="cart">
      <h2>This is Cart</h2>
      <ol>
        {cart.map((item) => (
          <li key={item.cartId}>
            {item.name}{" "}
            <button onClick={() => removeFromCart(item.cartId)}> X </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
