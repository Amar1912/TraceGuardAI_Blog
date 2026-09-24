import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white bg-robotic-grid robotic-glow text-[#18181B] flex flex-col font-sans selection:bg-[#FCE7F3] selection:text-[#EC4899]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<BlogPost />} />
            <Route path="/blog" element={<Navigate to="/" replace />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
