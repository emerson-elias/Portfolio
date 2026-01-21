import { Link } from 'react-router-dom'

import '../experience/experience.scss'

const experiences = [
    {
        company: "l c serviços de tecnologia ltda",
        role: "analista de suporte",
        year: "2023",
    },
    {
        company: "Lider Comercio e Indústria ltda",
        role: "analista de suporte",
        year: "2025",
    },
    {
        company: "Sam Helsom ltda",
        role: "Desenvolvedor web",
        year: "2026",
    },
];

export default function Experience() {
    return (
        <section className="experience-container">
            <div className="row">
                <div className="box-tittle">
                    <span>Minhas</span>
                    <h1>Experiências</h1>
                </div>

                <div className="box-layers">
                    <div className="text-description">
                        <p>
                            Estou sempre disposto à novas oportunidades e experiências. No
                            entanto, entendo completamente que encontrar o profissional
                            adequado pode às vezes parecer uma tarefa árdua. Aqui estão mais
                            alguns detalhes sobre mim para ajudar você a me conhecer melhor e
                            descobrir se sou a pessoa certa para sua empresa!
                        </p>
                    </div>

                    {experiences.map((item, index) => (
                        <div className="layers" key={index}>
                            <h1>{item.company}</h1>
                            <span>{item.role}</span>
                            <p>{item.year}</p>
                        </div>
                    ))}

                    <div className="btn-projects">
                        <Link to="/projetos">
                            <button>Meus projetos</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}