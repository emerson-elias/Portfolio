import styles from './word.module.scss'

export default function Word() {
    return (
        <section className={styles.word_container}>
            <div className={styles.text_large}>
                <span>performance</span>
                <span>dinamismo</span>
                <span>experiencia</span>
            </div>
        </section>
    )
}