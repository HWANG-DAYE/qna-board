import React from 'react';
import { useNavigate } from 'react-router-dom';
import FqAskedList from '../components/FqAskedList';

const MainPage = () => {
    const navigate = useNavigate();

    const dummyQuestions = [
        { user_id: 1, title: '배송조회는 어떻게 하나요?' },
        { user_id: 2, title: '상품이 불량이에요' },
    ];

    return (
        <div style={{padding: "20px"}}>
            <h1>Q&A Board</h1>
            <button onClick={() => navigate('/ask-list')}>자주 묻는 질문</button>
            <button onClick={() => navigate('/question-list')}>문의하기</button>
            <div>
                <FqAskedList asks={dummyQuestions}/>
            </div>
        </div>
    );
};

export default MainPage;
