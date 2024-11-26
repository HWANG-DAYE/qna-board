import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FrequentlyAsked from './pages/FrequentlyAsked';
import QuestionPage from './pages/QuestionPage';
import QuestionCreate from './pages/QuestionCreate';
import Header from "./components/Header";
import QuestionList from './components/QuestionList';
import FqAskedList from './components/FqAskedList';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/ask-list" element={<FqAskedList />} />
              <Route path="/question-list" element={<QuestionList />} />
              <Route path="/question-create" element={<QuestionCreate />} />

          </Routes>
      </Router>

  );
}

export default App;
