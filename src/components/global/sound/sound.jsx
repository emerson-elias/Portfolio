import { useRef, useState, useEffect } from 'react'
import { useAssetsLoaded } from '../../../contexts/AssetLoaderProvider'
import music from '/assets/music/sappheiros.mp3'

import styles from './sound.module.scss'

export default function Sound() {
    const musicRef = useRef(null)
    const spanRef = useRef(null)

    const [soundState, setSoundState] = useState('OFF')
    const { allAssetsLoaded } = useAssetsLoaded()

    useEffect(() => {
        if (allAssetsLoaded && musicRef.current) {
            musicRef.current.volume = 0.3
        }
    }, [allAssetsLoaded])

    const eventSound = () => {
        if (!allAssetsLoaded) return

        const musicElement = musicRef.current
        if (musicElement.paused) {
            musicElement.play().then(() => setSoundState('ON'))
        } else {
            musicElement.pause()
            setSoundState('OFF')
        }
    }

    return (
        <a className={styles.sound_container} onClick={eventSound} title='Vamos aumentar a experiência?'>
            <span ref={spanRef}>música : {soundState}</span>
            <audio ref={musicRef} loop src={music} preload="auto"></audio>
        </a>
    )
}
