import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { useAssetsLoaded } from '../../../contexts/AssetLoaderProvider'

import './nav.scss'

const links = [
    {
        to: '/sobre',
        label: 'Sobre mim'
    },
    {
        to: '/#tecnologias',
        label: 'Tecnologias'
    },
    {
        to: '/projetos',
        label: 'Projetos'
    },
    {
        href: '#contatos',
        label: 'Contatos',
        isAnchor: true
    }
]

const socialLinks = [
    {
        href: "https://github.com/emerson-elias",
        iconClass: "fa-brands fa-github-alt",
        ariaLabel: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/emerson-elias-9b2894228/",
        iconClass: "fa-brands fa-linkedin-in",
        ariaLabel: "LinkedIn",
    },
    {
        href: "https://www.instagram.com/emersoneliass_/",
        iconClass: "fa-brands fa-instagram",
        ariaLabel: "Instagram",
    },
    {
        href: "https://docs.google.com/document/d/1D3gWhBItiDfZF_oLZYlBEtVqMyBcrpjm42Z0rwLpZX8/edit?usp=sharing",
        iconClass: "fa-regular fa-file-lines",
        ariaLabel: "Currículo",
    }
]

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const { transitionTo } = useAssetsLoaded()

    const ulRef = useRef(null)
    const linksRef = useRef([])
    const tlRef = useRef(null)
    const socialLinksRef = useRef([])

    const toggleMenu = () => setMenuOpen(prev => !prev)

    const navigation = (e, path) => {
        e.preventDefault()

        // Se o menu estiver aberto, acelera o fechamento para evitar conflito visual com o loader
        if (menuOpen && tlRef.current) {
            tlRef.current.timeScale(3)
        }

        setMenuOpen(false)
        transitionTo(path)
    }

    useEffect(() => {
        const root = document.getElementById('root')

        if (menuOpen) {
            root.style.overflow = 'hidden'
        } else {
            root.style.overflow = 'auto'
        }

        const onScroll = () => {
            const header = document.querySelector('header')
            if (header && root) {
                header.classList.toggle('mobile', root.scrollTop > 1)
            }
        }

        root?.addEventListener('scroll', onScroll)
        return () => {
            root?.removeEventListener('scroll', onScroll)
        }
    }, [menuOpen])

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) element.scrollIntoView({ behavior: 'auto' })
        }

        setMenuOpen(false)
    }, [location])

    useEffect(() => {
        const ul = ulRef.current
        const links = linksRef.current
        const socials = socialLinksRef.current

        gsap.set([...links, ...socials], {
            y: 150,
            opacity: 0
        })

        gsap.set(ul, {
            clipPath: 'inset(0% 0% 100% 0%)',
            opacity: 1
        })

        tlRef.current = gsap.timeline({
            paused: true,
            defaults: { ease: 'power2.out' },
            onReverseComplete: () => {
                ul.style.pointerEvents = 'none'
            }
        })

        tlRef.current
            .to(ul, {
                duration: 0.5,
                clipPath: 'inset(0% 0% 0% 0%)',
                onStart: () => {
                    ul.style.pointerEvents = 'auto'
                }
            })
            .to([...links, ...socials], {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1
            }, '-=0.3')
    }, [])

    useEffect(() => {
        if (menuOpen) {
            tlRef.current?.timeScale(1).play() // Reseta a velocidade para o normal ao abrir
        } else {
            tlRef.current?.reverse()
        }
    }, [menuOpen])

    return (
        <header>
            <nav className="navbar">
                <div className="active-bar">
                    <Link to="/" onClick={navigation}>
                        <span>emerson</span>
                        <span><i className="game-icons--polar-star"></i> moraes</span>
                    </Link>
                </div>

                <a className={`burguer ${menuOpen ? 'rotate' : ''}`} onClick={toggleMenu}>
                    <span className={menuOpen ? 'span-one' : ''}></span>
                    <span className={menuOpen ? 'span-dwo' : ''}></span>
                    <span className={menuOpen ? 'span-there' : ''}></span>
                </a>

                <ul id="ancora" ref={ulRef} className="collapse">
                    {links.map((link, index) => (
                        <li key={index}>
                            {link.isAnchor ? (
                                <a
                                    href={link.href}
                                    ref={el => linksRef.current[index] = el}
                                    onClick={(e) => navigation(e, link.href)}
                                >{link.label}</a>
                            ) : (
                                <Link
                                    to={link.to}
                                    ref={el => linksRef.current[index] = el}
                                    onClick={(e) => navigation(e, link.to)}
                                >{link.label}</Link>
                            )}
                        </li>
                    ))}

                    <div className="midia">
                        {socialLinks.map(({ href, iconClass, ariaLabel }, i) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={ariaLabel}
                                ref={el => socialLinksRef.current[i] = el}
                            >
                                <i className={iconClass}></i>
                            </a>
                        ))}
                    </div>

                </ul>
            </nav>
        </header>
    )
}