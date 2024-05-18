import React from 'react';
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const setInputUsername = (e) => {
    setInputId(e.target.value);
  };

  const setInputPassword = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log('ID: ' + inputId + ', PW: ' + inputPw);

    axios
      .post('http://localhost:8080/api/login', {
        memberEmail: inputId,
        memberPassword: inputPw,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          console.log('로그인 성공');
          navigate('/memberList');
        } else {
          console.log('로그인 실패');
        }
      })
      .catch((error) => {
        console.log('로그인 실패');
        console.log(error);
      });
  };

  return (
    <div>
      <Container style={{ width: '60%' }}>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="text"
            placeholder="이메일을 입력하세요."
            onChange={setInputUsername}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>패스워드</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={setInputPassword}
            required
          />
        </Form.Group>
        <div className="mb-2"></div>
        <Button className="w-100" variant="primary" onClick={onClickLogin}>
          로그인
        </Button>
      </Container>
    </div>
  );
};

export default Login;
