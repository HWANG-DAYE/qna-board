import React, {  useEffect,useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../context/QuestionContext';
import axios from "axios";

function QuestionList() {
    const navigate = useNavigate();
    const { questions, setQuestions } = useContext(QuestionContext);

    useEffect(() => {
        axios.get("/api/questions/sorted")
            .then(response => {
                setQuestions(response.data); // 응답에 'questions_id' 필드가 포함된다고 가정
            })
            .catch(error => {
                console.error("Error fetching questions:", error);
            });
    }, []);

    const sortedQuestions = [...questions].sort((a, b) => {
        // 날짜와 시간을 조합하여 비교
        const dateTimeA = new Date(`${a.date} ${a.time}`);
        const dateTimeB = new Date(`${b.date} ${b.time}`);

        // 최신순 (내림차순)으로 정렬
        return dateTimeB - dateTimeA;
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
                        key={question.questions_id}
                        style={{
                            borderBottom: "1px solid #ddd",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(`/questions/${question.questions_id}`)}
                    >
                        <td style={{padding: "10px"}}>{question.questions_id}</td>
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