import React, { useState } from "react";
import "./index.css";

const products = [
  { name: "Vegetables, John Farm", price: 2000, rating:3.4, location: "East Coast", image: "Group 101825.png" },
  { name: "Vegetables, Farmer Farm", price: 7000, rating: 5.0, location: "South North 43", image: "Group 101826.png" },
  { name: "Organic vegetables", price: 3000, rating: 4.8, location: "Marina Centre 755", image: "Group 101827.png" },
  { name: "Vegetable Cabbage", price: 4000, rating: 3.3, location: "Somerset 213", image: "Group 101828.png" },
  { name: "Veg YNZ, John Kitchen", price: 500, rating: 2.5, location: "Datapoint 2314", image: "Gropu 101820.png" },
]

function ProductFile() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    )
    setFilteredProducts(filtered)
  }

  const handleSort = (e) => {
    const sortKey = e.target.value;
    setSortBy(sortKey)

    const sorted = [...filteredProducts].sort((a, b) => {
      if (sortKey === "price") return a.price - b.price;
      if (sortKey === "rating") return b.rating - a.rating;
      return a.name.localeCompare(b.name)
    })

    setFilteredProducts(sorted)
  }

  return (
    <div className="app">
      <h1>PRODUCT FOUND</h1>
      <div className="controls">
        <input type="text" className="controlsinput"  placeholder="Search products..."  value={searchQuery} onChange={handleSearch}/>
        <select  className="controlsselect" value={sortBy} onChange={handleSort}>
        <option value="all">All</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="productlist">
        {filteredProducts.map((product, index) => (
        <div className="productcard" key={index}>
        <div className="productimage">
        <img className="productimg"  src={product.image} alt={product.image}/>
        </div>
        <div className="productdetails">
              <h3>{product.name}</h3>
              <p>Price: {product.price.toFixed(2)}</p>
              <p>Rating: ⭐{product.rating}</p>
              <p>Location: {product.location}</p>
        </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default ProductFile;
