import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({ id, showPopup, setShowPopup }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele) => id === ele.id);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h4>Name: {singleUser[0].name}</h4>
        <h4>Email: {singleUser[0].email}</h4>
        <h4>Age: {singleUser[0].age}</h4>
        <h4>Gender: {singleUser[0].gender}</h4>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  );
};

export default CustomModal;
