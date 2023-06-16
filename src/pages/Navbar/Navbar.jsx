// img
import React, { useState } from "react";
import logo from "../../assests/logo.png";

// comp
import LoginModal from "../../pages/Login/LoginModal";

export default function ButtonAppBar() {
  // =========== USE_STATE HOOK ===============
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

  return (
    <React.Fragment>
      <div className="w-full flex justify-between items-center mr-2 h-[8vh]">
        {/* Title */}
        <div>
          <img src={logo} alt="logo" className="w-[11rem] h-[4rem]" />
        </div>
        {/* Buttons */}
        <div className="flex justify-around w-[12rem] items-center">
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
