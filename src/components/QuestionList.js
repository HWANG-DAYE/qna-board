import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../context/QuestionContext';


function QuestionList() {
    const navigate = useNavigate();
    const { questions } = useContext(QuestionContext);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Question List</h2>
            <button onClick={() => navigate('/question-create')}>문의하기</button>
            <ul>
                {questions.map((question, index) => (
                    <li key={index} style={{margin: "10px 0"}}>
                        <strong>{question.title}</strong> - {question.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionList;