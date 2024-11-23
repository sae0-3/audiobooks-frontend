import UserContext from "@/contexts/UserContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext)

  return user ? children : <Navigate to="/login" replace />
}
