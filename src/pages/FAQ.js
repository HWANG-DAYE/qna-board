import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FAQContext } from "../context/FAQContext";

const FAQ = () => {
    const { id } = useParams();
    const { asks } = useContext(FAQContext);
    const navigate = useNavigate();

    const ask = asks.find((ask) => ask.no === parseInt(id));


    return (
        <div style={{padding: "20px"}}>
            <h2>{ask.title}</h2>
            <p><strong>내용: </strong></p>
            <p>{ask.content}</p>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    );
};

export default FAQ;