import InputWrapper from "@/components/commons/InputWrapper";
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
        defaultValue={defaultValue || ""}
        placeholder={placeholder}
        {...register(name, {
          ...options,
          setValueAs: (value) => (value ? value.trim() : null),
        })}
        max={max}
      />
    </InputWrapper>
  );
}

export default Input;
