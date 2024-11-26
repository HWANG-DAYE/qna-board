import React from "react";

function QuestionList() {
    const questions = [
        { users_id: 1, title: "도대체 언제 오나요? 내년에 오나요?", author: "risa"},
        { users_id: 2, title: "남이 입던 거 보냈나요?", author: "tom"},
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>QuestionList</h2>
        <ul>
            {questions.map((question) => (
                <li key={question.users_id} style={{ margin: "10px 0" }}>
                    <strong>{question.title}</strong> - {question.author}
                    </li>
            ))}
        </ul>
        </div>
    );
}

export default QuestionList;