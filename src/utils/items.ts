import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";

const items = [
  {
    title: "Part 1",
    onClick() {
      alert("Part 1 clicked");
    },
    image: img1,
  },
  {
    title: "Part 2",
    onClick() {
      alert("Part 2 clicked");
    },
    image: img2,
  },
  {
    title: "Part 3",
    onClick() {
      alert("Part 3 clicked");
    },
    image: img3,
  },
  {
    title: "Part 4",
    onClick() {
      alert("Part 4 clicked");
    },
    image: img4,
  },
  {
    title: "Part 5",
    onClick() {
      alert("Part 5 clicked");
    },
    image: img5,
  },
  {
    title: "Part 6",
    onClick() {
      alert("Part 6 clicked");
    },
    image: img6,
  },
];

export default items;
