import { Link } from "react-router-dom"

const Library = () => {
  const content = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    cover: "https://via.placeholder.com/300x450",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem eius, corrupti ipsam itaque quasi possimus rem dolore debitis assumenda laboriosam labore minima illo? Assumenda, mollitia vero! Doloribus nostrum fuga",
  }))

  return (
    <div className="pt-8 pb-24">
      <h2 className="text-center text-white font-bold text-3xl">Continuar historia</h2>

      <section className="flex flex-col w-11/12 max-w-lg mx-auto gap-6 items-center justify-center mt-6">
        {content.map(({ id, cover, description }) => (
          <Link
            key={id}
            to={`/player/${id}`}
            className="flex justify-center items-center gap-6"
          >
            <img
              src={cover}
              alt="portada"
              className="w-2/5 rounded-xl object-contain"
            />

            <small className="text-white">
              {description.length <= 200 ? description : `${description.slice(0, 200)}...`}
            </small>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Library
