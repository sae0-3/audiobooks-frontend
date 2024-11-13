export const Home = () => {
  return (
    <div className="flex flex-col text-white items-center gap-16">
      <section className="mt-16">
        <h1 className="font-bold text-4xl">AudioBooks</h1>
      </section>

      <section className="w-full flex justify-center">
        <img
          src="/vite.svg"
          alt="logo"
          className="w-1/2 max-w-56"
        />
      </section>

      <section className="w-full flex flex-col text-black items-center gap-10">
        <button className="rounded-xl py-2 bg-gray-200 w-9/12 max-w-72 hover:bg-gray-500 hover:text-white delay-75">Registrarse</button>
        <button className="rounded-xl py-2 bg-gray-200 w-9/12 max-w-72 hover:bg-gray-500 hover:text-white delay-75">Iniciar Sesión</button>
      </section>
    </div>
  )
}
