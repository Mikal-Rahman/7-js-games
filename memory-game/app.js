const cardArray = [
  {
    name: "flower-01",
    img: "images/flower-01.jpg",
  },
  {
    name: "flower-02",
    img: "images/flower-02.jpg",
  },
  {
    name: "flower-03",
    img: "images/flower-03.jpg",
  },
  {
    name: "flower-04",
    img: "images/flower-04.jpg",
  },
  {
    name: "flower-05",
    img: "images/flower-05.jpg",
  },
  {
    name: "flower-06",
    img: "images/flower-06.jpg",
  },
  {
    name: "flower-01",
    img: "images/flower-01.jpg",
  },
  {
    name: "flower-02",
    img: "images/flower-02.jpg",
  },
  {
    name: "flower-03",
    img: "images/flower-03.jpg",
  },
  {
    name: "flower-04",
    img: "images/flower-04.jpg",
  },
  {
    name: "flower-05",
    img: "images/flower-05.jpg",
  },
  {
    name: "flower-06",
    img: "images/flower-06.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

console.log(cardArray);

const gridDisplay = document.querySelector("#grid");

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function flipCard() {
  let cardId = this.getAttribute("data-id");
  console.log("clicked", cardId);
}
