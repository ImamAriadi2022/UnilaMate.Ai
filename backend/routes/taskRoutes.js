const express = require('express');
const { createTask, getAllTasks, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.post('/tasks', authMiddleware, createTask);
router.get('/tasks', authMiddleware, getAllTasks);
router.put('/tasks/:id', authMiddleware, updateTask);
router.delete('/tasks/:id', authMiddleware, deleteTask);

module.exports = router;
