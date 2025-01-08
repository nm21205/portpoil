const priceData = [
  {
    id: 0,
    period: "50기",
    date: "2024-12-21 ~ 2025-01-05",
    duration: "16일",
    title: "★크리스마스마켓★ 프랑스+스위스+동유럽 16일",
    route: "부다페스트IN - 파리OUT",
    seats: "마감",
    status: "모집마감"
  },
  {
    id: 1,
    period: "51기",
    date: "2024-12-28 ~ 2025-01-05",
    duration: "9일",
    title: "[51기] 1월 동유럽+스위스뷰 9일",
    route: "부다페스트IN - 프라하OUT",
    seats: "마감",
    status: "모집마감"
  },
  {
    id: 2,
    period: "50기",
    date: "2024-12-28 ~ 2025-01-05",
    duration: "9일",
    title: "[50기] 1월 스위스일주+파리 9일",
    route: "프랑크푸르트IN - 파리OUT",
    seats: "마감",
    status: "모집마감"
  },
  {
    id: 3,
    period: "51기",
    date: "2024-12-28 ~ 2025-01-12",
    duration: "16일",
    title: "[51기] 1월 프랑스+스위스+동유럽 16일",
    route: "부다페스트IN - 파리OUT",
    seats: "마감",
    status: "모집마감"
  },
  {
    id: 4,
    period: "52기",
    date: "2025-01-04 ~ 2025-01-12",
    duration: "9일",
    title: "[52기] 1월 동유럽+스위스뷰 9일",
    route: "부다페스트IN - 프라하OUT",
    seats: "마감",
    status: "모집마감"
  },
  {
    id: 5,
    period: "51기",
    date: "2025-01-04 ~ 2025-01-12",
    duration: "9일",
    title: "[51기] 1월 스위스일주+파리 9일",
    route: "프랑크푸르트IN - 파리OUT",
    seats: "마감",
    status: "모집마감"
  },
  {
    id: 6,
    period: "52기",
    date: "2025-01-04 ~ 2025-01-19",
    duration: "16일",
    title: "[52기] 1월 프랑스+스위스+동유럽 16일",
    route: "부다페스트IN - 파리OUT",
    seats: "마감",
    status: "모집마감"
  },
  {
    id: 7,
    period: "53기",
    date: "2025-01-11 ~ 2025-01-19",
    duration: "9일",
    title: "[53기] 1월 동유럽+스위스뷰 9일",
    route: "부다페스트IN - 프라하OUT",
    seats: "마감",
    status: "모집마감"
  },
  {
    id: 8,
    period: "52기",
    date: "2025-01-11 ~ 2025-01-19",
    duration: "9일",
    title: "[52기] 1월 스위스일주+파리 9일",
    route: "프랑크푸르트IN - 파리OUT",
    seats: "남1 여1",
    status: "마감임박"
  },
  {
    id: 9,
    period: "53기",
    date: "2025-01-11 ~ 2025-01-26",
    duration: "16일",
    title: "[53기] 1월 프랑스+스위스+동유럽 16일",
    route: "부다페스트IN - 파리OUT",
    seats: "마감",
    status: "모집마감"
  },
  {
    id: 10,
    period: "54기",
    date: "2025-01-18 ~ 2025-01-26",
    duration: "9일",
    title: "[54기] 1월 동유럽+스위스뷰 9일",
    route: "부다페스트IN - 프라하OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 11,
    period: "53기",
    date: "2025-01-18 ~ 2025-01-26",
    duration: "9일",
    title: "[53기] 1월 스위스일주+파리 9일",
    route: "프랑크푸르트IN - 파리OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 12,
    period: "54기",
    date: "2025-01-18 ~ 2025-02-02",
    duration: "16일",
    title: "[54기] 1월 프랑스+스위스+동유럽 16일",
    route: "부다페스트IN - 파리OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 13,
    period: "24기",
    date: "2025-01-19 ~ 2025-01-28",
    duration: "10일",
    title: "[24기] 1월 스페인+안달루시아 10일",
    route: "마드리드IN - 바르셀로나OUT",
    seats: "여1",
    status: "마감임박"
  },
  {
    id: 14,
    period: "55기",
    date: "2025-01-25 ~ 2025-02-02",
    duration: "9일",
    title: "[55기] 1월 동유럽+스위스뷰 9일",
    route: "부다페스트IN - 프라하OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 15,
    period: "54기",
    date: "2025-01-25 ~ 2025-02-02",
    duration: "9일",
    title: "[54기] 1월 스위스일주+파리 9일",
    route: "프랑크푸르트IN - 파리OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 16,
    period: "55기",
    date: "2025-01-25 ~ 2025-02-09",
    duration: "16일",
    title: "[55기] 2월 프랑스+스위스+동유럽 16일",
    route: "부다페스트IN - 파리OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 17,
    period: "56기",
    date: "2025-02-01 ~ 2025-02-09",
    duration: "9일",
    title: "[56기] 2월 동유럽+스위스뷰 9일",
    route: "부다페스트IN - 프라하OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 18,
    period: "55기",
    date: "2025-02-01 ~ 2025-02-09",
    duration: "9일",
    title: "[55기] 2월 스위스일주+파리 9일",
    route: "프랑크푸르트IN - 파리OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 19,
    period: "56기",
    date: "2025-02-01 ~ 2025-02-16",
    duration: "16일",
    title: "[56기] 2월 프랑스+스위스+동유럽 16일",
    route: "부다페스트IN - 파리OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 20,
    period: "57기",
    date: "2025-02-08 ~ 2025-02-16",
    duration: "9일",
    title: "[57기] 2월 동유럽+스위스뷰 9일",
    route: "부다페스트IN - 프라하OUT",
    seats: "여유",
    status: "모집중"
  },
  {
    id: 21,
    period: "56기",
    date: "2025-02-08 ~ 2025-02-16",
    duration: "9일",
    title: "[56기] 2월 스위스일주+파리 9일",
    route: "프랑크푸르트IN - 파리OUT",
    seats: "여유",
    status: "모집중"
  }
];

export default priceData;