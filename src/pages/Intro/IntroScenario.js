import palette from "../../styles/color";
import Sol from "../../assets/images/sol_default.png";
import SolSmile from "../../assets/images/sol_smile.png";
import SolWhy from "../../assets/images/sol_why.png";
import LayHi from "../../assets/images/Lay/lay_hi.png";
import MollyHi from "../../assets/images/Molly/molly_hi.png";
const introScenario = [
  {
    index: 0,
    nextIndex: 1,
    image: "",
    dialog:
      "밤하늘의 북쪽에서 가장 밝게 빛나는 별, 북극성에 우주여행작가 쏠이 살고 있었어요.",
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
    dialog: "쏠은 조금 더 특별한 여행을 하고 싶다는 생각이 들었어요.",
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
    dialog:
      "문득 오래전부터 꼭 여행해 보고 싶었던 별, 유난히 푸르게 빛나던 지구가 떠올랐습니다.",
    name: "??",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 3,
    nextIndex: 4,
    image: "",
    dialog:
      "그곳에서 지금껏 해보지 못한 모험에 도전하고, 새로운 친구들도 잔뜩 만나기로 결심했죠.",
    name: "??",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 4,
    nextIndex: 5,
    image: "",
    dialog: "10년 후...",
    name: "??",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 5,
    nextIndex: 6,
    image: Sol,
    dialog: "안녕? 난 쏠이야",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 6,
    nextIndex: 7,
    image: Sol,
    dialog: "너에게 선물을 주려고 지구에 왔어!",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 7,
    nextIndex: 8,
    image: Sol,
    dialog:
      "내 정보통에 따르자면 너가 증권 정보를 얻고싶은데 방법을 모르겠다고 전해들었어~",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 8,
    nextIndex: 9,
    image: Sol,
    dialog:
      "그래서 말인데, 북극성에서 또 다른 내 친구들이 온대! 이 친구들과 친해진다면 주식의 기본 지식을 얻을 수 있고 실전 투자에 자신감이 생길거야!",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 9,
    nextIndex: 11,
    image: Sol,
    dialog: "내 친구들이 너에 대한 호감도가 100%가 되면 선물을 줄거야.",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 10,
    nextIndex: 11,
    image: Sol,
    dialog:
      "나도 보상 없으면 일하지 않는 시스템을 이해해버렸거든. 만약 너가 내 친구들이 만족할 수 있도록 도와준다면 엄청난 보상을 줄게. 보상은 게임을 마친 후 마이페이지→ 내 쿠폰 현황에서 확인하면 돼!",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 11,
    nextIndex: "",
    image: Sol,
    dialog: "어때? 내 친구들과 친해져 볼래?",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: true,
      option: ["나한테 맡겨!", "내가 왜?"],
      nextIndex: [12, 13],
    },
  },
  {
    index: 12,
    nextIndex: 15,
    image: SolSmile,
    dialog: "와! 고마워ㅎㅎ 너라면 들어줄줄 알았어!",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 13,
    nextIndex: "",
    image: SolWhy,
    dialog: "오잉? 내가 사람을 잘못봤나? 다시 한번 생각해봐~",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: true,
      option: ["알겠어!", "나 맞아~"],
      nextIndex: [12, 12],
    },
  },
  {
    index: 14,
    nextIndex: "",
    image: Sol,
    dialog: "아쉽네~ 다음에 또 보자~",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 15,
    nextIndex: 16,
    image: Sol,
    dialog: "그럼 내 친구들을 소개할게! 잘 부탁해ㅎㅎ",
    name: "쏠",
    arrowColor: palette.sol_text,
    menu: {
      show: false,
    },
  },
  {
    index: 16,
    nextIndex: 17,
    image: LayHi,
    dialog:
      "안녕! 나는 지구에서 제일 유명한 뮤지션이 되고 싶은 레이야~ 나는 얼른 멋진 음반을 내고 싶어서 돈이 필요한데 투자 용어에 대해서 하나도 알지 못해.",
    name: "레이",
    arrowColor: palette.ray_blue,
    menu: {
      show: false,
    },
  },
  {
    index: 17,
    nextIndex: 18,
    image: LayHi,
    dialog: "혹시 내가 투자를 하기 전 너에게 주식 용어에 대해서 물어봐도 될까?",
    name: "레이",
    arrowColor: palette.ray_blue,
    menu: {
      show: false,
    },
  },
  {
    index: 18,
    nextIndex: 19,
    image: MollyHi,
    dialog: "안녕~ 나는 지구에서 제일 멋진 식물 카페를 운영하고 있는 몰리야!",
    name: "몰리",
    arrowColor: palette.molly_purple,
    menu: {
      show: false,
    },
  },
  {
    index: 19,
    nextIndex: 20,
    image: MollyHi,
    dialog:
      "나는 어느덧 지구에 산지 5년차인데 더 큰 카페를 운영하기위한 자금이 필요해. 증권 초보라 어려운게 많아.",
    name: "몰리",
    arrowColor: palette.molly_purple,
    menu: {
      show: false,
    },
  },
  {
    index: 20,
    nextIndex: 21,
    image: MollyHi,
    dialog:
      "북극성에만 있는 타임머신을 사용해서 과거로 돌아가 지금까지 지구에서 있었던 상황들을 투자해보려고 해. 혹시 나 좀 도와줄래?",
    name: "몰리",
    arrowColor: palette.molly_purple,
    menu: {
      show: false,
    },
  },
];
export default introScenario;
