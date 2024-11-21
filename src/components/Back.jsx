import { Link } from "react-router-dom"

export const Back = ({ path }) => (
  <Link to={path || ""} className="fixed top-0 left-2">
    <i className="bi bi-arrow-left-short font-extrabold text-7xl" />
  </Link>
)
