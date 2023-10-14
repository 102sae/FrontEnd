import React, { useState } from 'react';
import styles from "./Login.module.css"
import LoginTeam from "../../assets/images/login_team.svg"
import IconEmail from "../../assets/images/icon_email.svg"
import IconPassword from "../../assets/images/icon_password.svg"
import { Link } from 'react-router-dom';

const Login = ({ toggleForm, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // 실제 서버와 통신하여 로그인 처리
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // 로그인이 성공하면 다음 로직을 실행
        onLogin(); // 대시보드로 이동하거나 다른 작업을 수행할 수 있음
      } else {
        // 로그인 실패 처리
        console.error('로그인 실패:', data.message);
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
          <h3 className={styles.subtitle}>로그인</h3>

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

          <button className={styles.button} onClick={handleLogin}>로그인</button>
          <p>계정이 없다면? <Link to="/signup" className={styles.link}> 회원가입</Link>하기</p>
          <br/>
          <p><Link to="/intro" className={styles.link}>비회원으로 진행하기</Link></p>
          
      </div>
    </div>
      

      
  );
};

export default Login;
