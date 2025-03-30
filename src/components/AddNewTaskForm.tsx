import { FormEvent, useState, ChangeEvent } from 'react'
import styles from './AddNewTaskForm.module.css'
import { PlusCircle } from 'phosphor-react'

interface AddNewTaskFormProps {
    onCreateNewTask: (task: string) => void
}

export function AddNewTaskForm({ onCreateNewTask }: AddNewTaskFormProps) {
    const [newTask, setNewTask] = useState<string>('')

    const handleNewTaskChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewTask(event.target.value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        onCreateNewTask(newTask)
        setNewTask('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <textarea onChange={handleNewTaskChange} placeholder="Add a new task" />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} weight="bold" />
                </button>
            </div>
        </form>
    )
}