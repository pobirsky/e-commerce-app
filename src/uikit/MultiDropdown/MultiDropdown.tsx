import * as React from "react";
import { useState } from "react";

import classNames from "classnames";

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  pluralizeOptions: (value: Option[]) => string;
};

const MultiDropdown = ({
  options,
  value,
  onChange,
  pluralizeOptions,
  ...props
}: MultiDropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  let cnButton = classNames("button", { button_disabled: props.disabled });
  const clickHandler = () => setIsActive((state: boolean) => !state);

  const changeHandler = (option: Option) => {
    const newValues = value.filter((el) => el.key !== option.key);
    if (newValues.length === value.length) newValues.push(option);
    onChange(newValues);
  };

  const btnText = pluralizeOptions(value);

  return (
    <div>
      <button {...props} className={cnButton} onClick={clickHandler}>
        {btnText}
      </button>
      {!props.disabled && isActive && (
        <ul>
          {options.map((option) => (
            <li key={option.key} onClick={() => changeHandler(option)}>
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiDropdown;
