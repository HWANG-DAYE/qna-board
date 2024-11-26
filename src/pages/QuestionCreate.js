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
        <div style={{ padding: "20px" }}>
            <h2>문의 작성</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px"  }}>
                    <label>
                        작성자
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ width: "30%", padding: "8px", marginTop: "5px" }}
                            placeholder="작성자명"
                            required
                        />
                    </label>
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