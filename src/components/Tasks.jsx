import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, handleTaskClick }) => {
  const taskItems = tasks.map(task => (
    <Task key={task.id} task={task} handleTaskClick={handleTaskClick} />
  ))

  return <>{taskItems}</>
}

export default Tasks
