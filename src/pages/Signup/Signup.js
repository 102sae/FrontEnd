import React, { useState } from "react";
import styles from "./Signup.module.css";
import LoginTeam from "../../assets/images/login_team.svg";
import IconUser from "../../assets/images/icon_user.svg";
import IconPassword from "../../assets/images/icon_password.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = ({ toggleForm, onSignup }) => {
  const [signupData, setSignupData] = useState({
    nickName: "",
    password: "",
    gender: "",
    age: "",
    investCareerYear: "",
  });

  // nickname input 값 변경 시 실행되는 함수
  const handleNickNameChange = (event) => {
    setSignupData({ ...signupData, nickName: event.target.value });
  };

  // password input 값 변경 시 실행되는 함수
  const handlePasswordChange = (event) => {
    setSignupData({ ...signupData, password: event.target.value });
  };

  const postSignupData = async () => {
    try {
      const response = await axios.post(
        "http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com/api/member/signin",
        signupData
      );

      setSignupData({
        nickName: "",
        password: "",
        gender: "",
        age: "",
        investCareerYear: "",
      });

      const { success, message, data } = response.data;
      alert("회원가입 성공:", success);
      alert("회원가입 성공");
    } catch (error) {
      console.error("회원가입 실패 ", error.response.data.message);
      alert(error);
      alert(signupData);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.section1}>
        <h3 className={styles.subtitle}>두근두근!</h3>
        <h2 className={styles.title}>주식 프렌즈!</h2>
        <img src={LoginTeam} className={styles.authImg} alt="로그인 팀" />
      </div>

      <div className={styles.section2}>
        <h3 className={styles.subtitle}>회원가입</h3>
        <form onSubmit={postSignupData}>
          <label>Name</label>
          <div className={styles.nickname}>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={handleNickNameChange}
            />
          </div>

          <label>Password</label>
          <div className={styles.password}>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePasswordChange}
            />
          </div>

          <label>나이</label>
          <div className={styles.selectBox}>
            <select
              onChange={(e) => {
                setSignupData({ ...signupData, age: e.target.value });
              }}
            >
              <option selected>나이</option>
              <option value={10}>10대</option>
              <option value={20}>20대</option>
              <option value={30}>30대</option>
              <option value={40}>40대</option>
              <option value={50}>50대</option>
              <option value={60}>60대 이상</option>
            </select>
          </div>

          <label>투자 경험</label>
          <div className={styles.selectBox}>
            <select
              onChange={(e) => {
                setSignupData({
                  ...signupData,
                  investCareerYear: e.target.value,
                });
              }}
            >
              <option selected>투자 경험</option>
              <option value={1}>1년 이하</option>
              <option value={2}>2년 ~5년차</option>
              <option value={3}>5년 이상</option>
            </select>
          </div>

          <label>성별</label>
          <fieldset className={styles.gender}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Man"
                checked
                onChange={(e) => {
                  setSignupData({ ...signupData, gender: e.target.value });
                }}
              />
              <span>남자</span>
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Women"
                onChange={(e) => {
                  setSignupData({ ...signupData, gender: e.target.value });
                }}
              />
              <span>여자</span>
            </label>
          </fieldset>

          <button className={styles.button} type="submit">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;