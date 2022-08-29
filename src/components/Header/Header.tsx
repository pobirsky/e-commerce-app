import React from "react";

import Button from "@uikit/Button";
import Input from "@uikit/Input";
import MultiDropdown from "@uikit/MultiDropdown";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Products</h1>
      <p className={styles.text}>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
      <div className={styles.find}>
        <form className={styles.findForm}>
          <Input
            value="Search property"
            onChange={(value: string) => alert(value)}
            placeholder="Search property"
            className={styles.findFormInput}
          />
          <Button className={styles.findFormInput}>Find now</Button>
        </form>
        <MultiDropdown
          options={[]}
          value={[]}
          onChange={() => null}
          pluralizeOptions={() => "Filter"}
        />
      </div>
    </header>
  );
};

export default Header;
