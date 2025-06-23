const input = document.querySelector(".input");
const itemList = document.querySelector(".item");
const API_URL = 'http://localhost:3000/api/todos';

// Load all todos on page load
window.onload = fetchTodos;

async function fetchTodos() {
    const res = await fetch(API_URL);
    const todos = await res.json();
    itemList.innerHTML = ''; // Clear old items
    todos.forEach(todo => renderTodo(todo));
}

function renderTodo(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo._id;
    li.style.textDecoration = todo.completed ? "line-through" : "none";
    li.innerHTML = `
        ${todo.text}
        <i id="i1" class="fa fa-pencil"></i>
        <i id="i2" class="fa fa-trash"></i>
    `;
    itemList.appendChild(li);

    li.querySelector("#i2").addEventListener("click", () => deleteTodo(todo._id));
    li.querySelector("#i1").addEventListener("click", () => editTodo(todo));
    li.addEventListener("click", (e) => {
        if (!["I", "i"].includes(e.target.tagName)) {
            toggleComplete(todo);
        }
    });
}

async function Add() {
    if (input.value.trim() === "") {
        alert("Please enter task");
        return;
    }

    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input.value })
    });

    const newTodo = await res.json();
    renderTodo(newTodo);
    input.value = "";
}

async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.querySelector(`li[data-id='${id}']`).remove();
}

async function toggleComplete(todo) {
    const updatedTodo = {
        ...todo,
        completed: !todo.completed
    };

    const res = await fetch(`${API_URL}/${todo._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodo)
    });

    const data = await res.json();
    const li = document.querySelector(`li[data-id='${todo._id}']`);
    li.style.textDecoration = data.completed ? "line-through" : "none";
}

function editTodo(todo) {
    const li = document.querySelector(`li[data-id='${todo._id}']`);
    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.value = todo.text;

    li.innerHTML = '';
    li.appendChild(inputBox);
    inputBox.focus();

    inputBox.addEventListener("blur", async () => {
        const newText = inputBox.value;
        const updated = { ...todo, text: newText };

        const res = await fetch(`${API_URL}/${todo._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated)
        });

        const updatedTodo = await res.json();
        li.innerHTML = `
            ${updatedTodo.text}
            <i id="i1" class="fa fa-pencil"></i>
            <i id="i2" class="fa fa-trash"></i>
        `;
        li.style.textDecoration = updatedTodo.completed ? "line-through" : "none";

        li.querySelector("#i2").addEventListener("click", () => deleteTodo(updatedTodo._id));
        li.querySelector("#i1").addEventListener("click", () => editTodo(updatedTodo));
    });
}
