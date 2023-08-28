import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/info.css";

const Productinfo = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setdata(data.products);
      });
  }, []);

  const { id } = useParams();
  const _id = Number(id);
  const product = data.find((p) => p.id == id);
  console.log(product);

  return (
    <>
      <div className="info-page">
        <div className="info-img">
          <div>
            <img className="img" src={product.images[0]} />
          </div>
          <div>
            <img className="img" src={product.images[1]} />
          </div>
          <div>
            <img className="img" src={product.images[2]} />
          </div>
        </div>
        <div className="info-content">
          <div className="mod">
            <p className="rating">{product.rating}</p>
            <p className="card-titel">Modal: {product.title}</p>
            <p className="brand">brand: {product.brand} </p>
          </div>

          <p className="des">{product.description}</p>

          <p className="price">
            {" "}
            <del>&#8377; 144</del> &#8377; {product.price}
          </p>
          <div className="info-btn">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Productinfo;
