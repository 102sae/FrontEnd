import axios from "axios";
import { useEffect, useState } from "react";
const NewsScenario = () => {
  const [currentYear, setCurrentYear] = useState(2018);
  const NewsScenario = [
    {
      year: 2018,
      news: [
        {
          newsHead: "S회사, 4분기 신기록 행진 '급제동' 영업익 13조원대",
          newsUrl: "www.naver.com",
        },
        {
          newsHead: "중기 스마트공장지원센터 신설…5년간 600억 투자",
          newsUrl: "#",
        },
        {
          newsHead: "창사기념일 앞둔 S회사, '실적 신기록'에도 환호보다 한숨",
          newsUrl: "#",
        },
        {
          newsHead: "원/달러 환율 하락… S회사 중간배당에 낙폭 제한",
          newsUrl: "#",
        },
        {
          newsHead: "중기 스마트공장지원센터 신설…5년간 600억 투자",
          newsUrl: "#",
        },
      ],
    },
    {
      year: 2019,
      news: [
        {
          newsHead: "대신증권 S회사, 반도체 실적 개선 전망목…표가↑",
          newsUrl: "#",
        },
        {
          newsHead: "[특징주] 미중 무역합의 기대에 S회사 신고가(종합)",
          newsUrl: "#",
        },
        {
          newsHead: "S회사, 5G 표준특허 글로벌 2위…3위에 LG전자",
          newsUrl: "#",
        },
        {
          newsHead: "대신증권 S회사, 반도체 실적 개선 전망…목표가↑",
          newsUrl: "#",
        },
        {
          newsHead: "작년 영업익 29% 세금으로 낸다…10년 전의 14배",
          newsUrl: "#",
        },
      ],
    },
    {
      year: 2020,
      news: [
        {
          newsHead: "S회사 올해 35조원 시설투자…반도체에만 약 29조원",
          newsUrl: "#",
        },
        {
          newsHead: "S회사, 실적 악화에도 연구개발 투자 '20조원' 첫 돌파",
          newsUrl: "#",
        },
        {
          newsHead:
            "[1보] S회사 3분기 영업이익 12조3천억원…작년 동기 대비 58.1%↑",
          newsUrl: "#",
        },
        {
          newsHead: "S회사, 미국 버라이즌과 8조원 규모 5G 장비 계약",
          newsUrl: "#",
        },
        {
          newsHead: "[이건희 별세] '국민주'된 S회사 주가 행방은?",
          newsUrl: "#",
        },
      ],
    },
    {
      year: 2021,
      news: [
        {
          newsHead: "국민연금, S회사 보유 지분 27개월 만에 10% 아래로",
          newsUrl: "https://www.naver.com",
        },
        {
          newsHead: "S폰 공시지원금 최대 50만원… 폴더블폰 대중화 의지",
          newsUrl: "#",
        },
        {
          newsHead: "한국 기업 중국 사업 '빨간 불'…매출·이익률·점유율 뚝",
          newsUrl: "#",
        },
        {
          newsHead:
            "S회사, 직원수 11만4천명·연구개발비 16조2천억원 '역대 최대'",
          newsUrl: "#",
        },
        {
          newsHead: "1분기 영업이익 9조3천829억원…작년 대비 45.5%↑",
          newsUrl: "#",
        },
      ],
    },
    {
      year: 2022,
      news: [
        {
          newsHead: "외국인, 올해 한국 주식 15조원 순매도…S회사만 5조원 팔아",
          newsUrl: "#",
        },
        {
          newsHead: "반도체 한파 속 S회사 글로벌 D램 점유율 8년 만에 최저치",
          newsUrl: "#",
        },
        {
          newsHead: "2분기 영업이익 14조971억원…작년 동기 대비 12.2%↑",
          newsUrl: "#",
        },
        {
          newsHead:
            "2분기 S회사 핸드폰, 영업익 19% 감소한 2.6조…원가·환율 상승 탓",
          newsUrl: "#",
        },
        {
          newsHead: "3분기 영업이익 10조8천억원…작년 동기 대비 31.7%↓",
          newsUrl: "#",
        },
      ],
    },
  ];

  //뉴스 API
  const getNewsData = async () => {
    try {
      const response = await axios.get(
        "http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com/api/stock-quiz/companies/news",
        {
          params: {
            year: currentYear,
          },
        }
      );
      console.log("투자 게임 뉴스 API", response.data);
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  // useEffect(() => {
  //   getNewsData();
  // }, []);

  return NewsScenario;
};

export default NewsScenario;
