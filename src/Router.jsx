import {createBrowserRouter} from 'react-router-dom'

import Indonesia from './pages/Indonesia'
import Progamming from './pages/Progamming'
import Saved from './pages/Saved'
import App from './App'
import Rumah from './pages/Rumah'
import Search from './pages/Search'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Rumah />
            },
            {
                path: "/search/:keyword",
                element: <Search />
            },
            {
                path: "/Indonesia",
                element: <Indonesia />
            },
            {
                path: "/Progamming",
                element: <Progamming />
            },
            {
                path: "/Saved",
                element: <Saved />
            }
        ]
    }
])

export default router