import { ImgHTMLAttributes, memo } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: "small" | "medium";
}

const Avatar = ({ size = "small", ...rest }: AvatarProps) => {
  const sizeClass = () => {
    switch (size) {
      case "small":
        return "w-11 h-11";

      case "medium":
        return "w-[160px] h-[160px]";
    }
  };

  return <img {...rest} className={`rounded-full ${sizeClass()}`} />;
};

export default memo(Avatar);
