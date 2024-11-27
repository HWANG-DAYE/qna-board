import React from 'react';
import { useNavigate } from 'react-router-dom';
import FqAskedList from '../components/FqAskedList';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{padding: "20px"}}>
            <h1>Q&A Board</h1>
            <button onClick={() => navigate('/ask-list')}>자주 묻는 질문</button>
            <button onClick={() => navigate('/question-list')}>문의하기</button>
            <div>
                <FqAskedList />
            </div>
        </div>
    );
};

export default MainPage;
