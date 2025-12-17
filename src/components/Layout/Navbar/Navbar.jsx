import { useNavbar } from "@/hooks/useNavbar";
import { useEffect, useState } from "react";

export default function Navbar() {
  const Links = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mí", href: "/about" },
    { name: "Hoja de vida", href: "/cv.pdf" },
  ];

  const [page, setPage] = useState(null);

  useEffect(() => {
    const page = window.location.pathname;
    setPage(page);
    console.log(page);
    console.log(Links[0].href);
  }, []);

  const menu = useNavbar((state) => state.menu);
  const closeMenu = useNavbar((state) => state.closeMenu);

  return (
    <nav
      className={`fixed top-0 w-full h-full bg-linear-to-b from-orange-1/75 from-50% to-blue-2/75 bg-fixed backdrop-blur-sm py-6 px-6 pt-24 transition-[left] duration-300 md:static md:w-fit md:p-2 md:bg-none md:bg-orange-3/75 md:rounded-2xl ${
        menu ? "left-0" : "-left-full"
      }`}
    >
      <section className="flex flex-col gap-4 md:flex-row">
        {Links.map((link, index) => {
          return (
            <a
              key={index}
              className={`flex w-full min-h-11 font-manrope font-bold text-2xl text-orange-9 md:items-center md:justify-center md:text-nowrap md:text-base md:px-4 md:py-2 ${
                page === link.href
                  ? "md:text-orange-1 md:bg-orange-9 rounded-lg"
                  : "text-fuchsia-950"
              }`}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          );
        })}
      </section>
    </nav>
  );
}
