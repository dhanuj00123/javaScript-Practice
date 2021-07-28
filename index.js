let taskWritten = document.querySelector(`[name="writtenTask"]`);
const buttondiv = document.querySelector(".added-task");
const addButton = document.querySelectorAll(".add-button");
const removebutton = document.querySelectorAll(".icon");

addButton[0].addEventListener("click", function (event) {
  const task = taskWritten.value;
  if (task.trim() != 0) {
    const taskHTML = `<li class="task-area flexb">${task}<span class="icon" ><i class="fas fa-minus-circle"></i></span></li>`;
    buttondiv.insertAdjacentHTML("afterbegin", taskHTML);
    var removebutton = document.querySelectorAll(".icon");
    console.log(removebutton);
  }
});


