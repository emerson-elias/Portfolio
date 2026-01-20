import { Database } from "../data/data"

import Banner from "../components/home/banner/banner"

import Bio from "../components/home/bio/bio"
import Project from "../components/home/projects/project/project"
import Tools from "../components/home/tools/tools"
import Tecnology from "../components/home/tecnology/tecnology"
import Cursor from "../components/global/cursor/cursor"
import Footer from "../components/global/footer/footer"
import Contate from "../components/global/contate-me/contate"
import NavBar from "../components/global/nav/nav"

export default function Home() {
    return (
        <>
            <Cursor />
            <NavBar />
            <Banner />
            <Bio />
            <Project data={Database} />
            <Tecnology />
            <Tools />
            <Contate />
            <Footer />
        </>
    )
}
