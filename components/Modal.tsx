import React from "react";
import ReactMOdal from "react-modal";
interface props {
  isOpen: boolean;
}
import { signIn } from "next-auth/react";
const Modal = ({ isOpen }: props) => {
  return (
    <ReactMOdal
      isOpen={isOpen}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#00000080",
          zIndex: "9999",
        },
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          zIndex: "9999",
        },
      }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <p className="text-center text-2xl font-bold">
          Please first login with google account
        </p>
        <button className="px-5 mt-5 rounded-lg py-2 font-medium bg-[#0096f5] hover:bg-blue-500 transition-all text-white" onClick={() => signIn()}>Sign in</button>
      </div>
    </ReactMOdal>
  );
};

export default Modal;
