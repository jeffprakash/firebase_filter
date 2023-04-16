import { useState } from "react";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Graph");

  const menus = [
    { name: "Dashboard", icon: "/admin/home.svg" },
    { name: "Discounts", icon: "/admin/discount.svg" },
    { name: "Graph", icon: "/admin/graph.svg" },
    { name: "Messages", icon: "/admin/message.svg" },
    { name: "Notifications", icon: "/admin/notification.svg" },
    { name: "Settings", icon: "/admin/settings.svg" },
    { name: "Logout", icon: "/admin/logout.svg" },
  ];

  return (
    <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
      <button className="p-2 bg-opacity-20 rounded-xl bg-primary">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.6668 3.33325H8.3335C5.57683 3.33325 3.3335 5.57659 3.3335 8.33325V13.0516C3.3335 14.8066 3.97016 16.4016 5.00016 17.6283V33.3333C5.00016 33.7753 5.17576 34.1992 5.48832 34.5118C5.80088 34.8243 6.2248 34.9999 6.66683 34.9999H20.0002C20.4422 34.9999 20.8661 34.8243 21.1787 34.5118C21.4912 34.1992 21.6668 33.7753 21.6668 33.3333V24.9999H28.3335V33.3333C28.3335 33.7753 28.5091 34.1992 28.8216 34.5118C29.1342 34.8243 29.5581 34.9999 30.0002 34.9999H33.3335C33.7755 34.9999 34.1994 34.8243 34.512 34.5118C34.8246 34.1992 35.0002 33.7753 35.0002 33.3333V17.6266C36.0302 16.4016 36.6668 14.8066 36.6668 13.0499V8.33325C36.6668 5.57659 34.4235 3.33325 31.6668 3.33325ZM33.3335 8.33325V13.0516C33.3335 14.9516 31.9185 16.5716 30.1818 16.6633L30.0002 16.6666C28.1618 16.6666 26.6668 15.1716 26.6668 13.3333V6.66659H31.6668C32.5868 6.66659 33.3335 7.41492 33.3335 8.33325ZM16.6668 13.3333V6.66659H23.3335V13.3333C23.3335 15.1716 21.8385 16.6666 20.0002 16.6666C18.1618 16.6666 16.6668 15.1716 16.6668 13.3333ZM6.66683 8.33325C6.66683 7.41492 7.4135 6.66659 8.3335 6.66659H13.3335V13.3333C13.3335 15.1716 11.8385 16.6666 10.0002 16.6666L9.8185 16.6616C8.08183 16.5716 6.66683 14.9516 6.66683 13.0516V8.33325ZM16.6668 26.6666H10.0002V21.6666H16.6668V26.6666Z"
            fill="url(#paint0_linear_502:5271)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_502:5271"
              x1="20.0002"
              y1="3.33325"
              x2="20.0002"
              y2="34.9999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EA9769" />
              <stop offset="1" stop-color="#EA6969" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <div className="flex flex-col gap-y-4 items-end self-end">
        <div className="bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom">
          <button className="p-4 my-4 mr-4 ml-3 rounded-xl ">
            <img src="https://img.icons8.com/ios-glyphs/40/ffffff/home-page--v1.png" />{" "}
          </button>
        </div>
        <div className="hover:bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom">
          <button className="p-4 my-4 mr-4 ml-3 rounded-xl ">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/traffic-accident.png" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}