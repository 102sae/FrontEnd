import React, { useState } from "react";
import styles from "./Login.module.css";
import LoginTeam from "../../assets/images/login_team.svg";
import IconUser from "../../assets/images/icon_user.svg";
import IconPassword from "../../assets/images/icon_password.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const Login = ({ toggleForm, onLogin }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  // nickname input 값 변경 시 실행되는 함수
  const handleNickNameChange = (event) => {
    setNickname(event.target.value);
  };

  // password input 값 변경 시 실행되는 함수
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // form submit 시 실행되는 함수
  // Login 컴포넌트에서 로그인 성공 시 토큰 저장
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post("/member/login", {
  //       nickname: nickname,
  //       password: password,
  //     });

  //     // 토큰 값을 가져옴
  //     const { token } = response.data;

  //     // 토큰을 LocalStorage에 저장
  //     localStorage.setItem("token", token);

  //     // 로그인 성공 처리
  //     console.log("로그인 성공:", response.data);
  //     // "/" 로 이동
  //     navigate("/");
  //     // 새로고침
  //     window.location.reload();
  //     // 로그인 성공 시 다음 동작을 추가할 수 있습니다.
  //     // 예를 들면, 로그인 정보를 저장하고 홈페이지로 리다이렉트하는 등의 동작을 수행할 수 있습니다.
  //   } catch (error) {
  //     // 로그인 실패 처리
  //     console.error("로그인 실패:", error.response.data.reason);

  //     // 로그인 실패 시 사용자에게 알림을 보여줄 수 있습니다.
  //   }
  // };

  return (
    <div className={styles.wrap}>
      <div className={styles.section1}>
        <p className={styles.subtitle}>두근두근!</p>
        <p className={styles.title}>주식 프렌즈!</p>
        <img src={LoginTeam} className={styles.authImg} alt="로그인 팀" />
      </div>

      <div className={styles.section2}>
        <h3 className={styles.subtitle}>로그인</h3>
        {/* 로그인 제출 폼  onSubmit={handleFormSubmit}*/}
        <form>
          <label>Nickname</label>
          <div className={styles.nickname}>
            <img src={IconUser} alt="유저 아이콘" />
            <input
              id="nickname"
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={handleNickNameChange}
            />
          </div>

          <label>Password</label>
          <div className={styles.password}>
            <img src={IconPassword} alt="비밀번호 아이콘" />
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className={styles.button} type="submit">
            로그인
          </button>
        </form>

        <p>
          계정이 없다면?{" "}
          <Link to="/signup" className={styles.link}>
            {" "}
            회원가입
          </Link>
          하기
        </p>
        <br />
        <p>
          <Link to="/intro" className={styles.link}>
            비회원으로 진행하기
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
