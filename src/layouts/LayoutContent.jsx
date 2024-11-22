import { Link } from "react-router-dom"

const LayoutContent = ({ title, content }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-center text-white font-bold text-3xl">{title}</h2>

      {content.length === 0 ? (
        <p className="text-white text-center pt-5">No se encontraron elementos</p>
      ) : (
        <section className="mx-auto w-10/12 grid grid-cols-2 gap-4">
          {content.map(({ id, cover }, idx) => (
            <Link key={id} to={`/player/${id}`}>
              <img src={cover} alt="portada" className="rounded-lg" />
            </Link>
          ))}
        </section>
      )}
    </section>
  )
}

export default LayoutContent
