import React from 'react';
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MemberSave = () => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState(0);
  const [inputMobile, setInputMobile] = useState('');

  const setInputUserId = (e) => {
    setInputId(e.target.value);
  };

  const setInputUserPassword = (e) => {
    setInputPw(e.target.value);
  };

  const setInputUserName = (e) => {
    setInputName(e.target.value);
  };

  const setInputUserAge = (e) => {
    setInputAge(e.target.value);
  };

  const setInputUserMobile = (e) => {
    setInputMobile(e.target.value);
  };

  const onClickSave = () => {
    console.log('id: ' + inputId + ', pw: ' + inputPw + ', name: ' + inputName + ', age: ' + inputAge + ', mobile: ' + inputMobile)

    axios
      .post('http://localhost:8080/api/membersave', {
        memberEmail: inputId,
        memberPassword: inputPw,
        memberName: inputName,
        memberAge: inputAge,
        memberMobile: inputMobile,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data > 0) {
          console.log('회원 가입 성공');
          navigate('/login');
        } else {
          console.log('회원 가입 실패');
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
            onChange={setInputUserId}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>패스워드</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={setInputUserPassword}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력하세요."
            onChange={setInputUserName}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>나이</Form.Label>
          <Form.Control
            type="number"
            placeholder="나이를 입력하세요."
            onChange={setInputUserAge}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="text"
            placeholder="전화번호를 입력하세요."
            onChange={setInputUserMobile}
            required
          />
        </Form.Group>

        <div className="mb-4"></div>

        <Button className="w-100" variant="primary" onClick={onClickSave}>
          회원 가입
        </Button>
      </Container>
    </div>
  );
};

export default MemberSave;
