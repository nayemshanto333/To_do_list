const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const todolist = document.querySelector("#todoList");

let tasks=[];
let editTodo = null;

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let inputText = input.value.trim();

  if (inputText.length <= 0) {
    alert(`You must write something`);
    return false;
  }

  if (addBtn.value === "Update") {
    editTodo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value = "Add";
    input.value = "";
  } else{
    // Add item
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    // Edit item

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    // Remove item

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.classList.add("btn", "deleteBtn");
    li.appendChild(removeBtn);

    todolist.appendChild(li);
    input.value = "";
  } 
  
});

todolist.addEventListener("click", (update) => {
  update.preventDefault();
  if (update.target.innerHTML === "Remove") {
    todolist.removeChild(update.target.parentElement);
  }
  if (update.target.innerHTML === "Edit") {
    input.value = update.target.previousElementSibling.innerHTML;
    input.focus();
    addBtn.value = "Update";
    editTodo = update;
  }
});

