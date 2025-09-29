import { useRef } from 'react'

import Linear from '../textLianer/linear'

import './footer.scss'

export default function Footer() {

    const btnRef = useRef(null)

    function EmailClick() {
        const email = 'emersonees707@gmail.com'
        const subject = 'Vamos trabalhar juntos :)'
        const body = 'Olá Emerson Elias.\n\nVi seus projetos no seu portifólio e gostaria de saber mais sobre suas habilidades, vamos trabalhar juntos?.\n\nAtenciosamente:\n---- Seu Nome ----'
        const mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)

        window.location.href = mailtoLink
    }

    return (
        <footer className='footer-container' id='contatos'>

            <section className='text-linear'>
                <Linear text={'- entre em contato comigo'} size='20vmax'/>
            </section>

            <section className='row'>

                <a href="#" className='btn-container'>
                    <button className='btn-contact' ref={btnRef} onClick={EmailClick}>
                        entre em contato
                    </button>
                </a>

                <div className="information">
                    <p>mande-me uma mensagem, vamos trabalhar juntos e desenvolver experiências incríveis</p>

                    <div className='layer'>
                        <h1> ① escreva um e-mail</h1>
                        <a onClick={EmailClick}>emersonees707@gmail.com</a>
                    </div>

                </div>

                <div className="social-row">

                    <h1> ② vamos, seja social</h1>

                    <div className="midia">

                        <a className="cv" href="https://drive.google.com/file/d/1na1jTXvwixQ6DvKto-m9MXWNqzAS1eHI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <i className="fa-regular fa-file-lines"></i>
                        </a>

                        <a className="instagram" href="https://www.instagram.com/emersoneliass_/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a className="linkedin" href="https://www.linkedin.com/in/emerson-elias-9b2894228/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a className="git-icon-footer" href="https://github.com/emerson-elias" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github-alt"></i>
                        </a>

                    </div>

                </div>

            </section>
        </footer>
    )
}