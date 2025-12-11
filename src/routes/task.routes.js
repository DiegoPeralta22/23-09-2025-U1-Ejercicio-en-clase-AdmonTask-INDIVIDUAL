const { Routes, Router } = require("express");
const controller = require("../controllers/tasks.controller");

const router = Router();

router.get("/", controller.findAll);
router.post("/", controller.addTask);
router.delete("/:id", controller.removeTask);
router.get("/:id", controller.findId);
router.patch("/:id", controller.updateTask);
router.patch("/:id/complete", controller.toggleTaskCompletion);

module.exports = router;
