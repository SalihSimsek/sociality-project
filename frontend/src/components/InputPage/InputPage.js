import React, { useState } from "react";
import "./InputPage.css";

import axios from "../../axios";

const InputPage = () => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const saveInput = (e) => {
    e.preventDefault();
    if (link !== "") {
      setLoading(true);
      axios
        .post("/api/product", { link: link })
        .then((response) => {
          console.log(response);
          setLink("");
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="inputPage">
      <div className={loading ? "loading" : "completed"}>
        <div className="dot"></div>
      </div>
      <form className="product_form">
        <input
          onChange={(e) => setLink(e.target.value)}
          value={link}
          className="product_formInput"
          type="text"
          placeholder="Product Link"
          required
        />
        <button onClick={saveInput} className="product_formButton">
          Save Product
        </button>
      </form>
    </div>
  );
};

export default InputPage;
