import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// 布局
import Layout from '@/pages/Layout/index'

// 懒加载页面（企业必用）
const Home = lazy(() => import('@/pages/Month/index'))
const Login = lazy(() => import('@/pages/New/index'))
const Register = lazy(() => import('@/pages/Year/index'))
const NotFound = lazy(() => import('@/pages/NotFound/index'))

// 加载中组件
const Loading = () => <div>加载中...</div>

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // 默认重定向
      { index: true, element: <Navigate to="/home" replace /> },
      { path: '/home', element: <Home /> },
      // 登录注册（无布局）
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },

      // 404
      { path: '*', element: <NotFound /> },
    ],
  },
])

// 企业统一：导出带 Suspense 懒加载的路由组件
export const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}