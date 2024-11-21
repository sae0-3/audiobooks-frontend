import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main className="container min-h-screen bg-base">
      <Outlet />
    </main>
  )
}

export default Layout
