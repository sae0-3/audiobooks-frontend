import { Back } from "@/components/Back"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate("/login")
  }

  return (
    <>
      <div className="fixed w-96 h-96 bg-secondary rounded-full -bottom-48 -right-36 z-0" />
      <Back path="/" />

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
          <input
            type="email"
            placeholder="Correo Electronico"
            className="w-8/12 max-w-sm rounded-xl px-5 text-lg"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-8/12 max-w-sm rounded-xl px-5 text-lg"
            required
          />

          <div className="fixed bottom-0 right-2">
            <button type="submit"><i className="bi bi-arrow-right-short font-extrabold text-7xl" /></button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
