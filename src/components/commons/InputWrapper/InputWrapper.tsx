import { clsx as c } from "clsx";
import { InputWrapperProps } from "@/components/commons/InputWrapper/InputWrapper.types";
import s from "./InputWrapper.module.scss";

function InputWrapper({
  label,
  name,
  error,
  required,
  children,
}: InputWrapperProps) {
  return (
    <div className={c(s.inputContainer, error && s.inputContainerError)}>
      <label
        title={required ? "Required" : ""}
        htmlFor={name}
        className={s.label}
      >
        {label}
        {required && <span className={s.labelRequired}>*</span>}
      </label>
      {children}
      {error && <span className={s.error}>{error.message}</span>}
    </div>
  );
}

export default InputWrapper;
