// src/views/Layout.tsx
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      {/* 👇 导航栏（和你的路由完全对应） */}
      <nav style={{
        display: 'flex',
        gap: '20px',
        padding: '16px 0',
        borderBottom: '1px solid #eee',
        marginBottom: '20px'
      }}>
        <h1 style={{ marginRight: 'auto', fontSize: '18px' }}>Layout</h1>
        <Link to="/home" style={{ textDecoration: 'none', color: '#333' }}>
          首页
        </Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#333' }}>
          登录
        </Link>
        <Link to="/register" style={{ textDecoration: 'none', color: '#333' }}>
          注册
        </Link>
      </nav>

      {/* 👇 子页面渲染位置（必须有！） */}
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  )
}