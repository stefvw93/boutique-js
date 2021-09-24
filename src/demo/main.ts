import "./style.css";
import { div, h1 } from "../../lib/elements";
import { state } from "../../lib/State";

function Tile($key: number, hidden?: boolean) {
  const color = state("#FFF");

  const getRandomColor = () =>
    `rgb(${[
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
    ].join(",")})`;

  const $onAppend = () => {
    if (hidden) return;
    setTimeout(() => {
      color.state = getRandomColor();
      setInterval(() => {
        color.state = getRandomColor();
      }, 1000);
    }, Math.random() * 1000);
  };

  return div({
    $onAppend,
    $key,
    className: "tile",
    style: () =>
      `background-color: ${color.state}; visibility: ${
        hidden ? "hidden" : "visible"
      }`,
  });
}

function FunkyTiles() {
  const numbers = new Array(100).fill(0).map((_, i) => i);

  const hidden = [
    12, 13, 14, 15, 16, 23, 27, 33, 37, 43, 44, 45, 46, 53, 57, 63, 68, 73, 78,
    82, 83, 84, 85, 86, 87,
  ];

  return div(
    {
      className: "funky-tiles",
      style: `padding-bottom: ${outerHeight - innerHeight}px`,
    },
    numbers.map((number) => Tile(number, hidden.includes(number)))
  );
}

function App() {
  const time = state(new Date());

  const $onAppend = () => setInterval(() => (time.state = new Date()), 500);

  return div({ id: "root", $onAppend }, [
    div({ className: "brand" }, [
      h1({ $text: "Boutique.js" }),
      div({
        $text: () => `${time.state.toTimeString().split(" ")[0]}`,
      }),
    ]),
    FunkyTiles(),
  ]);
}

const tree = App()();
tree.mount(document.getElementById("app")!);
