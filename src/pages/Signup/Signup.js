import React, { useState } from 'react';

const Signup = ({ toggleForm, onSignup }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // 실제 서버와 통신하여 회원가입 처리
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // 회원가입이 성공하면 다음 로직을 실행
        onSignup(); // 대시보드로 이동하거나 다른 작업을 수행할 수 있음
      } else {
        // 회원가입 실패 처리
        console.error('회원가입 실패:', data.message);
      }
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>회원가입</button>
      <p onClick={toggleForm}>이미 계정이 있으신가요? 로그인으로 이동</p>
    </div>
  );
};

export default Signup;
