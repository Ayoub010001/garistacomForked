import { FaFacebook, FaSnapchat, FaInstagram, FaTiktok } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";
import { BiSolidFoodMenu } from "react-icons/bi";
import { PiCallBell } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";
import { TbMessage2Cog } from "react-icons/tb";

export const backgroundColors = [
  { color: "#E72929", colorName: "Red" },
  { color: "#FB6D48", colorName: "Orange" },
  { color: "#008DDA", colorName: "Blue" },
  { color: "#FFF455", colorName: "Yellow" },
  { color: "#DDDDDD", colorName: "Grey" },
  { color: "#503C3C", colorName: "Brown" },
];

const menuThemeItems = [
  {
    id: 1,
    name: "Theme 1",
    imageClass: "theme-1",
  },
  {
    id: 2,
    name: "Theme 2",
    imageClass: "theme-2",
  },
  {
    id: 3,
    name: "Theme 3",
    imageClass: "theme-3",
  },
  {
    id: 4,
    name: "Theme 4",
    imageClass: "theme-4",
  },
];

export const menuItems = {
  theme: menuThemeItems,
  layout: [
    {
      name: "Theme Grid",
      id: "theme-grid",
      image: "/Themes/theme-grid.png",
    },
    {
      name: "Theme List",
      id: "theme-list",
      image: "/Themes/theme-list.png",
    },
  ],

  header: [
    {
      name: "Logo Header",
      id: "logo-header",
      image: "/Themes/theme-grid.png",
    },
    {
      name: "Text Header",
      id: "text-header",
      image: "/Themes/theme-list.png",
    },
  ],
};

