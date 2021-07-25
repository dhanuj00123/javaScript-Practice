// const suri = {
//   name: "suriken",
//   sayHello: function () {
//     console.log(`hello${this.name}`);
//   },
//   age: "21",
// };
// function yellHi() {
//   console.log("HELLOOOO!");
// }
// // setTimeout(yellHi(), 10000);
// // window.alert("hello")
// const pizzaList = document.querySelector(".pizza");
// console.log(pizzaList.textContent);
// pizzaList.insertAdjacentText("beforeend", "🍕");
// pizzaList.insertAdjacentText("beforebegin", "🍕");
// pizzaList.insertAdjacentText("afterbegin", "🍕");
// const img = document.querySelector(".nice");
// console.log(img.classList);
// img.classList.add("open");
// function toggleRound() {
//   img.classList.toggle("round");
// }
// img.addEventListener("click", toggleRound);
// img.width = 500;

// const paragraph = document.createElement("p");
// paragraph.textContent = "hello this is a paragraph created by javaScript";

// const image = document.createElement("img");
// image.src = "https://picsum.photos/100";

// const divjs = document.createElement("div");
// divjs.classList.add("jsClass");

// divjs.appendChild(paragraph);
// divjs.appendChild(img);
// document.body.appendChild(divjs);

//----CREATING A DIV USING JAVASCRIPT-----
const div = document.createElement("div");
div.classList.add("wrapper");
document.body.appendChild(div);

//----CREATING A UNORDERD LIST USING JAVASCRIPT-----
const ul = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`;

//----ADDING THE UNORDERD LIST  IN THE DIV CREATED ABOVE USING JAVASCRIPT-----
div.innerHTML = ul;

//----CREATING A IMAGE TAG USING JAVASCRIPT-----
const image = document.createElement("img");
image.classList.add("cute-pic");
image.src = "https://picsum.photos/200";
image.alt = "random image from internet";
div.appendChild(image);

//-----CREATING A FUNCTION TO GENERATE A PLYER CARD-----

function genarateplayercard(name, age, height) {
  const html = `
        <div class="playercard">
            <h2>${name} - ${age}</h2>
            <p>They are${height}and${age} years old</p>
            <button class="delete" type="button"> Delete</button>
        </div>
        `;
  return html;
}

const cards = document.createElement("div");
cards.classList.add("cards");

let cardsHtml = genarateplayercard("Suriken", 20, 5.6);
cardsHtml = cardsHtml + genarateplayercard("Raj", 12, 5.7);
cardsHtml = cardsHtml + genarateplayercard("Naruto", 32, 6.7);
cardsHtml = cardsHtml + genarateplayercard("Monstergod", 19, 4.7);

cards.innerHTML = cardsHtml;
div.insertAdjacentElement("beforebegin", cards);

//-----deleting div when delete button is clicked----
const buttons = document.querySelectorAll(".delete");

function deletecard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
}

buttons.forEach((button) => button.addEventListener("click", deletecard));
