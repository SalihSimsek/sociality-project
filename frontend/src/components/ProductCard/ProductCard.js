import React from "react";
import "./ProductCard.css";
import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  const history = useHistory();

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div onClick={() => history.push(`/detail/${product._id}`)} className="productCard">
      <img src={product.image} alt="" className="productCard_image" />
      <div className="productCard_name">
        <h2>{truncate(product.name, 50)}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