export const themeContent = {
  1: {
    name: "KFC Menu",
    description: "This is theme 1",
    image: "/Themes/theme-1.png",
    bannerImage: "/assets/menu-banner-1.jpg",
    profileBanner: "/assets/menu-banner-1.jpg",
    socials: [
      {
        name: "Facebook",
        icon: FaFacebook,
        url: "https://www.facebook.com/",
      },
      {
        name: "SnapChat",
        icon: FaSnapchat,
        url: "https://www.snapchat.com/",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/",
      },
      {
        name: "TikTok",
        icon: FaTiktok,
        url: "https://www.tiktok.com/",
      },
    ],
    infoButton: "/assets/info-button.png",
    categories: [
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "All Toppings",
        name: "All",
        catImage: `/RecentSales/${Math.floor(Math.random() * 5)}.png`,
        id: "all",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Delicious pizzas with a variety of toppings",
        name: "Pizza",
        catImage: "/RecentSales/4.png",
        id: "pizza",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Crispy and flavorful fried chicken",
        name: "Chicken",
        catImage: "/RecentSales/5.png",
        id: "fried-chicken",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Stacked high with your favorite toppings.",
        name: "Burgers",
        catImage: "/RecentSales/1.png",
        id: "burgers",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Authentic Italian pasta dishes",
        name: "Pasta",
        catImage: "/RecentSales/4.png",
        id: "pasta",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Fresh and succulent seafood dishes",
        name: "Seafood",
        catImage: "/RecentSales/3.png",
        id: "seafood",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Flavorful tacos",
        name: "Tacos",
        catImage: "/RecentSales/2.png",
        id: "tacos",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Refreshing salads",
        name: "Salad",
        catImage: "/RecentSales/3.png",
        id: "salad",
      },
    ],
  },
  2: {
    name: "Theme Two",
    image: "/Themes/theme-2.png",
    description: "Discover a delectable Array of Handcrapted pizzas",
    bannerImage: "/assets/menu-banner-2.jpg",
    profileBanner: "/assets/menu-banner-2.jpg",
    socials: [
      {
        name: "Facebook",
        icon: FaFacebook,
        url: "https://www.facebook.com/",
      },
      {
        name: "SnapChat",
        icon: FaSnapchat,
        url: "https://www.snapchat.com/",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/",
      },
      {
        name: "TikTok",
        icon: FaTiktok,
        url: "https://www.tiktok.com/",
      },
    ],
    infoButton: "/assets/info-button.png",
    categories: [
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "All Toppings",
        name: "All",
        catImage: `/RecentSales/${Math.floor(Math.random() * 5)}.png`,
        id: "all",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Delicious pizzas with a variety of toppings",
        name: "Pizza",
        catImage: "/RecentSales/4.png",
        id: "pizza",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Crispy and flavorful fried chicken",
        name: "Fried Chicken",
        catImage: "/RecentSales/5.png",
        id: "fried-chicken",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Stacked high with your favorite toppings.",
        name: "Burgers",
        catImage: "/RecentSales/1.png",
        id: "burgers",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Authentic Italian pasta dishes",
        name: "Pasta",
        catImage: "/RecentSales/4.png",
        id: "pasta",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Fresh and succulent seafood dishes",
        name: "Seafood",
        catImage: "/RecentSales/3.png",
        id: "seafood",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Flavorful tacos",
        name: "Tacos",
        catImage: "/RecentSales/2.png",
        id: "tacos",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Refreshing salads",
        name: "Salad",
        catImage: "/RecentSales/3.png",
        id: "salad",
      },
    ],
  },
  3: {
    name: "Burger King",
    image: "/assets/burger-icon.png",
    description: "Theme Three Description",
    bannerImage: "/assets/menu-banner-3.jpg",
    profileBanner: "/assets/menu-banner-3.jpg",
    socials: [
      {
        name: "Facebook",
        icon: FaFacebook,
        url: "https://www.facebook.com/",
      },
      {
        name: "SnapChat",
        icon: FaSnapchat,
        url: "https://www.snapchat.com/",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/",
      },
      {
        name: "TikTok",
        icon: FaTiktok,
        url: "https://www.tiktok.com/",
      },
    ],
    infoButton: "/assets/info-button.png",
    categories: [
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "All Toppings",
        name: "All",
        catImage: `/RecentSales/${Math.floor(Math.random() * 5)}.png`,
        id: "all",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Delicious pizzas with a variety of toppings",
        name: "Pizza",
        catImage: "/RecentSales/4.png",
        id: "pizza",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Crispy and flavorful fried chicken",
        name: "Fried Chicken",
        catImage: "/RecentSales/5.png",
        id: "fried-chicken",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Stacked high with your favorite toppings.",
        name: "Burgers",
        catImage: "/RecentSales/1.png",
        id: "burgers",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Authentic Italian pasta dishes",
        name: "Pasta",
        catImage: "/RecentSales/4.png",
        id: "pasta",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Fresh and succulent seafood dishes",
        name: "Seafood",
        catImage: "/RecentSales/3.png",
        id: "seafood",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Flavorful tacos",
        name: "Tacos",
        catImage: "/RecentSales/2.png",
        id: "tacos",
      },
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "Refreshing salads",
        name: "Salad",
        catImage: "/RecentSales/3.png",
        id: "salad",
      },
    ],
  },
  4: {
    name: "Theme Four",
    image: "/Themes/theme-4.png",
    description: "Theme Four Description",
    bannerImage: "/assets/menu-banner-4.jpg",
    profileBanner: "/assets/menu-banner-4.jpg",
    socials: [
      {
        name: "Facebook",
        icon: FaFacebook,
        url: "https://www.facebook.com/",
      },
      {
        name: "SnapChat",
        icon: FaSnapchat,
        url: "https://www.snapchat.com/",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/",
      },
      {
        name: "TikTok",
        icon: FaTiktok,
        url: "https://www.tiktok.com/",
      },
    ],
    infoButton: "/assets/info-button.png",
    categories: [
      {
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        description: "All Toppings",
        name: "All",
        catImage: `/RecentSales/${Math.floor(Math.random() * 5)}.png`,
        id: "all",
      },
      {
        description: "Delicious pizzas with a variety of toppings",
        name: "Pizza",
        catImage: "/RecentSales/4.png",
        id: "pizza",
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
      },
      {
        description: "Crispy and flavorful fried chicken",
        name: "Fried Chicken",
        catImage: "/RecentSales/5.png",
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        id: "fried-chicken",
      },
      {
        description: "Stacked high with your favorite toppings.",
        name: "Burgers",
        catImage: "/RecentSales/1.png",
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        id: "burgers",
      },
      {
        description: "Authentic Italian pasta dishes",
        name: "Pasta",
        catImage: "/RecentSales/4.png",
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        id: "pasta",
      },
      {
        description: "Fresh and succulent seafood dishes",
        name: "Seafood",
        catImage: "/RecentSales/3.png",
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        id: "seafood",
      },
      {
        description: "Flavorful tacos",
        name: "Tacos",
        catImage: "/RecentSales/2.png",
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        id: "tacos",
      },
      {
        description: "Refreshing salads",
        name: "Salad",
        catImage: "/RecentSales/3.png",
        discount: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 80),
        id: "salad",
      },
    ],
  },
};

export const menuButtons = [
  {
    name: "menu",
    icon: BiSolidFoodMenu,
  },
  {
    name: "feedback",
    icon: TbMessage2Cog,
  },
  {
    name: "call",
    icon: PiCallBell,
  },
];
