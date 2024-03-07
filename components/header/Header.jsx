import { Logo, Navigation } from "@/components";

const Header = () => {
  return (
    <div
      id="header"
      className="h-[64px] md:h-[80px] flex container bg-white items-center justify-between"
    >
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
