export type NewsItems = {
  id: number;
  date: string;
  tag: "活動資訊" | "操作教學";
  mainImg: string;
  innerPageImgs: string[];
  title: string;
  desc: string;
  body: string[];
  hashTags: string[];
};

const news: NewsItems[] = [
  {
    id: 1,
    date: "2022-05-11",
    tag: "操作教學",
    mainImg: "/img/news/news-0.jpg",
    innerPageImgs: ["https://placehold.jp/500x300.png"],
    title: "造門工藝與烤漆品質更上一層樓的廠辦大門",
    desc: "最近剛竣工的廠辦大門，跳脫傳統思維，呈現現代科技感的企業形象",
    body: [
      "長度達到17.8米。雙軌道抗風壓結構，具減少磨損的緩啟動及緩停止功能，讓大門既安全又耐用！",
      "同時透過幾何造型烤漆管料的搭配展現高雅氣派，讓美觀程度直接加倍。三久的造門工藝與烤漆品質更上一層樓。",
    ],
    hashTags: ["門體設計客製化", "為您量身訂做的三久大門"],
  },
  {
    id: 2,
    date: "2022-05-09",
    tag: "操作教學",
    mainImg: "/img/news/news-1.jpg",
    innerPageImgs: [
      "https://placehold.jp/500x300.png",
      "https://placehold.jp/500x300.png",
    ],
    title: "與勵馨基金會一齊把愛延展到每位需要幫助的女性",
    desc: "三久員工們一起體驗製作香氛蠟燭，想要獻給最親愛的媽媽，祝全天下的媽媽們母親節快樂！",
    body: [
      "從三月開始就持續與勵馨基金會聯繫，不管是前期的會議、對全體員工的服務宣導，到上周母親節的香氛蠟燭手作認購，都在在感受到勵馨那期盼終止暴力、預防侵害的堅定信念與熱忱，對每一位求助的婦女與孩子給予最暖心的陪伴與援助。",
      "很開心這次有機會可以讓三久同仁將對母親的愛延展到每位需要幫助的女性，願創造更友善正義的社會！",
    ],
    hashTags: [],
  },
  {
    id: 3,
    date: "2022-04-27",
    tag: "操作教學",
    mainImg: "/img/news/news-2.jpg",
    innerPageImgs: [
      "https://placehold.jp/500x300.png",
      "https://placehold.jp/500x300.png",
      "https://placehold.jp/500x300.png",
    ],
    title: "勞動佳節愉快，我們將齊心努力持續追求卓越",
    desc: "連假前也辛苦認真趕著出貨，同心協力的三久大家庭",
    body: [
      "一年一度的勞動節又即將到來，每到這個時候就想特別感謝每一位三久辛苦認真的同仁，看著工廠這些天從上到下大夥兒忙進忙出的，為了趕在連假前出貨，真的是覺得三久是個很棒的大家庭~我們會繼續同心協力，提供更優質的產品與服務！",
    ],
    hashTags: [],
  },
  {
    id: 4,
    date: "2022-03-21",
    tag: "活動資訊",
    mainImg: "/img/news/news-0.jpg",
    innerPageImgs: [
      "https://placehold.jp/500x300.png",
      "https://placehold.jp/500x300.png",
    ],
    title: "攜手做公益，關懷流浪犬貓",
    desc: "全體員工募款集資，想給無家可歸的毛小孩們最好的照護。",
    body: [
      "有感於現在社會紛亂，天災人禍不斷，我們三久的員工總在想著要做點什麼……",
      "看到這家位於彰化鹿港的關懷流浪犬貓鮮食協會，盡心盡力地為對待狗狗貓貓們，給予不管是結紮、救援及餵養等，那些充滿愛的能量讓我們為之動容，所以特別集結我們三久所有愛貓愛狗人士，大家募款集資，想給毛小孩們最好的照護，哪怕只是一點微小的心意，也希望帶起這樣正面的能量，讓社會臻於至善。",
    ],
    hashTags: ["公益", "流浪犬貓"],
  },
  {
    id: 5,
    date: "2022-02-18",
    tag: "活動資訊",
    mainImg: "/img/news/news-1.jpg",
    innerPageImgs: [
      "https://placehold.jp/500x300.png",
      "https://placehold.jp/500x300.png",
      "https://placehold.jp/500x300.png",
    ],
    title: "「TALENT, in Taiwan，台灣人才永續行動聯盟」",
    desc: "人才的培育與發展，一直是三久重視的營運發展目標。為強化台灣社會的人才競爭力，同時因應ESG浪潮、全球企業對人才社會責任的看重，在此關鍵時刻三久正式宣布加入「TALENT, in Taiwan」",
    body: [
      "人才的培育與發展，一直是三久重視的營運發展目標。為了強化台灣社會的人才競爭力，同時因應ESG浪潮下、全球企業對人才社會責任的看重，在此關鍵時刻，三久建材工業股份有限公司正式宣布加入「TALENT, in Taiwan，台灣人才永續行動聯盟」！",
      "我們將承諾組織溝通、人才成長與多元包容，透過積極招募多元族群的員工，協助其充分發揮個人優勢及潛能，並給予培養及支持，有效建立員工對經營團隊的信任，帶動台灣社會在少子化下，保有永續的競爭力。",
      "接下來，我們將與《天下學習》與《Cheers快樂工作人》及台灣100家企業持續推動與倡議，希望在不遠的未來，透過人才培育的希望工程，讓每一個工作人，都能有感於培育力、提升職能，創造更好的職涯發展與未來。",
    ],
    hashTags: ["人才招募", "競爭力", "人才培育"],
  },
];

export default news;
