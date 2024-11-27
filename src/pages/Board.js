import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import {QuestionContext} from "../context/QuestionContext";

function Board() {
    const navigate = useNavigate();
    const {questions} = useContext(QuestionContext);
return (
    <div style={{padding: "20px",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // minHeight: "50vh",
        // backgroundColor: "#f9f9f9"
    }}>
    </div>
)
};

export default Board;
