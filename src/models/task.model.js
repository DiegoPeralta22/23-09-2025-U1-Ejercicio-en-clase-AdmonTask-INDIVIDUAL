const { randomUUID } = require("node:crypto");
const { title } = require("node:process");

let tasks = [
  { id: randomUUID(), title: "Aprender Api Rest", completed: false },
  {
    id: randomUUID(),
    title: "Utilizar el MVC en el API Rest",
    completed: false,
  },
];

function findAll() {
  return tasks;
}

function addTask(title) {
  const task = {
    id: randomUUID(),
    title: title,
    completed: false,
  };
  tasks.push(task);
  return task;
}

function removeTask(id) {
  const index = tasks.findIndex((item) => item.id == id);
  if (index == -1) return false;
  tasks.splice(index, 1);
  return true;
}

function findId(id) {
  return tasks.find((item) => item.id === id) || null;
}

function updateTask(id, newTitle) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return null;
  task.title = newTitle;
  return task;
}

function toggleTaskCompletion(id) {
  const task = tasks.find((item) => item.id === id);
  if (task) {
    task.completed = !task.completed;
    return task;
  }
  return null;
}

module.exports = {
  findAll,
  addTask,
  removeTask,
  findId,
  updateTask,
  toggleTaskCompletion,
};
