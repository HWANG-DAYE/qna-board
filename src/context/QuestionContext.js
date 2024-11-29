import React, {createContext, useEffect, useState} from "react";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const storedQuestions = localStorage.getItem("questions");
        if (storedQuestions) {
            setQuestions(JSON.parse(storedQuestions));
        }
    }, []);

    const addQuestion = (newQuestion) => {
        const updatedQuestions = [...questions, newQuestion];
        setQuestions(updatedQuestions);
        localStorage.setItem("questions",JSON.stringify(updatedQuestions));
    };

    const deleteQuestion = (user_id) => {
        const updatedQuestions = questions.filter((question) => question.user_id !== user_id); // id로 삭제
        setQuestions(updatedQuestions);
        localStorage.setItem("questions", JSON.stringify(updatedQuestions)); // 로컬 스토리지 업데이트
    };

    return (
        <QuestionContext.Provider value={{ questions, addQuestion, deleteQuestion }}>
            {children}
        </QuestionContext.Provider>
    );
};