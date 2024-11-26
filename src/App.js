import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FrequentlyAsked from './pages/FrequentlyAsked';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/asks/:no" element={<FrequentlyAsked />} />
        <Route path="/questions/:users_id" element={<QuestionPage />
      } />
      </Routes>
    </Router>
  );
}

export default App;
