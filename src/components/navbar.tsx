import MaxWidthWrapper from "./max-width-wrappper";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <header>
      <MaxWidthWrapper className="py-6 border-b">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <span>
            Quick<span className="text-red-500">Curl</span>
          </span>
          <ModeToggle />
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
