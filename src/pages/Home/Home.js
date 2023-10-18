import React from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import FriendSelectBox from "../../componets/FriendSelectBox";
import Lay from "../../assets/images/Lay/lay_default.png";
import LaySmile from "../../assets/images/Lay/lay_smile.png";
import Layname from "../../assets/images/Lay/lay_name.png";
import Molly from "../../assets/images/Molly/molly_default.png";
import MollySmile from "../../assets/images/Molly/molly_smile.png";
import Mollyname from "../../assets/images/Molly/molly_name.png";
import NoticeBox from "../../componets/NoticeBox";

const Home = () => {
  //게임 시작 POST API
  const postGameStart = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // 요청 데이터 (비어있는 객체 또는 필요한 데이터를 넣을 수 있음)
      const requestData = {};
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_PORT}/api/term-quiz/start`,
        requestData,
        {
          headers: headers,
        }
      );

      console.log("게임 시작", response.data);
      localStorage.setItem("crushPercent", 50);
    } catch (error) {
      console.error("Error submitting answer: ", error);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.friendsWrap}>
          <Link to="/lay" className={styles.link}>
            <FriendSelectBox
              onClick={postGameStart()}
              friendNameImage={Layname}
              friendImage={Lay}
              hoverFriendImage={LaySmile}
              category="개념파"
            />
          </Link>

          <Link to="/molly" className={styles.link}>
            <FriendSelectBox
              friendNameImage={Mollyname}
              friendImage={Molly}
              hoverFriendImage={MollySmile}
              category="실전파"
            />
          </Link>
        </div>
        <NoticeBox notice="누구를 선택할까?" />
      </div>
    </div>
  );
};
export default Home;
