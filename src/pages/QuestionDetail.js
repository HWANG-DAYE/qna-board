import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/QuestionContext";

const QuestionDetail = () => {
    const { id } = useParams();
    const { questions } = useContext(QuestionContext);
    const navigate = useNavigate();
    
    const question = questions.find((question) = question.user_id === parseInt(id));
    
    if (!question) {
        return <p>질문을 찾을 수 없습니다.</p>;
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>{question.title}</h2>
            <p><strong>작성자: </strong> {question.author}</p>
            <p><strong>내용: </strong></p>
            <p>{question.content}</p>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    )
};

export default QuestionDetail;