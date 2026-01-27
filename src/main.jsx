import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'sobre',
                element: <About />
            },
            {
                path: 'projetos',
                element: <Projects />
            },
        ]
    }

], {
    basename: import.meta.env.BASE_URL,
    future: {
        v7_startTransition: true,
    },
})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)