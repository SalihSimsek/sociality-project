import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import axios from "../../axios";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/product/${id}`)
      .then((response) => setProduct(response.data));
  });

  return (
    <div className="productDetail">
      <div className="product_area">
        <div className="product_areaCard">
          <img src={product.image} alt="" />
          <div className="product_texts">
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
