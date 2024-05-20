import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const publishedThemeAtom = atomWithStorage("publishedTheme", {
  selectedTheme: 1,
  selectedLayout: "theme-grid",
  selectedHeader: "logo-header",
  selectedBgColor: "#ffffff",
  selectedPrimaryColor: "#262326",
  selectedSecondaryColor: "#dddddd",
});

export const usePublishedTheme = () => useAtom(publishedThemeAtom);
