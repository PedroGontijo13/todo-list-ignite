import { useState } from 'react'
import { Check, Trash } from 'phosphor-react'
import styles from './TaskCard.module.css'

interface TaskCardProps {
    task: string
    onCompleteTask: (isCompleted: boolean) => void
    onDeleteTask: (taskToDelete: string) => void
}

export function TaskCard({ task, onCompleteTask, onDeleteTask }: TaskCardProps) {
    const [isChecked, setIsChecked] = useState(false)

    function handleToggleCheck() {
        const newCheckedState = !isChecked
        setIsChecked(newCheckedState)
        onCompleteTask(newCheckedState)
    }

    return (
        <div className={styles.container}>
            <div
                className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`}
                onClick={handleToggleCheck}
            >
                {isChecked && <Check size={12} weight="bold" />}
            </div>

            <p className={`${styles.taskText} ${isChecked ? styles.completed : ''}`}>
                {task}
            </p>
            <Trash size={24} className={styles.trashIcon} onClick={() => { onDeleteTask(task) }} />
        </div>
    )
}