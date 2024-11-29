import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/QuestionContext";

const QuestionDetail = () => {
    const { id } = useParams();
    const { questions, deleteQuestion } = useContext(QuestionContext);
    const navigate = useNavigate();

    const question = questions.find((question) => question.user_id === parseInt(id));

    const handleDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            deleteQuestion(parseInt(id));
            navigate("/");
        }
    };

    if (!question) {
        return <p style={{ textAlign: "center", color: "#888" }}>질문을 찾을 수 없습니다.</p>;
    }

    return (
        <div style={{
            maxWidth: "600px",
            margin: "50px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#ffffff",
        }}>
            <h2 style={{ marginBottom: "20px", color: "#333", fontSize: "24px" }}>{question.title}</h2>
            <p style={{ marginBottom: "10px", color: "#555" }}>
                <strong>작성일:</strong> {question.date} {question.time}
            </p>
            <p style={{ marginBottom: "10px", color: "#555" }}>
                <strong>작성자:</strong> {question.author}
            </p>
            <p style={{ marginBottom: "20px", color: "#555", lineHeight: "1.6" }}>
                <strong>내용:</strong> {question.content}
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    뒤로가기
                </button>
                <button
                    onClick={() => navigate("/")}
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#007BFF",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    수정
                </button>
                <button
                    onClick={handleDelete}
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#FF6B6B",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    삭제
                </button>
            </div>
        </div>
    );
};

export default QuestionDetail;
