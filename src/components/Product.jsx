import React from 'react';
import { items } from './Data';
import { Link } from 'react-router-dom';

export const Product = ({items}) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={product.id}>
              <div key={product.id} className="card" style={{ width: "100%" }}>
                <Link to={`/product/${product.id}`} 
                 style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                  <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3"> {"₹ "}{product.price}</button>
                  <button className="btn btn-warning">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
