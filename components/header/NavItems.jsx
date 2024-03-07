import Link from "next/link";

const NavItems = () => {
  const naviItems = [
    { label: "Crypto Taxes", href: "/" },
    { label: "Free Tools", href: "/" },
    { label: "Resource Center", href: "/" },
  ];
  return (
    <>
      {naviItems.map(({ label, href }, index) => (
        <Link
          href={href}
          key={index}
          className="font-semibold text-base text-heading"
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default NavItems;
