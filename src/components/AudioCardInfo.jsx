import { useState } from "react"

export const AudioCardInfo = ({ cover, description, duration, viewPlayer }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const addCollection = () => { }

  return (
    <div className="w-11/12 max-w-sm mx-auto pt-16 pb-24 overflow-hidden">
      <img
        src={cover}
        alt="Audio Cover"
        className="w-1/2 min-w-48 h-72 object-contain mx-auto rounded-xl"
      />

      <section className="px-4 pt-6 flex flex-col gap-2">
        <p className="text-center text-xl font-medium text-white">
          <i className="bi bi-clock" /> {duration} Minutos
        </p>

        <p className="text-white text-md">
          <small>
            {!isExpanded && description.length > 230 ? `${description.slice(0, 230)}...` : description}
          </small>

          {description.length > 230 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-300 text-sm hover:underline ml-1"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </p>

        <section className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={viewPlayer}
          ><i className="bi bi-headphones text-lg" /> Reproducir</button>
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={addCollection}
          ><i className="bi bi-collection text-lg" /> Biblioteca</button>
        </section>
      </section>
    </div>
  )
}
