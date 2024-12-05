import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const QuestionEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/questions/${id}`)
            .then(response => {
                const { author, title, content } = response.data;
                setAuthor(author);
                setTitle(title);
                setContent(content);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching question:", error);
                setIsLoading(false);
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedQuestion = { author, title, content };
        axios.put(`/api/questions/${id}`, updatedQuestion)
            .then(() => {
                alert("Question updated successfully!");
                navigate(`/questions/${id}`);
            })
            .catch(error => console.error("Error updating question:", error));
    };

    if (isLoading) {
        return <p>Loading...</p>; // 로딩 상태 표시
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh"
        }}>
            <div style={{
                width: "1300px",
                padding: "20px"
            }}>
                <form onSubmit={handleUpdate}>
                    <div style={{ marginBottom: "10px" }}>
                        <label style={{ display: "block", marginBottom: "20px" }}>
                            작성자
                            <input
                                type="text"
                                value={author || ""}
                                onChange={(e) => setAuthor(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    boxSizing: "border-box",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc"
                                }}
                            />
                        </label>
                        <label style={{ display: "block", marginBottom: "10px" }}>
                            제목
                            <input
                                type="text"
                                value={title || ""}
                                onChange={(e) => setTitle(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    boxSizing: "border-box",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc"
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label style={{ display: "block", marginBottom: "10px" }}>
                            내용
                            <textarea
                                value={content || ""}
                                onChange={(e) => setContent(e.target.value)}
                                style={{
                                    width: "100%",
                                    height: "100px",
                                    padding: "10px",
                                    boxSizing: "border-box",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc"
                                }}
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
                    <button type="button" onClick={() => navigate("/")}
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

export default QuestionEdit;
