import React, { useState } from "react";

const FAQList = () => {
    // 질문과 답변 데이터
    const questions = [
        { no: 1, Fquestion: "React란 무엇인가요?", Fanswer: "React는 UI를 만들기 위한 JavaScript 라이브러리입니다." },
        { no: 2, Fquestion: "useState란?", Fanswer: "React에서 상태를 관리하기 위한 훅(Hook)입니다." },
        { no: 3, Fquestion: "props란?", Fanswer: "React 컴포넌트 간 데이터를 전달하기 위한 객체입니다." },
    ];

    // 열리고 닫힘 상태를 관리하기 위한 상태값
    const [openQuestionId, setOpenQuestionId] = useState(null);

    // 질문 클릭 시 상태 변경 함수
    const toggleAnswer = (no) => {
        setOpenQuestionId((prevId) => (prevId === no ? null : no));
    };

    return (
        <div style={{ padding: "20px"}}>
            <h2>자주 묻는 질문</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {questions.map((item) => (
                    <li key={item.no} style={{ marginBottom: "20px" }}>
                        <button
                            onClick={() => toggleAnswer(item.no)}
                            style={{
                                display: "block",
                                width: "100%",
                                textAlign: "left",
                                backgroundColor: "#f8f9fa",
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                                padding: "10px",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                        >
                            {item.no} . {item.Fquestion}
                        </button>
                        {openQuestionId === item.no && (
                            <p
                                style={{
                                    marginTop: "10px",
                                    padding: "10px",
                                    backgroundColor: "#f1f1f1",
                                    borderRadius: "4px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {item.Fanswer}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQList;
