import styles from './TasksList.module.css'
import clipBoard from '../assets/clipboard.svg'

export function TasksList({ tasks }: { tasks: string[] }) {

    return (
        <div className={styles.tasksList}>
            <header className={styles.header}>
                <p>Tarefas criadas {tasks ? <span className={styles.tasksCount}>{tasks.length}</span> : <span className={styles.tasksCount}>0</span>}</p>
                <p><span>Concluidas</span>{tasks ? <span className={styles.tasksCount}>{tasks.length}</span> : <span className={styles.tasksCount}>0</span>}</p>
            </header>
            <div className={styles.tasksContainer}>
                {tasks.length === 0 ? (
                    <div className={styles.emptyList}>
                        <img src={clipBoard} alt="Clipboard" />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                ) : (
                    <div>
                    </div>
                )}
            </div>
        </div>
    )
}