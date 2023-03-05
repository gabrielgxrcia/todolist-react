import React, { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ])

  const handleTaskClick = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  const handleTaskAddition = taskTitle => {
    const newTask = {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
  }

  const handleTaskDeletion = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const handleTaskUpdate = (taskId, updatedTitle) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, title: updatedTitle } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <div className="container">
              <Header />
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
