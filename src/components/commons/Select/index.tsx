import InputWrapper from "@/components/commons/InputWrapper";
import { SelectProps } from "@/components/commons/Select/Select.types";
import s from "./Select.module.scss";

function Select({
  label,
  name,
  required,
  placeholder,
  defaultValue,
  selectOptions,
  register,
}: SelectProps) {
  return (
    <InputWrapper label={label} name={name} required={required}>
      <select
        id={name}
        className={s.select}
        {...register(name, {
          setValueAs: (value) => (value === placeholder ? null : value),
        })}
        defaultValue={defaultValue ? defaultValue : placeholder}
      >
        <option disabled className={s.optionDisabled}>
          {placeholder}
        </option>
        {selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
}

export default Select;
