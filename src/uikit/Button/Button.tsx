import React from "react";

import Loader from "@uikit/Loader";
import classNames from "classnames";

import style from "./Button.module.scss";

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
}

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  color = ButtonColor.primary,
  loading = false,
  className,
  children,
  ...rest
}) => {
  let btnClass = classNames(
    `${style.button}`,
    `button_color-${color}`,
    { button_disabled: rest.disabled },
    className
  );
  if (loading) {
    // eslint-disable-next-line no-lone-blocks
    {
      rest.disabled = true;
    }
    btnClass += " button_disabled";
  }
  return (
    <button className={btnClass} disabled={loading || rest.disabled} {...rest}>
      {children} {loading && <Loader />}
    </button>
  );
};

export default Button;
