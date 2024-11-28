import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../context/QuestionContext';

function QuestionList() {
    const navigate = useNavigate();
    const { questions } = useContext(QuestionContext);

    // 최신순으로 정렬
    const sortedQuestions = [...questions].sort((a, b) => {
        // 날짜를 기준으로 내림차순 정렬 (가장 최근 날짜가 맨 위)
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <div style={{ padding: "10px"}}>
            <img
                src={`${process.env.PUBLIC_URL}/qna-icon.png`}
                alt="Q&A Icon"
                style={{float: "left", width: "100px", height: "100px", marginLeft: "50px"}}
            />
            <strong style={{display: "block", textAlign: "center", margin: "10px 0"}}>
                대표전화 1996-0109
                <br/>
                업무시간 평일 10:00 - 17:00
                <br/>
                점심시간 12:00 - 13:00
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
                {sortedQuestions.map((question) => (
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