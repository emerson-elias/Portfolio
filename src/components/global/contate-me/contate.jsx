import styles from './contate.module.scss'

export default function Contate() {
    return (
        <section className={styles.contate_container}>
            <span>gostou?</span>
            <span>Contate-me</span>
            <span>vamos</span>
            <span>trabalhar</span>
            <span>juntos...</span>

            <div className={styles.arrow}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.10162 3.10156L62.9999 62.9999" strokeLinecap="round" strokeLinejoin="round" stroke="#ffffffb9"></path>
                    <path d="M63 1.00001L63 63L0.999989 63" strokeLinecap="round" strokeLinejoin="round" stroke="#ffffffb9"></path>
                </svg>
            </div>   
        </section>
    )
}