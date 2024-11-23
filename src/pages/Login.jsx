import { Back } from "@/components/Back"
import { Error } from "@/components/Error"
import UserContext from "@/contexts/UserContext"
import { useLogin } from "@/hooks/useAuth"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const { user, login } = useContext(UserContext)
  const { mutate: access, isSuccess, data, error, isPending } = useLogin()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate("/home")
  }, [user])

  useEffect(() => {
    if (isSuccess && data) login(data.user, data.token)
  }, [isSuccess])

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    access(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <Back action={() => navigate("/")} />

      <section className="flex flex-col items-center gap-10">
        <h2 className="mt-16 font-bold text-4xl text-white">Iniciar sesión</h2>

        <section className="w-full h-52 flex justify-center">
          <img
            src="/vite.svg"
            alt="logo"
            className="w-1/2 max-w-48 object-contain"
          />
        </section>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col text-black items-center gap-10 z-10"
        >
          <div className="w-8/12 max-w-sm">
            <input
              type="email"
              name="email"
              placeholder="Correo Electronico"
              className="w-full rounded-xl px-5 text-lg"
              onChange={handleChange}
              required
            />
            {error && error.status === 404 && (
              <Error>
                <small>{error.response.data.message}</small>
              </Error>
            )}
          </div>

          <div className="w-8/12 max-w-sm">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="w-full rounded-xl px-5 text-lg"
              onChange={handleChange}
              required
            />
            {error && error.status === 401 && (
              <Error>
                <small>{error.response.data.message}</small>
              </Error>
            )}
          </div>

          <div className="fixed bottom-0 right-2">
            <button type="submit" disabled={isPending} className="disabled:opacity-20">
              <i className="bi bi-arrow-right-short font-extrabold text-7xl" />
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
