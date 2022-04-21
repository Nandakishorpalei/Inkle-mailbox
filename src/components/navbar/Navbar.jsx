import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import "./navbar.css";
import { useDispatch } from "react-redux";
import { filterByQuery } from "../mailRedux/action";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()

  function handleChange(e){
    setQuery(e.target.value);
  }

  useEffect(()=>{
    dispatch(filterByQuery(query))
  },[query])

 

  return (
    <div id="navbarContainer">
    <div id="navbarLeft">
      <div id="logo">
        <MenuIcon />
        <img
          className="gmailLogo"  
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="logo"
        />
      
      </div>

      <div id="searchbar">
        <div className="searchBarLeft">
          <SearchIcon />
          <input className="searchBox" type="text"  name="query" value={query}
           onChange={handleChange} placeholder="Search mail" />
        </div>
        <TuneIcon />
      </div>
      </div>

      <div id="navOptions">
        <HelpOutlineIcon />
        <SettingsIcon />
        <AppsIcon />
      </div>
    </div>
  );
};

export default Navbar;
