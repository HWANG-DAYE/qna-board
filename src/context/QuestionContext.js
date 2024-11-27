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

    return (
        <QuestionContext.Provider value={{ questions, addQuestion }}>
            {children}
        </QuestionContext.Provider>
    );
};