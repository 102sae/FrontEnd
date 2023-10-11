import React, { useState } from 'react';
import styles from "./Signup.module.css"
import LoginTeam from "../../assets/images/login_team.svg"
import IconEmail from "../../assets/images/icon_email.svg"
import IconPassword from "../../assets/images/icon_password.svg"
import IconUser from "../../assets/images/icon_user.svg"
import { Link } from 'react-router-dom';

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
    <div className={styles.wrap}>
      <div className={styles.section1}>
        <h3 className={styles.subtitle}>두근두근!</h3>
        <h2 className={styles.title}>주식 프렌즈!</h2>
        <img src={LoginTeam} className={styles.LoginTeamImg} alt="로그인 팀" />
      </div>
      
      <div className={styles.section2}>
          <h3 className={styles.subtitle}>회원가입</h3>

          <div className={styles.inputBox}>
            <label>Name</label>
            <div className={styles.email}>
              <img src={IconUser} alt="닉네임 아이콘" />
              <input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </div>
          </div>

          <div className={styles.inputBox}>
            <label>Email</label>
            <div className={styles.email}>
              <img src={IconEmail} alt="이메일 아이콘" />
              <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className={styles.inputBox}>
            <label>Password</label>
            <div className={styles.password}>
              <img src={IconPassword} alt="비밀번호 아이콘" />
              <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          
          </div>
          <button onClick={handleSignup}>회원가입</button>
          
      </div>
    </div>
      

      
  );
};

export default Signup;
