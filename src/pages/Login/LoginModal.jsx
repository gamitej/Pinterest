import React, { useState } from "react";
import PropTypes from "prop-types";
// img
import logo from "../../assests/logo-2.png";
// comp
import BasicModal from "../../components/Modal/BasicModal";
import Password from "../../components/Input/Password";
import InputTextField from "../../components/Input/InputTextField";

const LoginModal = ({ open, onClose, handleOpen }) => {
  // =========== USE_STATE HOOK ===============
  const [form, setForm] = useState({ username: "", password: "" });

  // =========== EVENT HANDLERS ===============
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <React.Fragment>
      <BasicModal
        open={open}
        handleOpen={handleOpen}
        onClose={onClose}
        height="50%"
        width="30rem"
      >
        <form
          className="flex flex-col justify-around items-center w-full h-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img alt="" src={logo} className="h-[3rem] w-[3rem]" />
            <h2 className="text-3xl font-semibold">Welcome to Pinterest</h2>
          </div>
          <InputTextField
            name="username"
            label="Username"
            placeholder="Enter username"
            onChange={handleChange}
            value={form.username}
          />
          <Password value={form.password} onChange={handleChange} />
          <button
            className="bg-red-500 hover:bg-red-600 rounded-full py-1 px-3 text-white font-semibold text-lg w-[80%]"
            type="submit"
          >
            login
          </button>
          <br />
        </form>
      </BasicModal>
    </React.Fragment>
  );
};

LoginModal.propTypes = {
  handleOpen: PropTypes.any,
  onClose: PropTypes.any,
  open: PropTypes.any,
};

export default LoginModal;
