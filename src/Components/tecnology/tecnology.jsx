import { useEffect, useRef, React } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

import './tecnology.scss'
import Word from './word/word'

export default function Tecnology() {

  const containerRefs = useRef([])
  const imgRefs = useRef([])

  const technologies = [
    { name: 'HTML', img: '/assets/icon-tec/html.png' },
    { name: 'CSS', img: '/assets/icon-tec/css.png' },
    { name: 'SASS', img: '/assets/icon-tec/sass.png' },
    { name: 'REACT', img: '/assets/icon-tec/react.png' },
    { name: 'JAVASCRIPT', img: '/assets/icon-tec/js.png' },
    { name: 'TYPESCRIPT', img: '/assets/icon-tec/ts.png' },
    { name: 'PHP', img: '/assets/icon-tec/php.png' },
    { name: 'GIT', img: '/assets/icon-tec/github.png' },
    { name: 'VERCEL', img: '/assets/icon-tec/vercel.png' },
    { name: 'FIGMA', img: '/assets/icon-tec/figma.png' },
    { name: 'SQL', img: '/assets/icon-tec/sql-server.png' },
    { name: 'JAVA', img: '/assets/icon-tec/java.png' },
    { name: 'TAILWIND', img: '/assets/icon-tec/tailwind.png' },
    { name: 'BOOTSTRAP', img: '/assets/icon-tec/bootstrap.png' },
    { name: 'MATERIALIZE', img: '/assets/icon-tec/materialize.png' }
  ];

  useEffect(() => {
    const containers = containerRefs.current
    const imgs = imgRefs.current

    imgs.forEach((img) => {
      gsap.set(img, { opacity: 0 })
    })

    const handleMouseMove = (e, index) => {
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

    const handleMouseLeave = (index) => {
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
        container.addEventListener('mousemove', (e) => handleMouseMove(e, index))
        container.addEventListener('mouseleave', () => handleMouseLeave(index))
      }
    })

    return () => {
      containers.forEach((container, index) => {
        if (container) {
          container.removeEventListener('mousemove', (e) => handleMouseMove(e, index))
          container.removeEventListener('mouseleave', () => handleMouseLeave(index))
        }
      })
    }
  }, [])

  return (
    <>
      <section className="tecnology-container">
        <div className="row">
          <div className="container-title">
            <div className="box">
              <h1 id="tecnologias">skills</h1>
              <p>Essas são as tecnologias que estou trabalhando no momento</p>
              <Link to="/projetos">
                <button>meus projetos</button>
              </Link>
            </div>
          </div>

          <div className="tecnologias">
            {technologies.map((tech, index) => (
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
