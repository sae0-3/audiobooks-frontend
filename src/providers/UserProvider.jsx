import UserContext from "@/contexts/UserContext"
import { useVerifyToken } from "@/hooks/useAuth"
import { useEffect, useState } from "react"

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { data, isSuccess } = useVerifyToken()

  const login = (userData, token) => {
    setUser(userData)
    localStorage.setItem("access_token", token)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("access_token")
  }

  useEffect(() => {
    if (isSuccess && data) {
      login(data.user, data.token)
    }
  }, [data, isSuccess])

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
