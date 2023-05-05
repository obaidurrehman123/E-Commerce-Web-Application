import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Checkbox } from "antd";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-all-products`
      );
      if (data.success) {
        setProducts(data.products);
      } else {
        console.log("Failed In Getting Products");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllCategory = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/category/get-All-category`
    );
    if (data.success) {
      setCategories(data.category);
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row mt-3">
        <div className="col-md-3">
          <h3 className="text-center">Filter By Category</h3>
          <div className="d-flex flex-column">
            {categories.map((p) => {
              return (
                <Checkbox
                  key={p._id}
                  onChange={(e) => handleFilter(e.target.checked, p._id)}
                >
                  {p.name}
                </Checkbox>
              );
            })}
          </div>
        </div>
        <div className="col-md-9">
          {JSON.stringify(checked, null, 4)}
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img
                  className="card-img-top"
                  src={`${process.env.REACT_APP_API}/api/v1/product/get-product-image/${p._id}`}
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <p className="card-text">{p.price}</p>
                  <button className="btn btn-primary ms-1">More Details</button>
                  <button
                    className="btn btn-secondary ms-1"
                    style={{ marginLeft: "10px" }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
