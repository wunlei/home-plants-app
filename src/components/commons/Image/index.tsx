import { useState } from "react";
import { clsx as c } from "clsx";
import { ImageProps } from "@/components/commons/Image/Image.types";
import Loader from "@/components/commons/Loader";
import s from "./Image.module.scss";

function Image({ src, alt, classes, height, width }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div
          className={s.loaderContainer}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <Loader />
        </div>
      )}
      <img
        className={c(classes, !isLoaded && s.hidden)}
        alt={alt}
        src={src}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    </>
  );
}

export default Image;
