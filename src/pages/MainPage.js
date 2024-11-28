import React, {useState} from 'react';
import FAQList from '../components/FAQList';
import QuestionList from '../components/QuestionList';
import Header from "../components/Header";

const MainPage = () => {
    const [activeTab, setActiveTab] = useState("FAQ")
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div style={{ padding: "20px" }}>
            <Header />
            <div style={{display: "flex", marginBottom: "20px"}}>
                <button
                    onClick={() => handleTabClick("FAQ")}
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        backgroundColor: activeTab === "FAQ" ? "#000000" : "#f0f0f0",
                        color: activeTab === "FAQ" ? "#fff" : "#000000",
                        border: "1px solid #ddd",
                        borderRadius: "4px 4px 0 0",
                        marginRight: "10px",
                    }}
                >
                    자주 묻는 질문
                </button>
                <button
                    onClick={() => handleTabClick("question")}
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        backgroundColor: activeTab === "question" ? "#000000" : "#f0f0f0",
                        color: activeTab === "question" ? "#fff" : "#000000",
                        border: "1px solid #ddd",
                        borderRadius: "4px 4px 0 0",
                    }}
                >
                    문의하기
                </button>
            </div>
            <div
                style={{
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "0 4px 4px 4px",
                    backgroundColor: "#fff",
                }}
            >
                {activeTab === "FAQ" && <FAQList/>}
                {activeTab === "question" && <QuestionList/>}
            </div>
        </div>
    );
};

export default MainPage;
