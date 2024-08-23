import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link className="block w-full" href="/">
      <AspectRatio ratio={13 / 4} className="bg-muted">
        <Image
          src="/logo/logo-left-title.png"
          alt="Logo"
          fill
          className="size-full object-cover"
        />
      </AspectRatio>
    </Link>
  );
};
export default Logo;
