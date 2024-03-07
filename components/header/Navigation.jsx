import { ButtonHeader, NavItems } from "@/components";
import ButtonMenu from "../buttons/ButtonMenu";
const Navigation = () => {
  return (
    <>
      <div className="hidden md:flex flex-row items-center gap-8">
        <NavItems />
        <ButtonHeader />
      </div>
      <ButtonMenu />
    </>
  );
};

export default Navigation;
