import React, {createContext, useEffect, useState} from "react";

export const FAQContext = createContext();

export const FAQProvider = ({ children }) => {
    const [asks, setAsks] = useState([]);

    useEffect(() => {
        const storedQuestions = localStorage.getItem("asks");
        if (storedQuestions) {
            setAsks(JSON.parse(storedQuestions));
        }
    }, []);

    const addAsk = (newAsk) => {
        const updatedAsks = [...asks, newAsk];
        setAsks(updatedAsks);
        localStorage.setItem("asks",JSON.stringify(updatedAsks));
    };

    return (
        <FAQContext.Provider value={{ asks, addAsk }}>
            {children}
        </FAQContext.Provider>
    );
};