import React, { useState } from 'react'
import './AddTask.css'
import Button from './Button'

const AddTask = ({ handleTaskAddition }) => {
  const [novaTarefa, setNovaTarefa] = useState('')

  const handleInputChange = event => {
    setNovaTarefa(event.target.value)
  }

  const handleAddTaskClick = () => {
    if (novaTarefa.trim()) {
      handleTaskAddition(novaTarefa)
      setNovaTarefa('')
    }
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={novaTarefa}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  )
}

export default AddTask
