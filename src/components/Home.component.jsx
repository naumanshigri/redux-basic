import React from "react";

function Home(props) {
  console.warn("home", props.state.cart);
  console.warn("home", props.state.cart.length);
  return (
    <div className="home-container">
      <div className="add-to-cart">
        <span className="cart-count">{props.state.cart.length}</span>
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
          alt=""
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://static-01.daraz.pk/p/821d4d89263a350c74f5d99955bcbe94.png"
            alt="name"
            className="item-img"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({
                price: 1200,
                name: "paqololoo",
                description: "some description for testing",
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
