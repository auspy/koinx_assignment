import Link from "next/link";
import { ButtonHeader } from "@/components";

const Navigation = () => {
  const naviItems = [
    { label: "Crypto Taxes", href: "/" },
    { label: "Free Tools", href: "/" },
    { label: "Resource Center", href: "/" },
  ];
  return (
    <>
      <div className="flex flex-row items-center gap-8">
        {naviItems.map(({ label, href }, index) => (
          <Link
            href={href}
            key={index}
            className="font-semibold text-base text-heading"
          >
            {label}
          </Link>
        ))}
        <ButtonHeader />
      </div>
    </>
  );
};

export default Navigation;
