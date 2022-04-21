import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom"; 
import { filterByCategory, getData } from "../mailRedux/action";
import "./allMail.css";

const AllMail = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const tagName = params.get("name"); 


  const { loading, data } = useSelector((store) => store.mailData);

  useLayoutEffect(()=>{
    if(tagName){
      dispatch(filterByCategory(tagName));
    }

  },[])

  useEffect(() => {
    fetchData(dispatch)();
  }, []);

  function fetchData(dispatch) {
    return () => {
      dispatch(getData(dispatch));
    };
  }
  return loading ? (
    <div style={{ textAlign: "center", width: "78vw" }}>
      <progress></progress>
    </div>
  ) : (
    <div id="mailBody" style={{ width: "80vw", textAlign: "left" }}>
      {data.map((mail) => {
        return (
          <div className="mailHeader" key={mail.id}>
            <Link
              to={`/query?id=${mail.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3 className="mailSubject">{mail.subject} </h3>
              <h5 className="mailBodyContent">{mail.body}</h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllMail;
