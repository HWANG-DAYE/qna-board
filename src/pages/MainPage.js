import FqAskedList from './pages/FqAskedList';
import QuestionList from './pages/QuestionList';

const MainPage = () => {

    return (
        <div style={{ padding:"20px" }}>
           <button>자주 묻는 질문</button>
           <button>문의하기</button>
           <div>
                <FqAskedList asks = {ask} />
           </div>
        </div>
    )
};

export default MainPage;