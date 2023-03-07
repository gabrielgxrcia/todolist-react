import React, { useEffect, useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('http://localhost:3333/tasks')
      setTasks(data)
    }
    fetchTasks()
  }, [])

  const handleTaskClick = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  const handleTaskAddition = async taskTitle => {
    const newTask = {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }
    const { data } = await axios.post(`http://localhost:3333/tasks`, newTask)
    setTasks([...tasks, data])
  }

  const handleTaskDeletion = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const deleteTask = async taskId => {
    await axios.delete(`http://localhost:3333/tasks/${taskId}`)
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
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
            </>
          )}
        />
        <Route path="/:id" exact render={() => <TaskDetails data={tasks} />} />
      </div>
    </Router>
  )
}

export default App
