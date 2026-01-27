import Banner from "../components/home/banner/banner"
import Bio from "../components/home/bio/bio"
import Project from "../components/home/projects/project/project"
import Tools from "../components/home/tools/tools/tools"
import Tecnology from "../components/home/tecnology/tecnology"
import Cursor from "../components/global/cursor/cursor"
import Footer from "../components/global/footer/footer"
import Contate from "../components/global/contate-me/contate"
import NavBar from "../components/global/nav/nav"

import { database } from "../data/projects" //DADOS DOS PROJETOS IMPORTADOS DO MOCK
import { tecnology } from "../data/tecnology" //DADOS DAS TECNOLOGIAS IMPORTADOS DO MOCK

export default function Home() {
    return (
        <>
            <Cursor />
            <NavBar />
            <Banner />
            <Bio />
            <Project data={database} />
            <Tecnology data={tecnology} />
            <Tools />
            <Contate />
            <Footer />
        </>
    )
}
