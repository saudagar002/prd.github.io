import React, { useEffect, useState } from "react";
import "./style/cat.css";

const Catagory = () => {
  const [cat, setcat] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setcat(data));
  }, []);

  


  return (
    <>
      <div className="cat-page">
        <div className="cat-titel">
          <h1>catagory</h1>
        </div>
        <div className="cat-items">
            {
                cat.map((cval)=>{
                    return(
                        
                        <div className="items-card">{cval}</div>
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default Catagory;
