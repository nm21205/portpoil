const saleData = [
  {
    id: 0,
    title: "[오늘만특가] 오사카 3박4일",
    date: "2024-02-15 ~ 2024-02-18",
    price: "449,000",
    location: "일본",
    departure: "인천",
    airline: "티웨이항공",
    status: "마감임박",
    seats: "2석"
  },
  {
    id: 1,
    title: "[특가] 후쿠오카 온천여행 2박3일",
    date: "2024-02-20 ~ 2024-02-22",
    price: "399,000",
    location: "일본",
    departure: "김포",
    airline: "진에어",
    status: "예약가능",
    seats: "8석"
  },
  {
    id: 2,
    title: "[단독특가] 타이페이 자유여행 3박4일",
    date: "2024-02-18 ~ 2024-02-21",
    price: "459,000",
    location: "대만",
    departure: "인천",
    airline: "에어서울",
    status: "예약가능",
    seats: "4석"
  },
  {
    id: 3,
    title: "[마감임박] 홍콩 야경투어 2박3일",
    date: "2024-02-16 ~ 2024-02-18",
    price: "429,000",
    location: "홍콩",
    departure: "인천",
    airline: "제주항공",
    status: "마감임박",
    seats: "1석"
  },
  {
    id: 4,
    title: "[특가] 오키나와 휴양 3박4일",
    date: "2024-02-19 ~ 2024-02-22",
    price: "479,000",
    location: "일본",
    departure: "부산",
    airline: "에어부산",
    status: "예약가능",
    seats: "6석"
  },
  {
    id: 5,
    title: "[단독] 마카오 카지노투어 2박3일",
    date: "2024-02-17 ~ 2024-02-19",
    price: "439,000",
    location: "마카오",
    departure: "인천",
    airline: "에어마카오",
    status: "예약가능",
    seats: "5석"
  },
  {
    id: 6,
    title: "[특가] 도쿄 디즈니 3박4일",
    date: "2024-02-21 ~ 2024-02-24",
    price: "489,000",
    location: "일본",
    departure: "인천",
    airline: "피치항공",
    status: "예약가능",
    seats: "4석"
  },
  {
    id: 7,
    title: "[단독특가] 상해 도시투어 2박3일",
    date: "2024-02-16 ~ 2024-02-18",
    price: "419,000",
    location: "중국",
    departure: "인천",
    airline: "중국동방항공",
    status: "마감임박",
    seats: "2석"
  },
  {
    id: 8,
    title: "[오늘만] 나고야 온천여행 3박4일",
    date: "2024-02-22 ~ 2024-02-25",
    price: "469,000",
    location: "일본",
    departure: "대구",
    airline: "티웨이항공",
    status: "예약가능",
    seats: "7석"
  },
  {
    id: 9,
    title: "[특가] 가오슝 자유여행 3박4일",
    date: "2024-02-19 ~ 2024-02-22",
    price: "449,000",
    location: "대만",
    departure: "인천",
    airline: "중화항공",
    status: "예약가능",
    seats: "5석"
  },
  {
    id: 10,
    title: "[마감임박] 교토 단풍투어 2박3일",
    date: "2024-02-17 ~ 2024-02-19",
    price: "429,000",
    location: "일본",
    departure: "부산",
    airline: "에어부산",
    status: "마감임박",
    seats: "1석"
  },
  {
    id: 11,
    title: "[특가] 베이징 자금성투어 3박4일",
    date: "2024-02-20 ~ 2024-02-23",
    price: "459,000",
    location: "중국",
    departure: "인천",
    airline: "중국국제항공",
    status: "예약가능",
    seats: "6석"
  },
  {
    id: 12,
    title: "[단독] 센다이 온천여행 2박3일",
    date: "2024-02-18 ~ 2024-02-20",
    price: "439,000",
    location: "일본",
    departure: "인천",
    airline: "진에어",
    status: "예약가능",
    seats: "4석"
  },
  {
    id: 13,
    title: "[특가] 광저우 맛집투어 3박4일",
    date: "2024-02-21 ~ 2024-02-24",
    price: "469,000",
    location: "중국",
    departure: "인천",
    airline: "남방항공",
    status: "예약가능",
    seats: "8석"
  },
  {
    id: 14,
    title: "[오늘만] 타이중 자유여행 2박3일",
    date: "2024-02-16 ~ 2024-02-18",
    price: "419,000",
    location: "대만",
    departure: "인천",
    airline: "타이거항공",
    status: "마감임박",
    seats: "2석"
  },
  {
    id: 15,
    title: "[특가] 삿포로 눈축제 3박4일",
    date: "2024-02-19 ~ 2024-02-22",
    price: "489,000",
    location: "일본",
    departure: "인천",
    airline: "에어서울",
    status: "예약가능",
    seats: "5석"
  },
  {
    id: 16,
    title: "[단독특가] 청도 맛집투어 2박3일",
    date: "2024-02-17 ~ 2024-02-19",
    price: "429,000",
    location: "중국",
    departure: "인천",
    airline: "산동항공",
    status: "예약가능",
    seats: "6석"
  },
  {
    id: 17,
    title: "[마감임박] 하코네 온천 3박4일",
    date: "2024-02-22 ~ 2024-02-25",
    price: "479,000",
    location: "일본",
    departure: "김포",
    airline: "피치항공",
    status: "마감임박",
    seats: "1석"
  },
  {
    id: 18,
    title: "[특가] 타이난 자유여행 2박3일",
    date: "2024-02-18 ~ 2024-02-20",
    price: "439,000",
    location: "대만",
    departure: "인천",
    airline: "중화항공",
    status: "예약가능",
    seats: "7석"
  },
  {
    id: 19,
    title: "[오늘만] 시안 병마용 3박4일",
    date: "2024-02-20 ~ 2024-02-23",
    price: "469,000",
    location: "중국",
    departure: "인천",
    airline: "중국동방항공",
    status: "예약가능",
    seats: "4석"
  }
];

export default saleData; 