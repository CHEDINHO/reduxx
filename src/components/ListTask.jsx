import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import './styles/ListTask.css';

const ListTask = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector(state => state.tasks.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div className="list-task">
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
      <div className="tasks">
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
