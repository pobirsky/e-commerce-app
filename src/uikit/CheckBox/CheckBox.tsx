import React from "react";

type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  disabled,
  id,
  checked,
  onChange,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id}>
        <input
          type="checkbox"
          name={id}
          disabled={disabled}
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          {...rest}
        />
      </label>
    </div>
  );
};

export default CheckBox;
