import UserContext from "@/contexts/UserContext"
import { useContext, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

const aux = { "home": 0, "search": 1, "library": 2 }

const Layout = () => {
  const { pathname } = useLocation()
  const location = pathname.slice(1)
  const [selected, setSelected] = useState(aux[location])
  const { logout } = useContext(UserContext)

  const sections = [
    { path: '/home', icon: 'house-door' },
    { path: '/search', icon: 'search-heart' },
    { path: '/library', icon: 'collection' },
    { path: '/login', icon: 'box-arrow-right', fn: logout },
  ]

  return (
    <>
      <Outlet />

      <footer className="fixed bottom-0 border-t-4 w-full flex justify-evenly py-3 bg-color-base">
        {sections.map(({ path, icon, fn }, idx) => {
          fn = fn ? fn : (() => setSelected(idx))

          return (
            <Link key={`${path}-${idx}`} to={path} onClick={fn} >
              <i className={`bi bi-${icon}${selected === idx ? '-fill' : ''} text-4xl`}></i>
            </Link>
          )
        })}
      </footer>
    </>
  )
}

export default Layout
