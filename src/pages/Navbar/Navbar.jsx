// img
import React, { useEffect, useState } from "react";
import logo from "../../assests/logo.png";

// comp
import LoginModal from "../../pages/Login/LoginModal";
import { useLogin } from "../../store/login/useLogin";
import { Autocomplete, TextField } from "@mui/material";

export default function ButtonAppBar() {
  // =========== STATES===============
  const { isLoggined, setLogout } = useLogin();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("login");

  // =========== EVENT HANDLERS ===============

  const handleLogin = () => {
    setOpen(!open);
    setName(() => "login");
  };

  const handleSignUp = () => {
    setOpen(!open);
    setName(() => "sign up");
  };

  // =========== USE-EFFECT ===============

  useEffect(() => {
    setOpen(false);
  }, [isLoggined]);

  return (
    <React.Fragment>
      <div className="w-full flex justify-between items-center h-[12vh]">
        {/* Title */}
        <div>
          <img src={logo} alt="logo" className="w-[11rem] h-[4rem]" />
        </div>

        {/* Search Bar */}
        {isLoggined && (
          <div className="w-[35rem]">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border
         border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-around w-[12rem] items-center  mr-2">
          {!isLoggined && (
            <>
              <button
                className="bg-red-500 hover:bg-red-600 rounded-full py-2 px-4 text-white font-semibold text-lg"
                onClick={handleLogin}
              >
                Log in
              </button>
              <button
                className="bg-slate-200 hover:bg-slate-400 rounded-full py-2 px-4 font-semibold text-lg"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </>
          )}
          {isLoggined && (
            <>
              <button
                onClick={setLogout}
                className="bg-red-500 hover:bg-red-600 rounded-full py-2 px-4 text-white font-semibold text-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
      {/* Modal */}
      <LoginModal
        open={open}
        handleOpen={handleLogin}
        setOpen={() => setOpen(!open)}
        buttonLabel={name}
      />
    </React.Fragment>
  );
}
