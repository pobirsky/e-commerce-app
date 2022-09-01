import React from "react";

import cn from "classnames";

import styles from "./Loader.module.scss";

enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ size, loading, className }) => {
  return (
    <>
      {loading ? (
        <div className={styles.flex}>
          <div className={cn(className, styles.loader)} />
        </div>
      ) : null}
    </>
  );
};

Loader.defaultProps = {
  size: LoaderSize.m,
  loading: true,
};

export default Loader;
