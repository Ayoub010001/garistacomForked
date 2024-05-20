/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1KfDJUvuhln
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Logo from "./negative-feedback-icon.svg";
import { Link } from "react-router-dom";
import React from "react";
import { HomeIcon, InfoIcon, ShoppingBagIcon, StarIcon } from "lucide-react";
import { TbMessageQuestion } from "react-icons/tb";
import { useSelectedPublishedTheme } from "../../hooks/usePublishedTheme";

export default function Footer({ slug, table_id }) {
  const { selectedBgColor, selectedSecondaryColor } =
    useSelectedPublishedTheme();

  const footerMenuButtons = [
    {
      name: "Home",
      icon: HomeIcon,
      url: `/theme/${slug}?table_id=${table_id}`,
    },
    {
      name: "Rating",
      icon: StarIcon,
      url: `/theme/${slug}/Rating?table_id=${table_id}`,
    },
    {
      name: "Claims",
      icon: TbMessageQuestion,
      url: `/theme/${slug}/Claims?table_id=${table_id}`,
    },
    {
      name: "Cart",
      icon: ShoppingBagIcon,
      url: `/theme/${slug}/Achat?table_id=${table_id}`,
    },
    {
      name: "Info",
      icon: InfoIcon,
      url: `/theme/${slug}/info?table_id=${table_id}`,
    },
  ];

  return (
    // <footer className="fixed bottom-0 left-0 right-0 z-50 flex rounded-t-xl h-14 w-full items-center justify-around bg-white shadow-lg dark:bg-gray-900 max-w-sm mx-auto">
    <footer
      style={{ backgroundColor: `${selectedBgColor}` }}
      className="fixed left-0 right-0 px-1 py-5 flex w-full items-center justify-around mx-auto shadow-lg bottom-0 rounded-t-xl"
    >
      {footerMenuButtons.map((item, id) => (
        <Link
          to={item.url}
          key={id}
          className="flex flex-col items-center justify-center gap-1"
        >
          <item.icon
            style={{ color: `${selectedSecondaryColor}` }}
            className="h-5 w-5"
          />
          <span
            style={{ color: `${selectedSecondaryColor}` }}
            className="text-xs font-medium"
          >
            {item.name}
          </span>
        </Link>
      ))}
    </footer>
  );
}

// function FileIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
//       <line x1="9" y1="11" x2="15" y2="11" />
//     </svg>
//   );
// }

// function HomeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   );
// }

// function InfoIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="M12 16v-4" />
//       <path d="M12 8h.01" />
//     </svg>
//   );
// }

// function ShoppingBagIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
//       <path d="M3 6h18" />
//       <path d="M16 10a4 4 0 0 1-8 0" />
//     </svg>
//   );
// }

// function StarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   );
// }
