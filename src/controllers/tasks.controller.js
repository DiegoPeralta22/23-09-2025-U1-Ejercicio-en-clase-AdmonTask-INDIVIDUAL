const Task = require("../models/task.model");

exports.findAll = (req, res) => {
  const data = Task.findAll();
  res.status(200).json(data);
};

exports.addTask = (req, res) => {
  const title = req.body.title;
  const createdTask = Task.create(title);
  res.status(201).json(createdTask);
};

exports.removeTask = (req, res) => {
  const id = req.params.id;
  const ok = Task.removeTask(id);
  if (!ok) return res.status(404).json({ message: "TAREA NO ENCONTRADA" });
  res.status(204).json({ message: "TAREA ELIMINADA" });
};

exports.findId = (req, res) => {
  const id = req.params.id;
  const data = Task.findId(id);
  if (!data) {
    return res.status(404).json({ message: "TAREA NO ENCONTRADA" });
  }
  return res.status(200).json(data);
};

exports.updateTask = (req, res) => {
  const id = req.params.id;
  const { title } = req.body;

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ message: "El título es requerido y debe ser texto" });
  }

  const updated = Task.updateTask(id, title);

  if (!updated) {
    return res.status(404).json({ message: "TAREA NO ENCONTRADA" });
  }

  return res.status(200).json(updated);
};

exports.toggleTaskCompletion = (req, res) => {
  const id = req.params.id;

  const updatedTask = Task.toggleTaskCompletion(id);

  if (!updatedTask) {
    return res.status(404).json({ message: "TAREA NO ENCONTRADA" });
  }

  return res.status(200).json(updatedTask);
};
