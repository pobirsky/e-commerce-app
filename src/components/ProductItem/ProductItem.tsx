import React, { useEffect, useState } from "react";

import Navbar from "@components/Navbar";
import Button, { ButtonColor } from "@uikit/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

import { IProduct } from "./IProduct";
import styles from "./ProductItem.module.scss";

const ProductItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${id}`,
      });
      setProduct({
        id: result.data.id,
        image: result.data.image,
        title: result.data.title,
        subtitle: result.data.description,
        category: result.data.category,
        content: result.data.price,
      });
    };
    fetch();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className={styles.block}>
          <h2 className={styles.block__title}>{product?.title}</h2>
          <h3 className={styles.block__category}>{product?.category}</h3>
          <p className={styles.block__color}>Color</p>
          <h3 className={styles.block__subtitle}>{product?.subtitle}</h3>
          <p className={styles.block__price}>$ {product?.content}</p>
          <Button>Buy Now</Button>
          <Button color={ButtonColor.secondary} className={styles.btn_white}>
            Add to Chart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
