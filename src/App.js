import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FAQPage from './pages/FAQPage';
import QuestionDetail from './pages/QuestionDetail';
import QuestionCreate from './pages/QuestionCreate';
import Header from "./components/Header";
import QuestionList from './components/QuestionList';
import FAQList from './components/FAQList';
import {QuestionProvider} from './context/QuestionContext';

function App() {
  return (
      <QuestionProvider>
      <Router>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/ask-list" element={<FAQList />} />
              <Route path="/question-list" element={<QuestionList />} />
              <Route path="/question-create" element={<QuestionCreate />} />
              <Route path="/questions/:id" element={<QuestionDetail />} />

          </Routes>
      </Router>
      </QuestionProvider>
  );
}

export default App;
