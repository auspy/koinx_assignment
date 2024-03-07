import { ButtonHeader, NavItems } from "@/components";
import ButtonMenu from "../buttons/ButtonMenu";
import { Suspense } from "react";
const Navigation = () => {
  return (
    <>
      <div className="hidden md:flex flex-row items-center gap-8">
        <NavItems />
        <ButtonHeader />
      </div>
      <Suspense fallback={null}>
        <ButtonMenu />
      </Suspense>
    </>
  );
};

export default Navigation;
