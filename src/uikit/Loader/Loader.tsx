import React from "react";

import cn from "classnames";

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
        <div className={cn(`loader_size-${size}`, className)}>Loading</div>
      ) : null}
    </>
  );
};

Loader.defaultProps = {
  size: LoaderSize.m,
  loading: true,
};

export default Loader;
