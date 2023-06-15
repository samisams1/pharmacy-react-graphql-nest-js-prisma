import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { OTP } from "../LoginOTP/OTP";
import { OtpBox } from "../LoginOTP/OtpBox";
import {handleModalClose, showLoginPage} from "../../Redux/Otp/action"
//import { OtpHeader } from "../LoginOTP/OtpHeader";

// Can be common component. For whole project this format of modal
export const ModalBox = () => {
  const [show, setShow] = React.useState(true);


  const { showlogin , modal} = useSelector((store) => store.otp);
  const modalIsOpen = modal;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   showLoginPage(dispatch);
  // }, []);


  return (
    <div>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: "1065px",
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            // height:'px',
            width: "30%",
            zIndex: 200,
          },
          content: {
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            // padding: '20px'
          },
        }}
        isOpen={modalIsOpen}
        // onRequestClose={}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
      >
        <div
          style={{
            width: "100%",
            fontSize: "50px",
            // position:'absolute',
            // left:'-30px'
            textAlign: "center",
            cursor: "pointer"
          }}
          onClick={()=>{
            handleModalClose(dispatch)
          }}
        >
          x
        </div>
        <div style={{ border: "2px solid black", width: "99%" }}>
        

          OtpHeader 

          <div>{showlogin ? <OTP /> : <OtpBox />}</div>
        </div>
      </Modal>
    </div>
  );
};