import { Logo, Navigation } from "@/components";

const Header = () => {
  return (
    <div className="h-[80px] flex container mx-1 bg-white items-center justify-between">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
