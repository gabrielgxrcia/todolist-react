import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  const taskItems = tasks.map(task => (
    <Task
      key={task.id}
      task={task}
      handleTaskClick={handleTaskClick}
      handleTaskDeletion={handleTaskDeletion}
    />
  ))

  return <>{taskItems}</>
}

export default Tasks
