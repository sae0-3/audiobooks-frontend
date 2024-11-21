import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const LayoutHome = () => {
  const [selected, setSelected] = useState(0)
  const sections = [
    { path: '/home', icon: 'house-door' },
    { path: '/search', icon: 'search-heart' },
    { path: '/library', icon: 'collection' }
  ]

  return (
    <>
      <Outlet />

      <footer className="fixed bottom-0 border-t-4 w-full flex justify-evenly py-3">
        {sections.map(({ path, icon }, idx) => (
          <Link key={`${path}-${idx}`} to={path} onClick={() => setSelected(idx)} >
            <i className={`bi bi-${icon}${selected === idx ? '-fill' : ''} text-4xl`}></i>
          </Link>
        ))}
      </footer>
    </>
  )
}

export default LayoutHome
