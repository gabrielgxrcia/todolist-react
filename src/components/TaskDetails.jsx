import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const TaskDetails = () => {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState({})

  let { id } = useParams()
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('http://localhost:3333/tasks')
      setTasks(data)
    }
    fetchTasks()
  }, [])

  useEffect(() => {
    setTask(tasks.filter(task => task.id === id)[0])
  }, [id, tasks])

  return (
    <div>
      <h2>{task?.title}</h2>
      <p>{task?.description}</p>
    </div>
  )
}

export default TaskDetails
