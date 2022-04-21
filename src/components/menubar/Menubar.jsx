import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../mailRedux/action";
import { Link, useSearchParams } from "react-router-dom";
import "./menubar.css";

const Menubar = () => {
  const selectedTag = JSON.parse(localStorage.getItem("selectedTag"));
  const [params, setParams] = useSearchParams();
  const tagName = params.get("name");
  console.log("tagName:", tagName); 
  const [selected, setSelected] = useState(tagName || selectedTag || "all");


  let menuButtons = [
    { btn: "all", icon: <InboxIcon style={{ marginRight: "2vw" }} /> },
    { btn: "inbox", icon: <InboxIcon style={{ marginRight: "2vw" }} /> },
    { btn: "draft", icon: <DraftsIcon style={{ marginRight: "2vw" }} /> },
    { btn: "spam", icon: <InfoOutlinedIcon style={{ marginRight: "2vw" }} /> },
    { btn: "trash", icon: <DeleteIcon style={{ marginRight: "2vw" }} /> },
  ];

  const dispatch = useDispatch();

  function handleClick(option) {
    setSelected(option);
    dispatch(filterByCategory(option));
    localStorage.setItem("selectedTag", JSON.stringify(option));
  }

  let tagButtonStyle = {
    textDecoration: "none",
    color:"black"
  }

  return (
    <div id="menuBar">
      {menuButtons.map(({ btn, icon }) => {
        return (
          <Button
            variant="text"
            className="customButton"
            startIcon={icon}
            style={{
              color: "black",
              backgroundColor:
                selected === btn ? "#f8647a" : "rgb(243,243,243)",
              margin: "6px 0",
            }}
            onClick={() => handleClick(btn)}
          >
           <Link style={tagButtonStyle} to={`/tag?name=${btn}`}> {btn}</Link>
          </Button>
        );
      })}
    </div> 
  );
};

export default Menubar;
