type Achievement = typeof achievements[number];

const achievements = [
  {
    id: 1,
    img: "https://picsum.photos/seed/ddfdf/500/300",
    year: 2022,
    icons: [
      "/img/icons/door1.svg",
      "/img/icons/door2.svg",
      "/img/icons/door3.svg",
      "/img/icons/door4.svg",
      "/img/icons/door5.svg",
      "/img/icons/door6.svg",
      "/img/icons/door7.svg",
    ],
    title: "廠辦大門",
    subText: "造門工藝與烤漆品質提升。",
  },
  {
    id: 2,
    img: "https://picsum.photos/seed/seed/500/300",
    year: 2019,
    icons: ["/img/icons/door1.svg"],
    title: "台中港西門子歌美颯離岸風力廠房新建工程",
    subText: "柔性門。",
  },
  {
    id: 3,
    img: "https://picsum.photos/seed/abc/500/300",
    year: 2020,
    icons: ["/img/icons/door3.svg"],
    title: "澳門新濠天地, City of Dreams",
    subText: "UL防火捲門。",
  },
  {
    id: 4,
    img: "https://picsum.photos/seed/def/500/300",
    year: 2020,
    icons: [
      "/img/icons/door1.svg",
      "/img/icons/door2.svg",
      "/img/icons/door3.svg",
      "/img/icons/door4.svg",
      "/img/icons/door5.svg",
      "/img/icons/door6.svg",
      "/img/icons/door7.svg",
    ],
    title: "沙烏地阿拉伯YNP 案",
    subText: "超大型防颱捲門。",
  },
];

export type { Achievement };
export default achievements;
