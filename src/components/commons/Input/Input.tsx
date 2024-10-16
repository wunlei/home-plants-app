import InputWrapper from "@/components/commons/InputWrapper/InputWrapper";
import { InputProps } from "@/components/commons/Input/Input.types";
import s from "./Input.module.scss";

function Input({
  type,
  label,
  name,
  defaultValue,
  placeholder,
  error,
  required,
  options,
  register,
  max,
}: InputProps) {
  return (
    <InputWrapper label={label} name={name} required={required} error={error}>
      <input
        id={name}
        type={type ? type : "text"}
        className={s.input}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, {
          ...options,
          setValueAs: (value) => value.trim(),
        })}
        max={max}
      />
    </InputWrapper>
  );
}

export default Input;