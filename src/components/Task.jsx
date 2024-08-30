import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, removeTask } from '../redux/tasksSlice';
import './styles/Task.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description:', task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  const handleRemove = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(removeTask(task.id));
    }
  };

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      <span>{task.description}</span>
      <div>
        <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Complete'}</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleRemove}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
