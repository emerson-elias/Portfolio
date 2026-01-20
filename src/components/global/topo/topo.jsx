import { useEffect, useRef } from 'react'

import styles from './topo.module.scss'

export default function Topo() {
    const topoRef = useRef(null)

    useEffect(() => {
        const root = document.getElementById('root')
        const topo = topoRef.current

        const scroll = () => {
            const scrollY = root.scrollTop
            const scrollHeight = root.scrollHeight
            const clientHeight = root.clientHeight

            const distanceToBottom = scrollHeight - (scrollY + clientHeight)

            if (scrollY > 200) {
                topo.style.opacity = '1'
                topo.style.pointerEvents = 'auto'
            } else {
                topo.style.opacity = '0'
                topo.style.pointerEvents = 'none'
            }

            if (distanceToBottom <= clientHeight / 2) {
                topo.classList.add(styles.colorBottom)
            } else {
                topo.classList.remove(styles.colorBottom)
            }
        }

        const click = () => {
            root.scrollTo({ top: 0, behavior: 'smooth' })
        }

        root.addEventListener('scroll', scroll)
        topo.addEventListener('click', click)

        return () => {
            root.removeEventListener('scroll', scroll)
            topo.removeEventListener('click', click)
        }
    }, [])

    return (
        <section className={styles.button_top} title="Volte ao topo" ref={topoRef}>
            <a>
                <i className="fa-solid fa-chevron-up"></i>
            </a>
        </section>
    )
}
