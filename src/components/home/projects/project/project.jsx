import { Link } from "react-router-dom"
import { useState } from "react"
import { useAssetsLoaded } from "../../../../contexts/AssetLoaderProvider"
import Modal from "../modals/modal/modal"
import ProjectVideo from "../projectVideo/projectVideo"

import './project.scss'

export default function Project({ data }) {
    const [showModal, setShowModal] = useState(false)
    const [currentProject, setCurrentProject] = useState(null)

    if (!data) return null

    const {
        gifsLoaded,
        fontsLoaded,
    } = useAssetsLoaded()

    const openModal = (project) => {
        setCurrentProject(project)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setCurrentProject(null)
    }

    if (!gifsLoaded || !fontsLoaded) return null

    return (
        <section className="project-container">

            <div className="title">

                <h1>Projetos</h1>

                <Link to="/projetos">
                    <div className="svg" title="Todos os projetos">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                        </svg>
                        <span>Todos</span>
                    </div>
                </Link>

            </div>

            <div className="row">
                {data.slice(0, 4).map((project) => (
                    <div className='projects' key={project.id}>
                        {showModal && currentProject?.id === project.id && (
                            <Modal
                                setShowModal={closeModal}
                                title={currentProject.title}
                                video={currentProject.video}
                                modalInfo={currentProject.modalInfo}
                                year={currentProject.year}
                                link={currentProject.link}
                                link_github={currentProject.link_github}
                                tecnology={currentProject.tecnology}
                                bg_view={currentProject.bg_view}
                            />
                        )}

                        <div className="name">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </div>

                        <div className={'view'}
                            style={{ backgroundImage: `url(${project.img_bg})` }}
                            onClick={() => openModal(project)}
                        >
                            <div className="boxVideo">
                                <ProjectVideo video={project.video} background={project.bg_view} />
                            </div>
                        </div>

                        <div className="info">
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ancor_about">

                <Link id="animate" to="/sobre">

                    <div className="ancora" title="Sobre Mim">
                        <span>Quem sou?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                        </svg>
                    </div>

                </Link>

            </div>
        </section>
    )
}
