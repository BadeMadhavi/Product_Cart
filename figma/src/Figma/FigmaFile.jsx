import React, { useState } from "react";
import "./index.css";

const Figma = () => {
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState(["Soup", "Chips", "Nuts", "Vegetable"]);

  const categories = [
    { name: "Vegetables", image: "Rectangle 196.png" },
    { name: "Bak Kwa", image: "Bak.png" },
    { name: "Soup", image: "Group 101824.png" },
    { name: "Finger Food", image: "Group 101825.png" },
    { name: "Confectionery", image: "Group 101826.png" },
    { name: "Snacks", image: "Rectangle 197.png" },
    { name: "Candy & Sweet", image: "Group 101827.png" },
    { name: "Nuts & Seeds", image: "Group 101828.png" },
    { name: "Fruits", image: "Group 101829.png" },
  ]

  const navItems = [
    {  name:"Home",icon: "bx_bx-home-alt.png" },
    {  name:"Search",icon: "akar-icons_search.png" },
    {  name:"Orders",icon: "Group 101822.png" },
    {  name:"Cart",icon: "akar-icons_cart.png" },
    {  name:"Profile",icon: "ci_user.png" },
  ]

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim() && !searchHistory.includes(search)) {
      setSearchHistory([search, ...searchHistory].slice(0, 5))
    }
    setSearch("")
  }

  const filteredCategories = search
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
      )
    : categories;

  return (
    <div style={{ padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <form onSubmit={handleSearchSubmit} style={{ marginBottom: "20px" }}>
      <input  className="input"  type="text"  placeholder="Write a product" value={search} onChange={handleSearchChange} />
      </form>

      <div className="search">
        <h4>Your Search History</h4>
        {searchHistory.length > 0 ? (
          searchHistory.map((item, index) => (
            <p   key={index} className="item" onClick={() => setSearch(item)}>{item} </p>
          ))
        ) : (
          <p>No search history</p>
        )}
      </div>

      <div className="category">
        <h4 style={{ alignItems: "center" }}>Browse by Category</h4>

        <div className="category1">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
        <div key={index} className="found">
        <div className="image">
        <img src={category.image} alt={category.name} className="image1" />
        </div>
            <p style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    color: "white",
                  }}> {category.name}</p>
              </div>
            ))
          ) : (
            <p>No categories found.</p>
          )}
        </div>
      </div>

      <div className="navcontainer">
        {navItems.map((item, index) => (
          <div className="navitem" key={index}>
            <img src={item.icon}  className="navicon" alt={item.icon} />
            <p className="navtext">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Figma;
