import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useNavbar } from "@/hooks/useNavbar.js";

export default function Hamburger() {
  const { menu, toggleMenu } = useNavbar();

  return (
    <button
      className="flex justify-center items-center h-11 w-11 bg-orange-3/75 rounded-lg text-orange-9 backdrop-blur-sm z-10 md:hidden"
      aria-label="Menu Hamburguesa"
      onClick={toggleMenu}
    >
      <HamburgerMenuIcon
        className={`${
          menu ? "opacity-0 scale-50" : "opacity-100 scale-100"
        } transition absolute duration-300`}
      />
      <Cross1Icon
        className={`${
          menu ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } transition absolute duration-300`}
      />
    </button>
  );
}
