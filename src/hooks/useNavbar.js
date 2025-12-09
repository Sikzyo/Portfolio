import { create } from "zustand";

export const useNavbar = create((set) => ({
  menu: false,
  toggleMenu: () => set((state) => ({ menu: !state.menu })),
  closeMenu: () => set({ menu: false }),
  openMenu: () => set({ menu: true }),
}));
