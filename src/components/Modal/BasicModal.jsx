import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";

export default function BasicModal({
  children,
  open = false,
  width = "200px",
  height = "200px",
  onClose = () => {},
}) {
  return (
    <div className="">
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "transparent",
        }}
      >
        <div
          className="bg-white shadow-md rounded-lg p-2 border-transparent"
          style={{ height, width }}
        >
          {children}
        </div>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  children: PropTypes.any,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
  height: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  width: PropTypes.string,
};
