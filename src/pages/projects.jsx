import { useEffect, useState } from 'react'
import { useAssetsLoaded } from "../contexts/AssetLoaderProvider"
import { Database } from "../data/data"

import Banner from '../components/projects/banner/banner_project'
import Loader from '../components/global/loader/loader'
import List from '../components/projects/list/list'
import NavBar from '../components/global/nav/nav'
import Footer from '../components/global/footer/footer'
import Cursor from '../components/global/cursor/cursor'
import Contate from '../components/global/contate-me/contate'

export default function Projects() {
    const { allAssetsLoaded } = useAssetsLoaded()
    const [showLoader, setShowLoader] = useState(true)
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        if (allAssetsLoaded) {
            setIsExiting(true)

            const timer = setTimeout(() => {
                setShowLoader(false)
            }, 500)

            return () => clearTimeout(timer)
        }
    }, [allAssetsLoaded])

    if (showLoader) return <Loader isExiting={isExiting} />

    return (
        <>
            <Cursor />
            <NavBar />
            <Banner />
            <List data={Database} />
            <Contate />
            <Footer />
        </>
    )
}