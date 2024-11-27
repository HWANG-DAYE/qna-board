import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../context/QuestionContext';
import Header from "./Header";


function QuestionList() {
    const navigate = useNavigate();
    const { questions } = useContext(QuestionContext);

    return (
        <div style={{ listStyle: "none", padding: "20px" }}>
            <h2>Question List</h2>
            <button onClick={() => navigate('/question-create')}>작성</button>
            <ul>
                {questions.map((question) => (
                    <li key={question.user_id}
                        style={{margin: "10px 0", cursor: "pointer"}}
                        onClick={() => navigate(`/questions/${question.user_id}`)}
                    >
                        <strong>{question.title}</strong> - {question.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionList;