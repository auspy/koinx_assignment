import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo.png"}
        className=""
        alt="koinx logo"
        width={96}
        height={24}
      />
    </Link>
  );
};

export default Logo;
