import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FrequentlyAsked from './pages/FrequentlyAsked';
import QuestionDetail from './pages/QuestionDetail';
import QuestionCreate from './pages/QuestionCreate';
import Header from "./components/Header";
import QuestionList from './components/QuestionList';
import FqAskedList from './components/FqAskedList';
import {QuestionProvider} from './context/QuestionContext';

function App() {
  return (
      <QuestionProvider>
      <Router>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/ask-list" element={<FqAskedList />} />
              <Route path="/question-list" element={<QuestionList />} />
              <Route path="/question-create" element={<QuestionCreate />} />
              <Route path="/question-detail" element={<QuestionDetail />} />

          </Routes>
      </Router>
      </QuestionProvider>
  );
}

export default App;
