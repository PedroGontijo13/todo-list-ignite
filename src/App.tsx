import { useState } from 'react'
import { AddNewTaskForm } from './components/AddNewTaskForm'
import { Header } from './components/Header'

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const handleCreateNewTask = (task: string) => {
    setTasks([...tasks, task])
    console.log(tasks)
  }

  return (
    <div>
      <Header />
      <AddNewTaskForm onCreateNewTask={handleCreateNewTask} />
    </div>
  )
}

export default App
