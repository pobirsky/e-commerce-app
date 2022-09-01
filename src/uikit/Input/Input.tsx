import React from "react";

import classNames from "classnames";

import styles from "./Input.module.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className,
  ...rest
}) => {
  let inputClass = classNames(
    `${styles.input}`,
    { input_disabled: rest.disabled },
    className
  );
  if (rest.disabled) {
    inputClass += " input_disabled";
  }
  return (
    <input
      className={inputClass}
      type="text"
      children={rest.children}
      onChange={(event) => onChange(event.target.value)}
      value={value}
      {...rest}
    />
  );
};

export default Input;
