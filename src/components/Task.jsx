import './Task.css'
import { CgClose, CgInfo } from 'react-icons/cg'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const handleButtonClick = () => {
    handleTaskDeletion(task.id)
  }

  return (
    <div
      className="task-container"
      style={{
        borderLeft: task.completed ? '6px solid darkseagreen' : 'none',
      }}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button className="remove-task-button" onClick={handleButtonClick}>
          <CgClose />
        </button>
        <button className="see-task-details-button">
          <CgInfo />
        </button>
      </div>
    </div>
  )
}

export default Task
