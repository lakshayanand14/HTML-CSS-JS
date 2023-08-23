const add_btnel = document.querySelector(".add_btn");
const todo_containerel = document.querySelector(".todo_container");
const input_itemsel = document.querySelector(".todo_items");
const tasks_el = document.getElementById("tasks");
const task_el = document.getElementById("task");
const todo_taskel = document.querySelector(".todo_task");
const edit_btnel = document.querySelector(".edit_btn");
const todo_item_el = document.querySelector(".todo_item");
var delete_btnel = document.querySelector(".delete_btn");
const checkbox_el = document.querySelector(".check");

add_btnel.addEventListener("click", function () {
  if (input_itemsel.value.length == 0) {
    alert("Please input your task");
  } else {
    tasks_el.innerHTML += `<div class="task">
    <input
        type="text"
        class="todo_item"
        value="${input_itemsel.value}"
        name="list of item"
        readonly
      />
        <div>
          <button class="edit_btn btn"><i class="fa fa-edit"></i></button>
          <button class="delete_btn btn"><i class="material-icons">delete</i></button>
        </div>
      </div>`;
  }
  input_itemsel.value = "";
});
