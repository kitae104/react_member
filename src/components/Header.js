import React from 'react';
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            React
          </Link>
          <Nav className="me-auto">
            <Link to="/memberSave" className="nav-link">
              회원가입
            </Link>
            <Link to="/login" className="nav-link">
              로그인
            </Link>
            <Link to="/memberList" className="nav-link">
              회원 리스트
            </Link>
            <Link to="/bookSave" className="nav-link">
              책등록
            </Link>
            <Link to="/bookList" className="nav-link">
              책 리스트
            </Link>
            <Link to="/about" className="nav-link">
              about
            </Link>
          </Nav>
          <Form inline>
            <Row>
              <Col xs="auto">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button variant="outline-info">Search</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Header;
