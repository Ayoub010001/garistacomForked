import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRestaurantSlug = () => {
  const restaurantInfoSession = sessionStorage.getItem("RestoInfo");
  if (!restaurantInfoSession) return;

  const restaurantInfo = JSON.parse(restaurantInfoSession);

  return restaurantInfo[0];
};
