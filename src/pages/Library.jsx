import { Error } from "@/components/Error"
import { Loading } from "@/components/Loading"
import { useGetLibrary } from "@/hooks/useAudio"
import { Link } from "react-router-dom"

const Library = () => {
  const { data, isLoading, error } = useGetLibrary()

  if (isLoading) return <Loading />

  if (error) {
    return (
      <Error>
        <p className="text-center pt-20 font-bold text-lg">Surgió un problema</p>
      </Error>
    )
  }

  return (
    <div className="pt-8 pb-24">
      <h2 className="text-center text-white font-bold text-3xl">Continuar historia</h2>

      <section className="flex flex-col w-11/12 max-w-lg mx-auto gap-6 items-center justify-center mt-6">
        {data.content.length === 0 && (
          <span className="text-lg text-white">No hay elementos</span>
        )}

        {!!data.content.length && data.content.map(({ id, cover, description }) => (
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
