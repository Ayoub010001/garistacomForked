import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const menuThemeAtom = atomWithStorage("menuTheme", {
  selectedTheme: 1,
  selectedLayout: "theme-grid",
  selectedHeader: "logo-header",
  selectedBgColor: "#ffffff",
  selectedPrimaryColor: "#262326",
  selectedSecondaryColor: "#dddddd",
  selectedCustomColor: "",
});

export const useMenuTheme = () => useAtom(menuThemeAtom);
