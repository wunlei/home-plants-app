import { clsx as c } from "clsx";
import s from "./Loader.module.scss";

interface LoaderProps {
  absolute?: boolean;
}

function Loader({ absolute }: LoaderProps) {
  return (
    <div className={c(s.container, absolute && s.absolute)}>
      <div className={s.loader}></div>
    </div>
  );
}

export default Loader;
