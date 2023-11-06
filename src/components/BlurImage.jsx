import { useState } from "react";
import { cn } from "../lib/utils";

const BlurImage = (props) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      {...props}
      className={cn(
        props.className,
        "w-full h-full object-cover duration-700 ease-in-out",
        isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
      )}
      onLoad={() => setLoading(false)}
    />
  );
};

export default BlurImage;
