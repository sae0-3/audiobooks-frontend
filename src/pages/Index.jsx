import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <h2 className="mt-16 font-bold text-4xl text-white">AudioBooks</h2>

      <section className="w-full h-52 flex justify-center">
        <img
          src="/vite.svg"
          alt="logo"
          className="w-1/2 max-w-48 object-contain"
        />
      </section>

      <section className="w-full flex flex-col text-black items-center gap-10">
        <Link
          to="/register"
          className="rounded-xl py-2 bg-gray-200 w-9/12 max-w-72 text-center text-lg hover:bg-gray-500 hover:text-white transition duration-300"
        >Registrarse</Link>
        <Link
          to="/login"
          className="rounded-xl py-2 bg-gray-200 w-9/12 max-w-72 text-center text-lg hover:bg-gray-500 hover:text-white transition duration-300"
        >Iniciar Sesión</Link>
      </section>
    </div>
  )
}

export default Index
