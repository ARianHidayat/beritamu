import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import {RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'

import Router from './Router'
import store from './store/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
    {/* <App /> */}
  </StrictMode>,
)
