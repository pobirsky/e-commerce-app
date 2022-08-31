import React, { useEffect, useState } from "react";

import { InputIPropduct, IProduct } from "@pages/Product/IProduct";
import Card from "@uikit/CardLink";
import Loader from "@uikit/Loader";
import axios from "axios";

import styles from "./Product.module.scss";

let productCount: number = 0;

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.title}>
            Total Products <span>{productCount}</span>
          </div>
          <div className={styles.all}>
            {products.map((product: IProduct) => (
              <Card
                to={`/product/${product.id}`}
                key={product.id}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
                category={product.category}
                content={product.content}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default React.memo(ProductList);
