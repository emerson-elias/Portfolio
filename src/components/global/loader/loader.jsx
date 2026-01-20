import styles from './loader.module.scss'

export default function Loader({ isExiting, isEntering }) {
    return (
        <section className={`
            ${styles.loader_container} 
            ${isExiting ? styles.exit : ''}
            ${isEntering ? styles.enter : ''}
        `}>
            <div className={styles.cube}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.loader}>
                <span>carregando</span>
            </div>
        </section>
    )
}
