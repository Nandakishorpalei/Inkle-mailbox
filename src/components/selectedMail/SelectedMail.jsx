import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SelectedMail = () => {
  const [params, setParams] = useSearchParams();
  console.log("params:name", params.get("id"));
  const mailId = params.get("id");
  console.log("mailId:", mailId); 

  const { data, loading } = useSelector((store) => store.mailData);

  const customStyle = {
    backgroundColor: "aliceblue",
    textAlign: "left",
    width: "80vw",
  };

  return (
    <div style={{ textAlign: "left" }}>
      <Link to="/">
        <ArrowBackIcon />
      </Link>
      {data.map((mail) => {
        return mail.id == mailId ? (
          <div style={customStyle}>
            <samp>Subject: {mail.subject}</samp> <br />
            <samp>Body: {mail.body}</samp>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default SelectedMail;
