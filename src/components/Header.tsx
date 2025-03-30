import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.png'

export function Header() {
    return (
        <div className={styles.header}>
            <img src={rocketLogo} alt='logo'/>
            <h2 className={styles.title}>To<span className={styles.spanTitle}>do</span></h2>
        </div>
    )
}