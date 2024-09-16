import { addTodos, deleteTodos } from "../API/todosAPI";

export const todosPage = () => {
  const container = document.createElement("div");

  container.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "h-screen",
    "bg-gray-200"
  );

  const btnHome = document.createElement("button");

  btnHome.classList.add(
    "bg-blue-500",
    "text-white",
    "p-2",
    "rounded",
    "hover:bg-blue-600",
    "mb-4"
  );

  btnHome.textContent = "Home";

  btnHome.addEventListener("click", () => {
    window.location.pathname = "/home";
  });

  const title = document.createElement("h1");

  title.classList.add("text-3xl", "font-bold", "mb-4");
  title.textContent = "List of Todos";

  const formAddTodo = document.createElement("form")
  formAddTodo.classList.add("my-3")

  const inputNameAdd = document.createElement("input")
  inputNameAdd.setAttribute("placeholder","Nombre")
  inputNameAdd.setAttribute("id","todoName")
  inputNameAdd.classList.add("px-4","py-2","rounded")

  const inputStateAdd = document.createElement("input")
  inputStateAdd.setAttribute("type","checkbox")
  inputStateAdd.setAttribute("id","todoState")
  inputStateAdd.classList.add("w-4","h-4","mx-2")

  const buttonAdd = document.createElement("button")
  buttonAdd.classList.add("bg-green-500","px-3","py-2","text-white","rounded")
  buttonAdd.textContent = "Agregar"

  formAddTodo.appendChild(inputNameAdd)
  formAddTodo.appendChild(inputStateAdd)
  formAddTodo.appendChild(buttonAdd)

  buttonAdd.addEventListener("click" , (e) => {
    addTodos(e)
})

  const table = document.createElement("table");

  table.classList.add(
    "w-1/2",
    "bg-white",
    "shadow-md",
    "h-[700px]",
    "overflow-y-scroll"
  );

  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.classList.add("border", "px-4", "py-2");
  th1.textContent = "ID";

  const th2 = document.createElement("th");
  th2.classList.add("border", "px-4", "py-2");
  th2.textContent = "Title";

  const th3 = document.createElement("th");
  th3.classList.add("border", "px-4", "py-2");
  th3.textContent = "Completed";

  const th4 = document.createElement("th");
  th4.classList.add("border", "px-4", "py-2");
  th4.textContent = "Owner Id";

  const th5 = document.createElement("th");
  th5.classList.add("border", "px-4", "py-2");
  th5.textContent = "Manage";

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5)

  thead.appendChild(tr);

  const tbody = document.createElement("tbody");

  tbody.classList.add("text-center");
  table.appendChild(thead);
  table.appendChild(tbody);

  container.appendChild(btnHome);

  fetch("http://localhost:4000/todos",{
    credentials:"include"
  })
    .then((response) => response.json())
    .then((data) => {
      data.todos.forEach((todo) => {
        if (todo.id > 10) return;

        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.classList.add("border", "px-4", "py-2");
        td1.textContent = todo.id;

        const td2 = document.createElement("td");
        td2.classList.add("border", "px-4", "py-2");
        td2.textContent = todo.title;

        const td3 = document.createElement("td");
        td3.classList.add("border", "px-4", "py-2");
        td3.textContent = todo.completed ? "Sí" : "No";

        const td4 = document.createElement("td");
        td4.classList.add("border", "px-4", "py-2");
        td4.textContent = todo.owner;

        const td5 = document.createElement("td");
        td5.classList.add("border", "px-4", "py-2");

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("border","rounded","px-4","py-2", "bg-red-500", "text-white")
        deleteButton.textContent = "Eliminar"
        td5.appendChild(deleteButton)
        deleteButton.addEventListener("click" , () => {
            deleteTodos(todo.id)
            tr.remove();
        })

        const updateButton = document.createElement("button");
        updateButton.classList.add("border","rounded","px-4","py-2","bg-gray-500", "text-white")
        updateButton.textContent = "Actualizar"
        td5.appendChild(updateButton)

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5)
        tbody.appendChild(tr);
      });
    });

  container.appendChild(title);
  container.appendChild(formAddTodo)
  container.appendChild(table);

  return container;
};

