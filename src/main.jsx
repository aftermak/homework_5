import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './pages/Layout.jsx'
import HomeRoute from './routes/HomeRoute.jsx'
import CountriesRoute from './routes/CountriesRoute.jsx'
import CountryRoute from './routes/CountryRoute.jsx'
import './main.sass'

import { store } from './store/store.js'
import { Provider } from 'react-redux'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomeRoute />
            },
            {
                path: "countries",
                element: <CountriesRoute />
            },
            {
                path: "countries/:id",
                element: <CountryRoute />
            }
        ]

    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    
)
