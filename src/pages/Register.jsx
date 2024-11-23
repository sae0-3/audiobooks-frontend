import { Back } from "@/components/Back"
import { Error } from "@/components/Error"
import UserContext from "@/contexts/UserContext"
import { useCreateAccount } from "@/hooks/useUser"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const { user } = useContext(UserContext)
  const { mutate: register, isSuccess, isPending, error } = useCreateAccount()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate("/home")
  }, [user])

  useEffect(() => {
    if (isSuccess) navigate("/login")
  }, [isSuccess])

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    register(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <div className="fixed w-96 h-96 bg-color-secondary rounded-full -bottom-48 -right-36 z-0" />
      <Back action={() => navigate("/")} />

      <section className="flex flex-col items-center gap-10">
        <h2 className="mt-16 font-bold text-4xl text-white">Registrarse</h2>

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
            {error && error.status === 409 && (
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
            {error && error.status === 400 && (
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

export default Register
