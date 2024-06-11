import React from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import { AuthRoute } from '@/components/AuthRoute'
import Home from '@/pages/Home'
import ContentManagement from '@/pages/contentManagement'
import PublishArticle from '@/pages/publishArticle'

const router = [
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/',
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        path: 'home',
        element: <Home />,
        index: true,
      },
      {
        path: 'publish',
        element: <PublishArticle />,
      },
      {
        path: 'article',
        element: <ContentManagement />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]
export default createBrowserRouter(router)
