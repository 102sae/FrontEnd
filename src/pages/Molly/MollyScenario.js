import { useEffect, useState } from "react";
import palette from "../../styles/color";
import MollyHi from "../../assets/images/Molly/molly_hi.png";
import axios from "axios";

const MollyScenario = () => {
  const [companyApiData, setCompanyApiData] = useState({
    companyName: "S전자",
    companyInfo: "시가 총액도 높고 거래가 활발히 일어나는 주식인데",
  });

  const getCompanyInfo = async () => {
    try {
      const response = await axios.get("api 링크");
      console.log("용어게임 문제 API", response.data);
      setCompanyApiData(response.data);
    } catch (error) {
      console.error("Error fetching data from API: ", error);
    }
  };

  useEffect(() => {
    //getCompanyInfo();
  }, []);

  const introScenario = [
    {
      index: 0,
      nextIndex: 1,
      image: MollyHi,
      dialog:
        "안녕! 나를 선택해줘서 고마워~ 우리 같이 투자 연습을 해보면서 실제 투자에 대한 감각을 높여보자!",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 1,
      nextIndex: 2,
      image: MollyHi,
      dialog: "같이 투자 연습을 해볼래?",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: true,
        option: ["렛츠 고!", "마음의 준비가 필요해"],
        nextIndex: [2, 3],
      },
    },
    {
      index: 2,
      nextIndex: 4,
      image: MollyHi,
      dialog: "그럼 먼저 투자 게임에 대한 설명을 해줄게~",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 3,
      nextIndex: "",
      image: MollyHi,
      dialog: "용어 공부를 더 하다가 올래? 조급해하지 않아도 돼~",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: true,
        option: ["용어 공부를 하고 올게", "가보자고~"],
        nextIndex: [2, 2],
      },
    },
    {
      index: 4,
      nextIndex: 5,
      image: MollyHi,
      dialog: `우리가 투자 연습을 해볼 회사는 ${companyApiData.companyName}야~ ${companyApiData.companyInfo} 같이 주요 뉴스를 확인하며 연습해보자~`,
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 5,
      nextIndex: 6,
      image: MollyHi,
      dialog:
        "2018년부터 2022년까지의 S회사의 주가를 보여줄게! 그리고 너는 1년마다 매수를 할건지 매도를 할건지 선택할 수 있어!",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 6,
      nextIndex: 7,
      image: MollyHi,
      dialog:
        "매수를 한 후에 그 해에 주가가 오르거나 매도를 한 후에 주가가 내려가면 나의 호감도는 높아질거야!",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 7,
      nextIndex: 8,
      image: MollyHi,
      dialog:
        "반대로 매수를 했는데 그해의 주가가 떨어지거나 매도를 했는데 주가가 상승하면 나의 호감도는 떨어지겠지? 실제 게임화면으로 이동해서 설명해줄게~",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
  ];

  return introScenario;
};
export default MollyScenario;
