import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Member from '../../components/Member';

const MemberList = () => {

  const [members, setMembers] = useState([]); // 초기 값은 알 수 없으므로 빈 배열로 초기화

  // 함수 실행시 최초 한 번 실행되는것 []
  useEffect(() => {
    axios.get('http://localhost:18080/api/memberlist') // 비동기 함수
      .then((res) => {
        console.log("data: ", res.data)
        setMembers(res.data);
      })
      .catch((error) => {
        console.log('오류 발생!');
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>회원 리스트</h1>
      <div>
        {members.map((member) => (            
            <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MemberList;
