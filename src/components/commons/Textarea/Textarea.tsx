import { TextareaProps } from "@/components/commons/Textarea/Textarea.types";
import InputWrapper from "@/components/commons/InputWrapper/InputWrapper";
import s from "./Textarea.module.scss";

function Textarea({
  label,
  name,
  defaultValue,
  placeholder,
  required,
  options,
  register,
}: TextareaProps) {
  return (
    <InputWrapper label={label} name={name} required={required}>
      <textarea
        id={name}
        className={s.textarea}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, {
          ...options,
          setValueAs: (value) => value.trim(),
        })}
      ></textarea>
    </InputWrapper>
  );
}

export default Textarea;
