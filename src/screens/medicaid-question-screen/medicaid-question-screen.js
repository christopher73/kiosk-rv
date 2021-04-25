import React from "react";
import medicare from "./medicaid.jpg";
import logo from "./nccg_logo.png";
export const MedicaidQuestionScreen = () => {
  const style = {
    container: {
      height: 1920,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#D4F1F4",
    },
    mainText: {
      fontSize: 60,
      textAlign: "center",
      marginTop: 40,
      marginBottom: 100,
    },
    image: {
      width: 600,
      height: 400,
    },
    buttons: {
      width: 200,
      height: 100,
      fontSize: 50,
      borderRadius: 15,
      margin: 70,
    },
    buttonsText: {
      fontSize: 50,
    },
    logo: {
      position: "absolute",
      left: 50,
      top: 50,
    },
  };
  return (
    <div style={style.container}>
      <div style={style.logo}>
        <img src={logo} style={{ width: 550, height: 150 }} alt="logo" />
      </div>

      <h1 style={style.mainText}>Do you have a Medicaid Card ?</h1>
      <img style={style.image} src={medicare} alt="medicare" />
      <div>
        <button style={style.buttons}>Yes</button>
        <button style={style.buttons}>No</button>
      </div>
    </div>
  );
};
