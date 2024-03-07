"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { NavItems } from "@/components";

const ButtonMenu = () => {
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("menu") === "true") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchParams]);
  const [isOpen, setIsOpen] = useState(false);
  const href = !isOpen ? "?menu=true" : "?";
  return (
    <>
      <Link href={href} className="md:hidden">
        <Menu className=" text-blueIconMenu" size={20} />
      </Link>
      {isOpen && (
        <div className="mt-[64px] bg-white h-full w-full border-t border-blueBg flex fixed top-0 left-0 p-7 flex-col gap-3 md:hidden z-10">
          <NavItems />
        </div>
      )}
    </>
  );
};

export default ButtonMenu;
