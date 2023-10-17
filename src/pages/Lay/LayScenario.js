import Lay from "./Lay";
import "../../styles/reset.css";
import "../../styles/global.css";
import palette from "../../styles/color";
import LaySmile from "../../assets/images/Lay/lay_smile.svg";
import LayShiny from "../../assets/images/Lay/lay_shiny.svg";
import LayThinking from "../../assets/images/Lay/lay_thinking.svg";
import SolSolution from "../../assets/images/sol_solution.png";
import SolKKK from "../../assets/images/sol_kkk.png";

const LayScenario = (apiData) => {
  const LayScenario = [
    {
      index: 0,
      nextIndex: 1,
      image: LaySmile,
      dialog:
        "날 선택해줘서 고마워~ㅇㅇ아~\n 우리 같이 용어 공부 열심히 해보자!!",
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
    },
    {
      index: 1,
      nextIndex: 2,
      image: LayShiny,
      dialog: "다음날...",
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
    },
    {
      index: 2,
      nextIndex: "",
      image: LayThinking,
      dialog: "레이가 무슨 고민에 빠진 듯 하다..\n 가서 말을 걸어보자",
      name: "레이",
      arrowColor: palette.ray_blue,
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
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
    },
    {
      index: 4,
      nextIndex: 5,
      image: SolSolution,
      dialog: "내가 다시 한번 설명해주지~",
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 5,
      nextIndex: 6,
      image: SolSolution,
      dialog: `${apiData.title}는(은) 한국예탁결제원에 따르면\n ${apiData.description}(이)야~`,
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 6,
      nextIndex: 7,
      image: SolKKK,
      dialog:
        "하하하! 얼빠진 얼굴 하고 있네! 포기하기엔 이르다구~\n 나 쏠이가 다시 쉽게 설명해줄게~",
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
    {
      index: 7,
      nextIndex: 8,
      image: SolKKK,
      dialog: `${apiData.title}는(은) 한국예탁결제원에 따르면\n ${apiData.explanation}(이)야~`,
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
    },
  ];
  return LayScenario;
};

export default LayScenario;
