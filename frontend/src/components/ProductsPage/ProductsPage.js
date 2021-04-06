import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import axios from "../../axios";

import ProductCard from "../ProductCard/ProductCard";

const ProductsPage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("/api/product").then((response) => {
      setProductList(response.data)
      return response
    });
  }, []);

  return (
    <div className="productPage">
      <div className="product_container">
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
