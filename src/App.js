import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import MemberSave from './pages/member/MemberSave';
import Login from './pages/member/Login';
import MemberList from './pages/member/MemberList';
import MemberDetail from './pages/member/MemberDetail';
import BookSave from './pages/book/BookSave';
import BookList from './pages/book/BookList';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/memberSave" exact={true} element={<MemberSave />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/memberList" exact={true} element={<MemberList />} />
          <Route path="/memberDetail/:id" exact={true} element={<MemberDetail />} />
          <Route path="/bookSave" exact={true} element={<BookSave />} />
          <Route path="/bookList" exact={true} element={<BookList />} />
          <Route path="/about" exact={true} element={<About />} />          
        </Routes>
      </Container>
    </div>
  );
}

export default App;
