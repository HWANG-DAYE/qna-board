import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const QuestionCreate = () => {
    const navigate = useNavigate();
    const [title, setTitle ] = useState("");
    const [content, setContent ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Title: ", title);
        console.log("Submitted Content: ", content);
        alert("문의 완료");
        navigate("/question-list")
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>문의 작성</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px"  }}>
                    <label>
                        제목
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ width: "80%", padding: "8px", marginTop: "5px" }}
                            placeholder="문의 제목을 입력하세요."
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        내용
                        <textarea
                            value={content}
                            onChange={ (e) => setContent(e.target.value)}
                            style={{ width: "80%", height: "100px", padding: "8px", marginTop: "5px" }}
                            placeholder="문의 내용을 입력하세요."
                            required
                        />
                    </label>
                </div>
                <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
                    제출
                </button>
                <button type="button" onClick={() => navigate("/question-list")}
                        style={{ padding: "10px 20px", marginLeft: "10px", cursor:"pointer"}}>
                    취소
                </button>
            </form>
        </div>
    );
};

export default QuestionCreate;