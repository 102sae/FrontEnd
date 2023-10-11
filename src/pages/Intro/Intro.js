import React, { useState, useEffect } from "react";
import "../../styles/reset.css";
import "../../styles/global.css";
import styles from "./Intro.module.css";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import MenuBox from "../../componets/MenuBox";
import { ReactComponent as SolHi } from "../../assets/images/sol_hi.svg";
import { ReactComponent as SolSmile } from "../../assets/images/sol_smile.svg";
import { ReactComponent as SolWhy } from "../../assets/images/sol_why.svg";
import { ReactComponent as LayHi } from "../../assets/images/lay_hi.svg";
import { ReactComponent as MollyHi } from "../../assets/images/molly_hi.svg";
import Lay from "../../assets/images/lay_default.svg";
import LaySmile from "../../assets/images/lay_smile.svg";
import Molly from "../../assets/images/molly_default.svg";
import MollySmile from "../../assets/images/molly_smile.svg";
import NoticeBox from "../../componets/NoticeBox";
import Layname from "../../assets/images/lay_name.svg";
import Mollyname from "../../assets/images/molly_name.svg";
import FriendSelectBox from "../../componets/FriendSelectBox";
function Intro() {
  const introScenario = [
    {
      index: 0,
      nextIndex: 1,
      image: "",
      dialog:
        "밤하늘의 북쪽에서 가장 밝게 빛나는 별, \n북극성에 우주여행작가 쏠이 살고 있었어요.\n 그날도 어느 때와 같이 글을 써 내려가고 있었습니다.\n 다녀왔던 별들은 전부 아름다웠지만,",
      name: "??",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 1,
      nextIndex: 2,
      image: "",
      dialog: "10년후...",
      name: "??",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 2,
      nextIndex: 3,
      image: "",
      dialog: "안녕? 난 쏠이야",
      name: "??",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 3,
      nextIndex: 4,
      image: <SolHi />,
      dialog: "난 부자야",
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 4,
      nextIndex: "",
      image: <SolHi />,
      dialog:
        "북극성에서 또 다른 내 친구들이 온대! 혹시 그 친구들도 지구에서 부자가 될 수 있도록 도와줄 수 있을까?",
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: true,
        option: ["나한테 맡겨!", "내가 왜?"],
        nextIndex: [5, 6],
      },
    },
    {
      index: 5,
      nextIndex: 8,
      image: <SolSmile />,
      dialog: "와! 고마워ㅎㅎ 너라면 들어줄줄 알았어!",
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 6,
      nextIndex: "",
      image: <SolWhy />,
      dialog: "오잉? 내가 사람을 잘못봤나? 다시 한번 생각해봐~",
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: true,
        option: ["알겠어!", "미안.."],
        nextIndex: [8, 7],
      },
    },
    {
      index: 7,
      nextIndex: "",
      image: <SolHi />,
      dialog: "아쉽네~ 다음에 또 보자~",
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 8,
      nextIndex: 9,
      image: <SolHi />,
      dialog: "내 친구들을 소개시켜줄게~",
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 9,
      nextIndex: 10,
      image: <LayHi />,
      dialog: "안녕! 나는 지구에서 제일 유명한 뮤지션이 되고 싶은 레이야~",
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
    },
    {
      index: 10,
      nextIndex: 11,
      image: <MollyHi />,
      dialog: "안녕~ 나는 지구에서 제일 멋진 식물 카페를 운영하고 있는 몰리야!",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
  ];

  const [showMenuBox, setShowMenuBox] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(true);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  //다음 대화로 넘기기
  const handleDialogBoxClick = () => {
    if (currentScenarioIndex < introScenario.length - 1) {
      setCurrentScenarioIndex(introScenario[currentScenarioIndex].nextIndex);
    } else {
      setShowDialogBox(false);
    }
    console.log(currentScenarioIndex);
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
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [currentScenarioIndex]);

  return (
    <div
      className={`${styles.root}  ${
        introScenario[currentScenarioIndex].name !== "??"
          ? styles.solBackground
          : ""
      } `}
    >
      <div className={styles.dialogContainer}>
        {introScenario[currentScenarioIndex].name === "??" ? (
          //쏠 등장 전
          <div onClick={handleDialogBoxClick}>
            <DialogBox
              dialog={introScenario[currentScenarioIndex].dialog}
              name={introScenario[currentScenarioIndex].name}
              backgroundColor={palette.main_dialog}
              arrowColor={palette.sol_text}
            />
          </div>
        ) : (
          //쏠이 등장 이후

          <div
            className={styles.characterWrap}
            onClick={
              introScenario[currentScenarioIndex] &&
              introScenario[currentScenarioIndex].menu.show
                ? null
                : handleDialogBoxClick
            }
          >
            {showDialogBox && (
              <div>
                <div className={styles.characterImage}>
                  {introScenario[currentScenarioIndex].image}
                </div>
                <DialogBox
                  dialog={introScenario[currentScenarioIndex].dialog}
                  name={introScenario[currentScenarioIndex].name}
                  backgroundColor={palette.main_dialog}
                  arrowColor={introScenario[currentScenarioIndex].arrowColor}
                />
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
                <FriendSelectBox
                  friendNameImage={Layname}
                  friendImage={Lay}
                  hoverFriendImage={LaySmile}
                  category="개념파"
                />
                <FriendSelectBox
                  friendNameImage={Mollyname}
                  friendImage={Molly}
                  hoverFriendImage={MollySmile}
                  category="실전파"
                />
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
