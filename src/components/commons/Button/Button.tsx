import { clsx as c } from "clsx";
import { ButtonProps } from "@/components/commons/Button/Button.types";
import s from "./Button.module.scss";

function Button({
  icon,
  type = "button",
  ghost,
  formId,
  classes,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={c(s.btn, ghost && s.ghost, classes)}
      form={formId}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
