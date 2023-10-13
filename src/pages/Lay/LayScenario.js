import LaySmile from "../../assets/images/Lay/lay_smile.svg"
import LayShiny from "../../assets/images/Lay/lay_shiny.svg"
import LayThinking from "../../assets/images/Lay/lay_thinking.svg"

const getLayScenario = (apiData) => {
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
    return LayScenario;
};

export default getLayScenario;

