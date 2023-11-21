import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { BiSolidBookAdd, BiSolidContact } from "react-icons/bi";
import { GiAbstract042, GiNotebook } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";

const navItems = [
  { name: "صفحه اصلی", icon: <AiFillHome />, href: "/" },
  {
    name: "ثبت نوبت آزمایشگاه و پژوهشسرا",
    icon: <BiSolidBookAdd />,
    href: "/novbat",
  },
  {
    name: "مسابقات",
    icon: <GiAbstract042 />,
    href: "/mosabeghe",
  },
  {
    name: "مطالب آموزشی",
    icon: <GiNotebook />,
    href: "/learning",
  },
  {
    name: "تماس با ما",
    icon: <BiSolidContact />,
    href: "/contact",
  },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(
    function () {
      darkMode
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    },
    [darkMode]
  );

  return (
    <nav
      style={{
        backgroundColor: "#003269",
        borderBottom: "4px solid #02bfbb",
      }}
      className=" border-b w-full"
    >
      <div className="relative h-16 w-full  flex justify-between items-center mx-auto px-4 text-white">
        <button
          className=" rounded-full lg:hidden hover:bg-slate-200 hover:text-black text-2xl border p-2  duration-500"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FiMenu />
        </button>

        <div className="hidden items-center h-full lg:flex">
          <div className="flex items-center h-full gap-4 mr-12">
            {navItems.map((item) => (
              <NavLink
                to={item.href}
                key={item.name}
                className={({ isActive }) => {
                  return (
                    " duration-300 flex gap-2 px-4 items-center relative h-full border-b-2" +
                    (isActive
                      ? "text-blue-500 border-blue-500 "
                      : " text-slate-200 hover:text-blue-500  border-transparent ")
                  );
                }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex gap-2 items-center">
            <p>{darkMode ? "پوسته تاریک" : "پوسته روشن"}</p>
            <DarkMode
              darkMode={darkMode}
              handleChange={() => setDarkMode(!darkMode)}
            />
          </div>
          <img
            src={logo}
            alt="پژوهشسرای دانش آموزش شهرستان ورزنه"
            className="justify-end h-16 object-contain w-auto"
          />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-black bg-opacity-50 backdrop-blur-sm h-screen fixed inset-0 z-50">
          <div
            style={{
              backgroundColor: "#003269",
              borderRight: "4px solid #02bfbb",
            }}
            className="w-[90%] max-w-[360px] h-full text-white p-4"
          >
            <div className="flex items-center justify-between border-b pb-3">
              <img src={logo} alt="" className="h-16 object-contain" />
              <button onClick={() => setMobileMenuOpen(false)}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-12">
              {navItems.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.name}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => {
                    return (
                      " rounded-md duration-300 flex gap-2 px-4 items-center text-2xl bg-slate-950 py-2" +
                      (isActive
                        ? "text-blue-400 bg-blue-700"
                        : " text-slate-200 ")
                    );
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
