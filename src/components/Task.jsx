import './Task.css'
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Task = ({ task, handleTaskDeletion }) => {
  const history = useHistory()

  const handleTaskDetailsClick = () => {
    history.push(`/${task.id}`)
  }

  const handleDeleteTask = async () => {
    await axios.delete(`http://localhost:3333/tasks/${task.id}`)
  }

  return (
    <div
      className="task-container"
      style={{
        borderLeft: task.completed ? '6px solid darkseagreen' : 'none',
      }}
    >
      <div className="task-title">{task.title}</div>
      <div className="buttons-container">
        <button className="remove-task-button" onClick={handleDeleteTask}>
          <CgClose />
        </button>
        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  )
}

export default Task
