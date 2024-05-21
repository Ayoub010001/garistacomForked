import React from 'react'
import { Link, useLocation } from "react-router-dom"
import Logo from './negative-feedback-icon.svg'

export default function Footer({ slug, table_id }) {
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 rounded-t-xl h-14 flex w-full items-center justify-around mx-auto bg-white shadow-lg dark:bg-gray-900">
      <NavItem
        to={`/theme/${slug}?table_id=${table_id}`}
        icon={HomeIcon}
        label="Home"
        active={location.pathname === `/theme/${slug}`}
      />
      <NavItem
        to={`/theme/${slug}/Rating?table_id=${table_id}`}
        icon={StarIcon}
        label="Rating"
        active={location.pathname === `/theme/${slug}/Rating`}
      />
      <NavItem
        to={`/theme/${slug}/Claims?table_id=${table_id}`}
        icon={Logo}
        label="Claims"
        active={location.pathname === `/theme/${slug}/Claims`}
        isImg
      />
      <NavItem
        to={`/theme/${slug}/Achat?table_id=${table_id}`}
        icon={ShoppingBagIcon}
        label="Cart"
        active={location.pathname === `/theme/${slug}/Achat`}
      />
      <NavItem
        to={`/theme/${slug}/info?table_id=${table_id}`}
        icon={InfoIcon}
        label="Info"
        active={location.pathname === `/theme/${slug}/info`}
      />
    </footer>
  );
}

function NavItem({ to, icon: Icon, label, active, isImg }) {
  return (
    <Link to={to} className={`flex flex-col items-center justify-center gap-1 ${active ? 'text-[#28509E] dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
      {isImg ? (
        <img src={Icon} alt={label} className="h-6 w-6" />
      ) : (
        <Icon className="h-6 w-6" />
      )}
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
}

function HomeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ShoppingBagIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
