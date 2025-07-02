// Clock + Greeting
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "Good morning";
    if (hours >= 12 && hours < 17) greeting = "Good afternoon";
    if (hours >= 17 || hours < 5) greeting = "Good evening";
    document.getElementById("greeting").textContent = greeting;
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Theme toggle
// Theme toggle with localStorage
const themeBtn = document.getElementById("themeToggle");

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        themeBtn.textContent = "🌙";
    }
}

themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
});

applySavedTheme();

// ========== TO-DO ========== //
function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    const error = document.getElementById("todoError");

    if (!text) {
        error.textContent = "Please enter a task!";
        return;
    }
    error.textContent = "";
    input.value = "";

    const li = document.createElement("li");
    li.className = "todo-item flex items-center mb-2 p-2 bg-white rounded";
    li.draggable = true;
    li.innerHTML = `
        <input type="checkbox" onchange="toggleTodo(this)" class="mr-2">
        <span class="flex-1">${text}</span>
        <button onclick="editTodo(this)" class="mx-1 text-blue-500 hover:underline">Edit</button>
        <button onclick="deleteTodo(this)" class="ml-auto p-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
    `;
    li.addEventListener("dragstart", dragStart);
    li.addEventListener("dragover", dragOver);
    li.addEventListener("drop", drop);

    document.getElementById("todoList").appendChild(li);
    saveTodos();
}

function toggleTodo(checkbox) {
    checkbox.parentElement.classList.toggle("completed");
    saveTodos();
}

function deleteTodo(btn) {
    btn.parentElement.remove();
    saveTodos();
}

function editTodo(btn) {
    const span = btn.parentElement.querySelector("span");
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim()) {
        span.textContent = newText.trim();
        saveTodos();
    }
}

function filterTodos(filter) {
    const items = document.getElementById("todoList").children;
    for (let item of items) {
        if (filter === "completed" && !item.classList.contains("completed")) {
            item.style.display = "none";
        } else if (filter === "incomplete" && item.classList.contains("completed")) {
            item.style.display = "none";
        } else {
            item.style.display = "";
        }
    }
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll("#todoList li").forEach(li => {
        todos.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = `todo-item flex items-center mb-2 p-2 bg-white rounded ${todo.completed ? "completed" : ""}`;
        li.draggable = true;
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked" : ""} onchange="toggleTodo(this)" class="mr-2">
            <span class="flex-1">${todo.text}</span>
            <button onclick="editTodo(this)" class="mx-1 text-blue-500 hover:underline">Edit</button>
            <button onclick="deleteTodo(this)" class="ml-auto p-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
        `;
        li.addEventListener("dragstart", dragStart);
        li.addEventListener("dragover", dragOver);
        li.addEventListener("drop", drop);
        document.getElementById("todoList").appendChild(li);
    });
}
loadTodos();

// Drag & Drop
let draggedItem = null;
function dragStart(e) {
    draggedItem = this;
}
function dragOver(e) {
    e.preventDefault();
}
function drop(e) {
    e.preventDefault();
    if (this !== draggedItem) {
        this.parentNode.insertBefore(draggedItem, this.nextSibling);
        saveTodos();
    }
}

// ========== NOTES ========== //
const noteColors = ["bg-yellow-200", "bg-green-200", "bg-blue-200", "bg-pink-200"];
function addNote() {
    const input = document.getElementById("noteInput");
    const text = input.value.trim();
    const error = document.getElementById("noteError");

    if (!text) {
        error.textContent = "Please enter a note!";
        return;
    }
    error.textContent = "";
    input.value = "";

    const color = noteColors[Math.floor(Math.random() * noteColors.length)];
    const div = document.createElement("div");
    div.className = `note ${color}`;
    div.draggable = true;
    div.innerHTML = `
        <span class="delete-btn" onclick="deleteNote(this)">×</span>
        <div class="note-text">${text}</div>
        <span class="edit-btn" onclick="editNote(this)">Edit</span>
    `;
    div.addEventListener("dragstart", dragStartNote);
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", dropNote);
    document.getElementById("notesContainer").appendChild(div);
    saveNotes();
}

function deleteNote(btn) {
    btn.parentElement.remove();
    saveNotes();
}

function editNote(btn) {
    const textEl = btn.parentElement.querySelector(".note-text");
    const newText = prompt("Edit note:", textEl.textContent);
    if (newText !== null && newText.trim()) {
        textEl.textContent = newText.trim();
        saveNotes();
    }
}

function saveNotes() {
    const notes = [];
    document.querySelectorAll("#notesContainer .note").forEach(div => {
        notes.push({
            text: div.querySelector(".note-text").textContent,
            color: [...div.classList].find(cls => cls.startsWith("bg-"))
        });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.forEach(note => {
        const div = document.createElement("div");
        div.className = `note ${note.color}`;
        div.draggable = true;
        div.innerHTML = `
            <span class="delete-btn" onclick="deleteNote(this)">×</span>
            <div class="note-text">${note.text}</div>
            <span class="edit-btn" onclick="editNote(this)">Edit</span>
        `;
        div.addEventListener("dragstart", dragStartNote);
        div.addEventListener("dragover", dragOver);
        div.addEventListener("drop", dropNote);
        document.getElementById("notesContainer").appendChild(div);
    });
}
loadNotes();

// Drag & Drop for Notes
let draggedNote = null;
function dragStartNote() {
    draggedNote = this;
}
function dropNote(e) {
    e.preventDefault();
    if (this !== draggedNote) {
        this.parentNode.insertBefore(draggedNote, this.nextSibling);
        saveNotes();
    }
}
