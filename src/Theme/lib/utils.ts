import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrentUserId = () => {
  const userId = localStorage.getItem("dataItem");
  if (userId) {
    return parseInt(userId);
  }
};
