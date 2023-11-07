import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedRecommended,setSelectedRecommended] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleRecommendedClick = (event) => {
    setSelectedRecommended(event.target.value);
  };

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  function filteredDataTest(products, selected, query) {
    const {selectedCategory,selectedColor,selectedPrice,selectedRecommended} = selected
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected category filter
     if (selectedCategory ) {
      filteredProducts = filteredProducts.filter(
        ({ category }) =>
          category === selectedCategory 
         
      );
    }

      // Applying selected color filter
      if (selectedColor) {
        filteredProducts = filteredProducts.filter(
          ({ color}) =>
            
            color === selectedColor 
        );
      }

     // Applying selected price filter
     if (selectedPrice ) {
      filteredProducts = filteredProducts.filter(
        ({  newPrice }) =>
          newPrice === selectedPrice 
      );
    }

     // Applying selected recommended filter
     if (selectedRecommended) {
      filteredProducts = filteredProducts.filter(
        ({ company }) =>          
          company === selectedRecommended         
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }


  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected //||  //title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  let funcs = {selectedCategory,selectedColor,selectedPrice,selectedRecommended}

  const result = filteredData(products, selectedCategory, query);
  const testresult = filteredDataTest(products, funcs, query);

  //const testResult = filteredDataTest()


  return (
    <>
      <Sidebar handleChange={handleChange} 
               handleCategoryChange={handleCategoryChange} 
               handleColorChange={handleColorChange}
               handlePriceChange={handlePriceChange} 
      />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} handleRecommendedClick={handleRecommendedClick}/>
      <Products result={testresult} />
    </>
  );
}

export default App;
