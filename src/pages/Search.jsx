import { Back } from "@/components/Back"
import LayoutContent from "@/layouts/LayoutContent"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
  const [genre, setGenre] = useState("")
  const [content, setContent] = useState([])
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const genres = [
    { title: "Romance", content: [] },
    { title: "Ficción", content: [] },
    { title: "Aventura", content: [] },
    { title: "Clasicos", content: [] },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/results?query=${query}`)
  }

  const handleGenre = (title, content) => {
    setGenre(title)
    setContent(content)
  }

  return (
    <div className="pt-8 pb-24 w-11/12 mx-auto max-w-lg">
      {!genre ? (
        <>
          <div className="fixed w-96 h-96 bg-color-secondary rounded-full top-48 -left-64 z-0" />

          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="text"
              name="query"
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 sm:text-sm"
              placeholder="Buscar"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-4 top-[calc(50%+1px)] transform -translate-y-1/2 flex items-center"
            >
              <i className="bi bi-search text-lg"></i>
            </button>
          </form>

          <section className="mt-12">
            <h2 className="text-center text-white font-semibold text-2xl">Selecciona tu género favorito</h2>

            <div className="flex flex-col gap-10 mt-12">
              {genres.map(({ title, content }, idx) => (
                <button
                  key={idx}
                  onClick={() => handleGenre(title, content)}
                  className="px-4 py-3 bg-gray-200 rounded-xl w-10/12 mx-auto z-10"
                >{title}</button>
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <Back action={() => setGenre("")} />

          <div className="pt-10">
            <LayoutContent
              title={`Recomendaciones ${genre.toLowerCase()}`}
              content={content}
            />
          </div>
        </>
      )
      }
    </div>
  )
}

export default Search
