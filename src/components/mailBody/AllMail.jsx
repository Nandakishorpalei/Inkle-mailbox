import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../mailRedux/action';
import "./allMail.css"

const AllMail = () => {

    const dispatch = useDispatch();
    const {loading, data} = useSelector((store) => store.mailData)
    console.log('data:', data)

    useEffect(()=>{
     fetchData(dispatch)()
    },[])

    function fetchData(dispatch){
        return ()=>{
            dispatch(getData(dispatch))
        }
    }
    return loading ? <div style={{textAlign:"center", width: "78vw"}}><progress></progress></div> : (
        <div id="mailBody" style={{width: "80vw", textAlign:"left"}}>
            {data.map((mail)=>{
                return (
                    <div className="mailHeader" key={mail.id}>
                    <Link to={`/query?id=${mail.id}`} style={{textDecoration:"none",color:"black"}}>
                <span className='mailSubject'>{mail.subject} </span>
                - {mail.body}
                </Link>
                </div>
                )
            })}
        </div>
    );
};

export default AllMail;