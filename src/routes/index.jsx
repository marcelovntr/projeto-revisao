import {createBrowserRouter} from 'react-router-dom'
import {HomePage} from '../pages/home'
import { HistoryPage } from '../pages/history'
import { Layout } from '../template'

export const routes = createBrowserRouter([
      
    {
path:'/',
element: <Layout />,
//nested routes
children: [
    {
        path: '/',
        element: <HomePage />
            },
            {
        path: '/historico',
        element: <HistoryPage />
            },
]
    },
    
])

