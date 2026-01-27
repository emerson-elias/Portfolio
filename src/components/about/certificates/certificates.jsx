import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import '../certificates/certificates.scss'

const certificates = [
    {
        id: 1,
        title: 'mineração',
        img: '/assets/certificados/certificado-mineração.png',
        year: '2020',
    }
    ,
    {
        id: 2,
        title: 'monitor',
        img: '/assets/certificados/certificado-monitor.png',
        year: '2020',
    }
    ,
    {
        id: 3,
        title: 'potencializa',
        img: '/assets/certificados/certificado-potencializa.png',
        year: '2020',
    }
    ,
    {
        id: 4,
        title: 'diploma',
        img: '/assets/certificados/diploma.png',
        year: '2020',
    }
]

export default function Certificates() {

    const containerRefs = useRef([])
    const imgRefs = useRef([])

    useEffect(() => {
        const containers = containerRefs.current
        const imgs = imgRefs.current

        imgs.forEach((img) => {
            gsap.set(img, {
                opacity: 0,
            })
        })

        const mouseMove = (e, index) => {
            const container = containers[index]
            const img = imgs[index]

            container.style.zIndex = 100

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
            const container = containers[index]
            const img = imgs[index]

            container.style.zIndex = ""

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
        <section className="certificados-container">
            <div className="word-big">
                <span>certificado</span>
                <span>dos</span>
                <span>projetos</span>

                <svg
                    width="300"
                    height="244"
                    viewBox="0 0 300 244"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2.69582 130.546C1.36584 130.546 2.20758 130.45 3.02641 129.888C10.4343 124.797 17.5774 119.412 25.1761 114.569C75.9755 82.1899 133.571 57.3954 189.398 35.0939C219.856 22.9265 249.706 12.0494 281.468 4.53914C290.818 2.32826 303.397 -2.26048 295.518 11.5396C274.87 47.7026 235.577 77.0991 203.035 101.968C176.929 121.919 148.922 139.556 122.04 158.466C111.922 165.582 101.857 172.503 92.121 180.126C90.5713 181.339 87.3987 183.914 91.2119 183.914C96.6337 183.914 104.189 178.602 108.981 176.173C115.874 172.678 124.291 168.525 129.974 163.16C134.036 159.325 125.448 164.972 124.684 165.631C114.42 174.482 106.339 187.914 101.212 200.221C96.4585 211.633 86.7715 238.553 105.345 241.4C111.04 242.273 117.447 242.016 123.197 241.729C125.2 241.63 128.88 240.247 124.684 240.247"
                        stroke="#ffffffb9"
                        strokeWidth="3"
                        strokeLinecap="round">
                    </path>
                </svg>
            </div>

            <div className="row">
                {certificates.map((project, index) => (
                    <div
                        key={index}
                        className="layers"
                        ref={(el) => (containerRefs.current[index] = el)}
                    >
                        <h1>{project.title}</h1>

                        <div className="certi-icon">
                            <img
                                src={project.img}
                                alt={project.title}
                                ref={(el) => (imgRefs.current[index] = el)}
                            />
                        </div>

                        <h2>{project.year}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}
