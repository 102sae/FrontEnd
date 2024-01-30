import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { FriendSelectBox } from "../../components";
import Lay from "../../assets/images/Lay/lay_default.png";
import LaySmile from "../../assets/images/Lay/lay_smile.png";
import Layname from "../../assets/images/Lay/lay_name.png";
import Molly from "../../assets/images/Molly/molly_default.png";
import MollySmile from "../../assets/images/Molly/molly_smile.png";
import Mollyname from "../../assets/images/Molly/molly_name.png";
import NoticeBox from "../../components/Atom/NoticeBox";

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.friendsWrap}>
          <Link to="/lay" className={styles.link}>
            <FriendSelectBox
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
