import { Link } from "react-router-dom";
import Button from "@/components/commons/Button/Button";
import s from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>404</h2>
      <p className={s.text}>Page Not Found</p>
      <Link to={"/"} className={s.link}>
        <Button classes={[s.btn]}>Go to homepage</Button>
      </Link>
    </div>
  );
}

export default NotFound;
