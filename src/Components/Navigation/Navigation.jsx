import React, { useEffect, useState } from "react";
import {
  FaBeer,
  FaSistrix,
  FaAcquisitionsIncorporated,
  FaStarAndCrescent,
  FaThLarge,
  FaRegBell,
} from "react-icons/fa";

const Navigation = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="navbar justify-between lg:flex bg-base-100">
      <div className="flex-none gap-2">
        <div className="flex flex-col justify-center items-center">
          <label
            htmlFor="my-drawer-2"
            className="btn  drawer-button lg:hidden flex flex-col justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="form-control">
          <div className="flex items-center gap-2 text-gray-600">
            <span
              onClick={() => window.my_modal_5.showModal()}
              className="text-2xl "
            >
              <FaSistrix></FaSistrix>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onClick={() => window.my_modal_5.showModal()}
            />
          </div>

          {/* Open the modal using ID.showModal() method */}

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
      <div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={1}
            className="flex cursor-pointer justify-center items-center  btn-circle"
          >
            <div className="w-10 text-2xl  rounded-full">
              <FaAcquisitionsIncorporated></FaAcquisitionsIncorporated>
            </div>
          </label>
          <ul
            tabIndex={1}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">English</a>
            </li>
            <li>
              <a>French</a>
            </li>
            <li>
              <a>Arabic</a>
            </li>
          </ul>
        </div>
        <div>
          <label className="cursor-pointer flex justify-center items-center ">
            <div onClick={toggleTheme} className="w-10 text-2xl  rounded-full">
              <FaStarAndCrescent></FaStarAndCrescent>
            </div>
          </label>
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={2}
            className="cursor-pointer flex justify-center items-center btn-circle"
          >
            <div className="w-10 text-2xl rounded-full">
              <FaThLarge></FaThLarge>
            </div>
          </label>
          <ul
            tabIndex={2}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={3}
            className="cursor-pointer flex justify-center items-center btn-circle"
          >
            <div className="w-10 text-2xl rounded-full">
              <FaRegBell></FaRegBell>
              <div className="rounded-full bg-red-500 w-2 h-2 absolute top-3 right-5"></div>
            </div>
          </label>
          <ul
            tabIndex={3}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-2/images/avatars/1.png" />
              <div className="rounded-full bg-green-500 w-2 h-2 absolute bottom-1 right-1"></div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
