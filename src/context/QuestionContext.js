import React, { createContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [questions, setQuestions] = useState([
        { users_id: 1, title: "도대체 언제 오나요? 내년에 오나요?", author: "risa"},
        { users_id: 2, title: "남이 입던 거 보냈나요?", author: "tom"},
    ]);

    const addQuestion = (newQuestion) => {
        setQuestions((prevStations) => [...prevStations, newQuestion]);
    };

    return (
        <QuestionContext.Provider value={{ questions, addQuestion }}>
            {children}
        </QuestionContext.Provider>
    );
};