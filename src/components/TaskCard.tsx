import { useState } from 'react'
import { Check, Trash } from 'phosphor-react'
import styles from './TaskCard.module.css'

interface TaskCardProps {
    task: string
    onComplete?: (isCompleted: boolean) => void
    onDeleteTask: (taskToDelete: string) => void
}

export function TaskCard({ task, onComplete, onDeleteTask }: TaskCardProps) {
    const [isChecked, setIsChecked] = useState(false)

    function handleToggleCheck() {
        const newCheckedState = !isChecked
        setIsChecked(newCheckedState)

        if (onComplete) {
            onComplete(newCheckedState)
        }
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
            <Trash size={24} className={styles.trashIcon} onClick={() => {onDeleteTask(task)}} />
        </div>
    )
}