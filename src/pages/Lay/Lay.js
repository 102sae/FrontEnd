import React, { useEffect, useState } from "react";
import "../../styles/reset.css";
import "../../styles/global.css";
import styles from "./Lay.module.css";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import MenuBox from "../../componets/MenuBox";
import CrushBar from "../../componets/CrushBar";
import LaySmile from "../../assets/images/Lay/lay_smile.svg"
import LayShiny from "../../assets/images/Lay/lay_shiny.svg"
import LayThinking from "../../assets/images/Lay/lay_thinking.svg"
import ProgressBar from "../../componets/ProgressBar";
import axios from 'axios';
import Quiz from "../../componets/Quiz";

function Lay() {
    const [showMenuBox, setShowMenuBox] = useState(false);
    const [showDialogBox, setShowDialogBox] = useState(true);
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [apiData, setApiData] = useState(0);

    const LayScenario = [
        {
            index: 0,
            nextIndex:1,
            image: LaySmile,
            dialog: "날 선택해줘서 고마워~ㅇㅇ아~\n 우리 같이 용어 공부 열심히 해보자!!",
            menu: {
                show: false,
              },
        },
        {
            index: 1,
            nextIndex: 2,
            image: LayShiny,
            dialog: "다음날...",
            menu: {
                show: false,
            },
        },
        {
            index: 2,
            nextIndex: "",
            image: LayThinking,
            dialog: "레이가 무슨 고민에 빠진 듯 하다..\n 가서 말을 걸어보자",
            menu: {
              show: true,
              option: ["무슨 고민있어?", "인상 좀 펴라"],
              nextIndex: [3, 3],
            },
        },
        {
            index: 3,
            nextIndex: 4,
            image: LayThinking,
            dialog: `요즘 뉴스에 ${apiData.title}을 사라는 말이 많더라고... \n그런데 ${apiData.title}이 정확하게 뭔지 모르겠어서 나 좀 도와줄래?`,
            menu: {
                show: false,
            },
        }
    ];

    
    // 다음 대화로 넘기기
    const handleDialogBoxClick = () => {
        if (currentScenarioIndex < LayScenario.length - 1) {
            setCurrentScenarioIndex(LayScenario[currentScenarioIndex].nextIndex);
        } else if (currentScenarioIndex === LayScenario.length - 1) {
            setShowDialogBox(false);
        }
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
      
    // API 요청을 보내고 데이터를 받아오는 부분
    // 임시 데이터 사용 -> 추후 변경
    const getData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); // API_ENDPOINT_URL 대체
            console.log(response.data)
            //문제(용어)
            const term = response.data[6]; // 첫 번째 객체의 term 속성 값 -> 글자수 제한
            console.log(term)
            setApiData(term);
            //선택지 리스트
            // const items = response.data[0].body.slice(0, 20); // 첫 번째 객체의 items 속성 값 -> 글자수 제한
            // console.log(items)
            // setApiData(items);

        } catch (error) {
            console.error("Error fetching data from API: ", error);
        }
    };

    useEffect(() => {
        getData(); 
    }, []);

    //마지막 대화가 종료된 후 1초 후에 선택지 보여주기
    useEffect(() => {
        if (LayScenario[currentScenarioIndex].menu.show) {
        const timeoutId = setTimeout(() => {
            setShowMenuBox(true);
        }, 1000);

        return () => clearTimeout(timeoutId);
        }
    }, [currentScenarioIndex]);


    return (
        <div className={styles.root}>
        <div className={styles.dialogContainer}>
            <div>
                <div
                    onClick={
                        LayScenario[currentScenarioIndex] &&
                        LayScenario[currentScenarioIndex].menu.show
                        ? null
                        : handleDialogBoxClick
                    }
                >
                {/* 프로그레스 바와 호감도 */}
                {showDialogBox && (
                    <div className={styles.top}>
                        {/* 프로그레스 바 */}
                        <ProgressBar />
                        {/* 호감도 */}
                        <CrushBar />
                    </div>
                )}
                {showDialogBox && (
                <div>
                    {/* 이미지 렌더링 */}
                    <div className={styles.img_container}>
                        <img src={LayScenario[currentScenarioIndex].image} alt="Scenario" />
                    </div>
                    {/* 대화 상자 렌더링 */}
                    <DialogBox
                        dialog={LayScenario[currentScenarioIndex].dialog}
                        name="레이"
                        backgroundColor={palette.main_dialog}
                        arrowColor={palette.ray_blue}
                    />
                </div>
                )}
            </div>
            {/* 메뉴 박스 렌더링 */}
            </div>
                {showMenuBox && (
                    <MenuBox
                        select={LayScenario[currentScenarioIndex].menu}
                        onOptionClick={handleMenuOptionClick}
                    />
                )}
            </div>

            {
                // 퀴즈 화면
                !showDialogBox && (
                    <div className={styles.top}>
                        {/* 퀴즈 타이틀 */}
                        <Quiz 
                            term = {apiData.title}
                        />
                        {/* 호감도 */}
                        <CrushBar />
                    </div>
                )
            }
        </div>
    );
}

export default Lay;
