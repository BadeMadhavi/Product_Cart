import React from "react";
import "./index.css";

const products = [
  { name: "Organic vegetables, Nury Kitchen",
    price: 7000,
    rating: 5.0,
    location: "East Coast",
    image: "Group 101827.png",
  }
]

function Cart() {
  return (
    <div className="app1">
      <div className="productscontainer">
        {products.map((product, index) => (
      <div className="productscard" key={index}>
     <img className="productsimage" src={product.image} alt={product.name}/>
         <div className="productsdetails">
              <h3>{product.name}</h3>
              <p>This vegetable consists of 5 carrots, 5 cabbage, 5 tomatoes, 5 cucumbers.
                 Harvested directly from pesticide-free farms.</p>
              <p>Price: {product.price.toFixed(2)}</p>
              <p>Rating: ⭐{product.rating}</p>
              <p>Location: {product.location}</p>
              <button className="button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;
