import React, { useEffect, useState } from "react";

import { IProduct, InputIPropduct } from "@components/Product/IProduct";
import Card from "@uikit/Card";
import axios from "axios";
import { Link } from "react-router-dom";

import styles from "./Product.module.scss";

let productCount: number = 0;

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      });
      setProducts(
        result.data.map((raw: InputIPropduct) => ({
          id: raw.id,
          image: raw.image,
          title: raw.title,
          subtitle: raw.description,
          category: raw.category,
          content: raw.price,
        }))
      );
      productCount = result.data.length;
    };
    fetch();
  }, []);

  return (
    <>
      <div className={styles.title}>
        Total Products <span>{productCount}</span>
      </div>
      <div className={styles.all}>
        {products.map((product: IProduct) => (
          <Link to={`/product/${product.id}`}>
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              category={product.category}
              content={product.content}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Product;
