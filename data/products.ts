import { stringify } from "querystring";

const products: {
  series: string;
  items: { id: number; name: string }[];
  icon: string;
}[] = [
  {
    series: "防火防煙捲門系列",
    items: [
      { id: 1, name: "防火捲門" },
      { id: 2, name: "阻熱捲門" },
      { id: 3, name: "阻熱遮煙捲門" },
      { id: 4, name: "遮煙捲幕" },
    ],
    icon: "/img/icons/door1.svg",
  },
  {
    series: "防水防洪門系列",
    items: [
      { id: 5, name: "防水捲門" },
      { id: 6, name: "新式手動插板水閘門" },
      { id: 7, name: "電動油壓水閘門" },
      { id: 8, name: "扇形水閘門" },
      { id: 9, name: "手動扇形水密門" },
      { id: 10, name: "電動扇形水密門" },
      { id: 11, name: "電動橫移水密門" },
    ],
    icon: "/img/icons/door2.svg",
  },
  {
    series: "抗風防颱捲門系列",
    items: [
      { id: 12, name: "防颱捲門" },
      { id: 13, name: "重型防颱捲門" },
    ],
    icon: "/img/icons/door3.svg",
  },
  {
    series: "廠辦管制門",
    items: [
      { id: 14, name: "密閉式捲門" },
      { id: 15, name: "花格式捲門" },
      { id: 16, name: "側開式PVC捲門" },
      { id: 17, name: "uniflow" },
    ],

    icon: "/img/icons/door4.svg",
  },
  {
    series: "圍牆大門",
    items: [
      { id: 18, name: "單段式大門" },
      { id: 19, name: "多段式大門" },
      { id: 20, name: "伸縮大門" },
    ],
    icon: "/img/icons/door5.svg",
  },
  {
    series: "機庫門",
    items: [
      { id: 21, name: "柔性門" },
      { id: 22, name: "橫移式機庫門" },
    ],
    icon: "/img/icons/door6.svg",
  },
  { series: "客製化", items: [], icon: "/img/icons/door7.svg" },
];

export default products;
