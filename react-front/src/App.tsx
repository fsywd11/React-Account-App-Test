// App.tsx
import { router } from './router' // 直接引入你写好的路由
import './App.css'
import { Suspense } from 'react'
import Loading from './pages/Loading'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/stores/index'


function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>

  )
}

export default App