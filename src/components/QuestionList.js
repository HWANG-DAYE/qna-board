import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../context/QuestionContext';

function QuestionList() {
    const navigate = useNavigate();
    const { questions } = useContext(QuestionContext);

    return (
        <div style={{padding: "10px"}}>
            <strong>
            대표전화1599 - 2785
            <br/>
            업무시간 평일 10:00 - 17:00
            <br/>
            점심시간 12:30 - 13:30
            <br/>
            (주말 및 공휴일휴무)
            </strong>
            <button onClick={() => navigate('/question-create')}
                    style={{
                        float: "right",
                        marginBottom: "20px",
                        padding: "10px 15px",
                        backgroundColor: "#FFD700",
                        color: "#000000",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}>작성하기
            </button>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "left",
                }}
            >
                <thead>
                <tr style={{borderBottom: "2px solid #ddd", backgroundColor: "#f8f9fa"}}>
                    <th style={{padding: "10px"}}>ID</th>
                    <th style={{padding: "10px"}}>제목</th>
                    <th style={{padding: "10px"}}>작성자</th>
                    <th style={{padding: "10px"}}>작성일</th>
                </tr>
                </thead>
                <tbody>
                {questions.map((question) => (
                    <tr
                        key={question.user_id}
                        style={{
                            borderBottom: "1px solid #ddd",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(`/questions/${question.user_id}`)}
                    >
                        <td style={{padding: "10px"}}>{question.user_id}</td>
                        <td style={{padding: "10px"}}>{question.title}</td>
                        <td style={{padding: "10px"}}>{question.author}</td>
                        <td style={{padding: "10px"}}>{question.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default QuestionList;