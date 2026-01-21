import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import gsap from 'gsap'
import Word from '../word/word'

import './tecnology.scss'

export default function Tecnology({ data }) {
    const containerRefs = useRef([])
    const imgRefs = useRef([])

    if (!data) return null

    useEffect(() => {
        const containers = containerRefs.current
        const imgs = imgRefs.current

        imgs.forEach((img) => {
            gsap.set(img, { opacity: 0 })
        })

        const mouseMove = (e, index) => {
            const container = containers[index]
            const img = imgs[index]

            const rect = container.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const moveX = (x - img.offsetWidth / 2) * 0.1
            const moveY = (y - img.offsetHeight / 2) * 0.1

            gsap.to(img, {
                x: moveX,
                y: moveY,
                duration: 0.5,
                opacity: 1,
                ease: 'power1.out',
            })
        }

        const mouseLeave = (index) => {
            const img = imgs[index]
            gsap.to(img, {
                x: 0,
                y: 0,
                duration: 0.5,
                opacity: 0,
                ease: 'power1.out',
            })
        }

        containers.forEach((container, index) => {
            if (container) {
                container.addEventListener('mousemove', (e) => mouseMove(e, index))
                container.addEventListener('mouseleave', () => mouseLeave(index))
            }
        })

        return () => {
            containers.forEach((container, index) => {
                if (container) {
                    container.removeEventListener('mousemove', (e) => mouseMove(e, index))
                    container.removeEventListener('mouseleave', () => mouseLeave(index))
                }
            })
        }
    }, [])

    return (
        <>
            <section className="tecnology-container" id="tecnologias">
                <div className="row">
                    <div className="container-title">

                        <div className="box">
                            <h1>skills</h1>
                            <p>Minhas principais tecnologias de desenvolvimento</p>
                            <Link to="/projetos">
                                <button>meus projetos</button>
                            </Link>
                        </div>

                    </div>

                    <div className="tecnologias">
                        {data.map((tech, index) => (
                            <div
                                key={index}
                                className="layers"
                                ref={(el) => (containerRefs.current[index] = el)}
                            >
                                <span>{tech.name}</span>
                                <div
                                    className={`box-img box-${tech.name.toLowerCase()}`}
                                    ref={(el) => (imgRefs.current[index] = el)}
                                >
                                    <img src={tech.img} alt={tech.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Word />
        </>
    )
}
