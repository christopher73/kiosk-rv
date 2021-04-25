import React from "react";
import logo from "./nccg_logo.png";
export const VideoCallScreen = () => {
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
      display: "flex",
      alignItems: "center",
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
      // width: 200,
      height: 100,
      fontSize: 50,
      borderRadius: 15,
      margin: 70,
      paddingLeft: 30,
      paddingRight: 30,
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
      <div style={style.mainText}>
        <div
          style={{
            borderRadius: 20,
            width: 40,
            height: 40,
            marginRight: 10,
            backgroundColor: "red",
          }}
        />{" "}
        Video Call Active{" "}
      </div>

      <div style={style.logo}>
        <img src={logo} style={{ width: 550, height: 150 }} alt="logo" />
      </div>
      <div style={style.image}></div>
      <div>
        <button style={style.buttons}>End Call</button>
      </div>
    </div>
  );
};
