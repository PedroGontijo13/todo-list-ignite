import { useState } from 'react'
import { AddNewTaskForm } from './components/AddNewTaskForm'
import { Header } from './components/Header'
import { TasksList } from './components/TasksList'
import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [completedTasks, setCompletedTasks] = useState(0)

  const handleCreateNewTask = (task: string) => {
    setTasks([...tasks, task])
    console.log(tasks)
  }

  const handleDeleteTask = (taskToDelete: string) => {
    const updatedTasks = tasks.filter(task => task !== taskToDelete)
    setTasks(updatedTasks)
    setCompletedTasks(completedTasks - 1)
  }

  const handleCompleteTask = () => {
    setCompletedTasks(completedTasks + 1)
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <AddNewTaskForm onCreateNewTask={handleCreateNewTask} />
        <TasksList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onCompleteTask={handleCompleteTask}
          completedTasks={completedTasks}
        />
      </div>
    </div>
  )
}

export default App
