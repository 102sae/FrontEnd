import React, { useEffect, useState } from "react";
import styles from "./MollyResult.module.css"
import palette from "../../styles/color";
import MollyPot from "../../assets/images/Molly/molly_pot.png"
import MollySad from "../../assets/images/Molly/molly_sad.png"
import CrushBar from "../../componets/CrushBar";
import DialogBox from "../../componets/DialogBox";
import ReactTyped from "react-typed";
import MenuBox from "../../componets/MenuBox";
import { useNavigate } from "react-router-dom";

const MollyResult = () => {
    const navigate = useNavigate();
    const [showMenuBox, setShowMenuBox] = useState(false);
    const [showDialogBox, setShowDialogBox] = useState(true);
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [showFullText, setShowFullText] = useState(false);
    
    const result = localStorage.getItem("crushPercent");
    console.log("result", result);

    useEffect(() => {
        if (result === "100") {
            setCurrentScenarioIndex(0); // 결과가 100일 때의 인덱스
        } else {
            setCurrentScenarioIndex(2); // 그 외의 경우의 인덱스
        }
    },[]);
    

    const MollyResultScenario = [
        {
            index: 0,
            nextIndex: 1,
            image:MollyPot,
            dialog: "호감도를 다 채웠어! 짝짝짝~ \n 축하해!! 이제 나와 친구가 되었어. 너에게 줄 선물이 있어!",
            name: "몰리",
            arrowColor: palette.molly_purple,
            menu: {
                show: false,
              },
        },
        {
            index: 1,
            nextIndex: "",
            image:MollyPot,
            dialog: "짜잔~ 지금 바로 투자하면 수수료가 면제야!\n 투자하러 가볼까?",
            name: "몰리",
            arrowColor: palette.molly_purple,
            menu: {
                show: true,
                option: ["바로 투자하러 가기", "용어게임 하러가기"],
                nextIndex: [0, 0],
              },
        },
        {
            index: 2,
            nextIndex: "",
            image:MollySad,
            dialog: "호감도 달성에 실패했어... \n 아직 준비가 더 필요해 보여",
            name: "몰리",
            arrowColor: palette.molly_purple,
            menu: {
                show: true,
                option: ["다시 시도", "다른 게임하기"],
                nextIndex: [0, 0],
            }
        },
    ];

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleDialogBoxClick();
        }
        console.log(e.key);
      };

    // 다음 대화로 넘기기
    const handleDialogBoxClick = () => {
        if (!showFullText) {
        setShowFullText(true);
        } else {
        setShowFullText(false);
        if ( currentScenarioIndex < MollyResultScenario.length - 1) {
            setCurrentScenarioIndex(MollyResultScenario[currentScenarioIndex].nextIndex);
        }else {
            setShowDialogBox(false); // 대화 상자 감추기
            console.log(currentScenarioIndex);
          }
        };
    };

    //메뉴 클릭하기
    const handleMenuOptionClick = (option, currentIndex) => {
        console.log("Option:", option);
        console.log("Current Index:", currentIndex);
        if (option === "select1") {
        navigate("/molly")
        } else if (option === "select2") {
        navigate("/lay")
        }
    };

    //마지막 대화가 종료된 후 1초 후에 선택지 보여주기
    useEffect(() => {
        if (MollyResultScenario[currentScenarioIndex].menu.show) {
        const timeoutId = setTimeout(() => {
            setShowMenuBox(true);
        }, 2000);

        return () => clearTimeout(timeoutId);
        }
    }, [currentScenarioIndex]);


    return(
        <div
            key={currentScenarioIndex}
            className={`${styles.root} ${
                MollyResultScenario[currentScenarioIndex].name === "몰리"
                  ? styles.mollyBackground
                  : ""
              }`}
        >
        <div>
            <div
                tabIndex={1}
                onClick={
                    MollyResultScenario[currentScenarioIndex] &&
                    MollyResultScenario[currentScenarioIndex].menu.show
                    ? null
                    : handleDialogBoxClick
                }
                onKeyDown={
                    MollyResultScenario[currentScenarioIndex] &&
                    MollyResultScenario[currentScenarioIndex].menu.show
                    ? null
                    : handleKeyDown
                }
            >
            {showDialogBox && (
            <div>
              {/* 프로그레스바 & 호감도 */}
              <div className={styles.top}>
                <CrushBar />
              </div>

              {/* 이미지 렌더링 */}
              <div className={styles.character_wrap}>
                <img
                  src={MollyResultScenario[currentScenarioIndex].image}
                  alt="Scenario"
                />
              </div>

              {/* 대화 상자 렌더링 */}
              <DialogBox
                name={MollyResultScenario[currentScenarioIndex].name}
                backgroundColor={palette.main_dialog}
                arrowColor={MollyResultScenario[currentScenarioIndex].arrowColor}
              />
              <div className={styles.dialogText}>
                {showFullText ? (
                  MollyResultScenario[currentScenarioIndex].dialog
                ) : (
                  <ReactTyped
                    key={currentScenarioIndex}
                    strings={[MollyResultScenario[currentScenarioIndex].dialog]}
                    typeSpeed={40}
                    onComplete={() => setShowFullText(true)}
                  />
                )}
              </div>
            </div>
          )}
            </div>
        {/* 메뉴 박스 렌더링 */}
        {showMenuBox && (
          <MenuBox
            select={MollyResultScenario[currentScenarioIndex].menu}
            onOptionClick={handleMenuOptionClick}
          />
        )}
        </div>
    </div>
    )
}

export default MollyResult;