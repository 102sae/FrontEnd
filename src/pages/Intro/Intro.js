import React, { useState, useEffect } from "react";
import "../../styles/reset.css";
import "../../styles/global.css";
import styles from "./Intro.module.css";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import MenuBox from "../../componets/MenuBox";
import { Link } from "react-router-dom";

import Lay from "../../assets/images/Lay/lay_default.png";
import LaySmile from "../../assets/images/Lay/lay_smile.png";
import Layname from "../../assets/images/Lay/lay_name.png";
import Molly from "../../assets/images/Molly/molly_default.png";
import MollySmile from "../../assets/images/Molly/molly_smile.png";
import Mollyname from "../../assets/images/Molly/molly_name.png";
import NoticeBox from "../../componets/NoticeBox";
import FriendSelectBox from "../../componets/FriendSelectBox";
import ReactTyped from "react-typed";
import introScenario from "./IntroScenario";

function Intro() {
  const [showMenuBox, setShowMenuBox] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(true);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  //다음 대화로 넘기기
  const handleDialogBoxClick = () => {
    if (!showFullText) {
      setShowFullText(true);
    } else {
      setShowFullText(false);
      if (currentScenarioIndex < introScenario.length - 1) {
        setCurrentScenarioIndex(introScenario[currentScenarioIndex].nextIndex);
      } else if (currentScenarioIndex === introScenario.length - 1) {
        setShowDialogBox(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleDialogBoxClick();
    }
    console.log(e.key);
  };

  const handleMenuOptionClick = (option, currentIndex) => {
    if (option === "select1") {
      setCurrentScenarioIndex(currentIndex);
      setShowMenuBox(false);
      console.log("1선택");
    } else if (option === "select2") {
      setCurrentScenarioIndex(currentIndex);
      setShowMenuBox(false);
      console.log("2선택");
    }
  };

  //마지막 대화가 종료된 후 1초 후에 선택지 보여주기
  useEffect(() => {
    if (introScenario[currentScenarioIndex].menu.show) {
      const timeoutId = setTimeout(() => {
        setShowMenuBox(true);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [currentScenarioIndex]);

  return (
    <div
      className={`${styles.root} ${
        introScenario[currentScenarioIndex].name !== "??"
          ? styles.solBackground
          : ""
      }`}
    >
      <div className={styles.dialogContainer}>
        {introScenario[currentScenarioIndex].name === "??" ? (
          //쏠 등장 전
          <div
            tabIndex={1}
            className={styles.DialogBoxWrap}
            onClick={handleDialogBoxClick}
            onKeyDown={handleKeyDown}
          >
            <DialogBox
              name={introScenario[currentScenarioIndex].name}
              backgroundColor={palette.main_dialog}
              arrowColor={palette.sol_text}
            />
            <div className={styles.dialogText}>
              {showFullText ? (
                introScenario[currentScenarioIndex].dialog
              ) : (
                <ReactTyped
                  key={currentScenarioIndex}
                  strings={[introScenario[currentScenarioIndex].dialog]}
                  typeSpeed={50}
                  onComplete={() => setShowFullText(true)}
                />
              )}
            </div>
          </div>
        ) : (
          //쏠이 등장 이후

          <div
            tabIndex={1}
            className={styles.characterWrap}
            onClick={
              introScenario[currentScenarioIndex] &&
              introScenario[currentScenarioIndex].menu.show
                ? null
                : handleDialogBoxClick
            }
            onKeyDown={
              introScenario[currentScenarioIndex] &&
              introScenario[currentScenarioIndex].menu.show
                ? null
                : handleKeyDown
            }
          >
            {showDialogBox && (
              <div>
                <div>
                  <img
                    className={styles.characterImage}
                    src={introScenario[currentScenarioIndex].image}
                    alt="캐릭터 이미지"
                  />
                </div>
                <DialogBox
                  name={introScenario[currentScenarioIndex].name}
                  backgroundColor={palette.main_dialog}
                  arrowColor={introScenario[currentScenarioIndex].arrowColor}
                />
                <div className={styles.dialogText}>
                  {showFullText ? (
                    introScenario[currentScenarioIndex].dialog
                  ) : (
                    <ReactTyped
                      key={currentScenarioIndex}
                      strings={[introScenario[currentScenarioIndex].dialog]}
                      typeSpeed={50}
                      onComplete={() => setShowFullText(true)}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {showMenuBox && (
          <MenuBox
            select={introScenario[currentScenarioIndex].menu}
            onOptionClick={handleMenuOptionClick}
          />
        )}

        {
          /* 마지막 시나리오 후 프렌즈 선택창 */
          !showDialogBox && (
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
          )
        }
      </div>
    </div>
  );
}
export default Intro;
