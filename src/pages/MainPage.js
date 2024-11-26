import FqAskedList from '../components/FqAskedList';
import QuestionList from '../components/QuestionList';

const MainPage = () => {
    const dummyQuestions = [
        { user_id: 1, title: '배송조회는 어떻게 하나요?'},
        { user_id: 2, title: '상품이 불량이에요'},
    ];
    return (
        <div style={{ padding:"20px" }}>
           <h1>Q&A Board</h1>
           <button src= './components/FqAskedList'>자주 묻는 질문</button>
           <button src= './components/QuestionList'>문의하기</button>
           <div>
                <QuestionList questions = {dummyQuestions} />
           </div>
        </div>
    );
};

export default MainPage;