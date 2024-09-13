const Task = require('../models/Task');

// Create new task
const createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

// Get tasks by user
const getTasks = async (userId) => {
  return await Task.find({ userId });
};

// Update task
const updateTask = async (taskId, taskData) => {
  return await Task.findByIdAndUpdate(taskId, taskData, { new: true });
};

// Delete task
const deleteTask = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
