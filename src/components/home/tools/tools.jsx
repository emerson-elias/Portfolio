import './tools.scss'

const tools = [
    { name: 'canvas', url: 'https://www.canva.com/' },
    { name: 'gsap', url: 'https://gsap.com/' },
    { name: 'gamma app', url: 'https://gamma.app/' },
    { name: 'clippy css', url: 'https://bennettfeely.com/clippy/' },
    { name: 'flaticon', url: 'https://www.flaticon.com/' },
    { name: 'animista', url: 'https://animista.net/' },
    { name: 'swiper', url: 'https://swiperjs.com/' },
    { name: 'pure css', url: 'https://purecss.io/' }
]

export default function Tools() {
    const marqueeTools = [...tools, ...tools, ...tools, ...tools];
    const marqueeToolsReverse = [...tools].reverse().concat([...tools].reverse(), [...tools].reverse(), [...tools].reverse());

    return (
        <section className="tools-container">

            <div className="title-svg">
                <div className="layer">
                    <h1>tools</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                        <path
                            d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z"
                            fill="#ffffffb9"
                        />
                    </svg>
                </div>
            </div>

            <div className="wrapper-one">
                <div className="track">
                    {marqueeTools.map((tool, index) => (
                        <div key={index} className="item">
                            <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                {tool.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="wrapper-dwo">
                <div className="track">
                    {marqueeToolsReverse.map((tool, index) => (
                        <div key={index} className="item">
                            <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                {tool.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
