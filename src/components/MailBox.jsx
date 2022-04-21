import React from "react";
import AllMail from "./mailBody/AllMail";
import Menubar from "./menubar/Menubar";
import Navbar from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import SelectedMail from "./selectedMail/SelectedMail";

const MailBox = () => {
  return (
    <div> 
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "98vw",
        }}
      >
        <Menubar />
        <Routes>
          <Route path="/tag" element={<AllMail /> }></Route>
          <Route path="/" element={<AllMail />}></Route>
          <Route path="/query" element={<SelectedMail />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default MailBox;
