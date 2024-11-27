import React, {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../context/QuestionContext';

const QuestionCreate = () => {
    const navigate = useNavigate();
    const { addQuestion } = useContext(QuestionContext);
    const [title, setTitle ] = useState("");
    const [content, setContent ] = useState("");
    const [author, setAuthor ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = {
            user_id: Date.now(),
            author,
            title,
            content,
        };
        addQuestion(newQuestion);
        alert("문의 완료");
        navigate("/question-list")
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh"
        }}>
            <div style={{
                width: "1300px", // 폼의 고정 너비
                padding: "20px"
            }}>
                <h2>문의 작성</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{marginBottom: "10px"}}>
                        <label style={{display: "block", marginBottom: "20px"}}>
                            작성자
                            <input
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    boxSizing: "border-box",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc"
                                }}
                                placeholder="작성자명"
                                required
                            />
                        </label>
                        <label style={{display: "block", marginBottom: "10px"}}>
                            제목
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    boxSizing: "border-box",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc"
                                }}
                                placeholder="문의 제목을 입력하세요."
                                required
                            />
                        </label>
                    </div>
                    <div style={{marginBottom: "10px"}}>
                        <label style={{display: "block", marginBottom: "10px"}}>
                            내용
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                style={{
                                    width: "100%",
                                    height: "100px",
                                    padding: "10px",
                                    boxSizing: "border-box",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc"
                                }}
                                placeholder="문의 내용을 입력하세요."
                                required
                            />
                        </label>
                    </div>
                    <button type="submit"
                            style={{
                                padding: "10px 20px",
                                cursor: "pointer",
                                backgroundColor: "#007BFF",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                marginRight: "10px"
                            }}
                    >
                        제출
                    </button>
                    <button type="button" onClick={() => navigate("/question-list")}
                            style={{
                                padding: "10px 20px",
                                cursor: "pointer",
                                backgroundColor: "#6c757d",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px"
                            }}
                    >
                        취소
                    </button>
                </form>
            </div>
        </div>

            );
            };

            export default QuestionCreate;