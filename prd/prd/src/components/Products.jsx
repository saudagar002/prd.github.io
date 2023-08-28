import React, { useEffect, useState } from "react";
import "./style/products.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setdata(data.products);
      });
  }, []);

  return (
    <>
      <div className="product-page">
        <div className="product-titel">
          <Container>
            <h2>😀 Search here products</h2>
          </Container>
        </div>
        <div className="products-list">
          {data.map((cval) => {
            return (
              <div className="product-card">
                <Link to={`/productinfo/${cval.id}`}>
                  <div className="products-img" key={cval.id}>
                    <img src={cval.images[0]} alt="" />
                  </div>
                </Link>
                <div className="products-content">
                  <div className="mod">
                    <p className="rating">{cval.rating}</p>
                    <p className="card-titel">Modal: {cval.title}</p>
                    <p className="brand">brand: {cval.brand} </p>
                  </div>

                  <p className="des">{cval.description}</p>

                  <p className="price">
                    {" "}
                    <del>&#8377; 144</del> &#8377; {cval.price}
                  </p>
                </div>
                <div className="products-btn">
                  <button>Add to Cart</button>
                  <button>Buy Now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
