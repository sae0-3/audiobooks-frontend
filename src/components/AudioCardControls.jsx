import { useState } from "react"

export const AudioCardControls = ({ title, author, cover, duration, link }) => {
  const [playIcon, setPlayIcon] = useState(false)

  const convert = (tiempo) => {
    const [minutos, segundos] = tiempo.split(":").map(Number)
    return minutos * 60 + segundos
  }

  return (
    <div className="w-11/12 max-w-sm mx-auto pt-24 pb-28 overflow-hidden text-white">
      <img
        src={cover}
        alt="Audio Cover"
        className="w-1/2 min-w-48 h-72 object-contain mx-auto rounded-xl"
      />

      <section className="px-4 pt-8 flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <small className="mx-auto font-bold text-lg">
            {title.substr(0, 1).toUpperCase() + title.substr(1).toLowerCase()}
          </small>

          <p className="text-center text-xl font-medium">
            <i className="bi bi-clock" /> {duration} Minutos
          </p>
        </div>

        <section className="flex justify-center w-full">
          <input
            className="w-full"
            type="range"
            value={0}
            min={0}
            max={convert(duration)}
            step={1}
            disabled
          />
        </section>

        <section className="flex justify-center gap-5 text-5xl">
          <button
            className="disabled:opacity-50"
            disabled={!link}
          >
            <i className="bi bi-rewind" />
          </button>
          <button
            className="disabled:opacity-50"
            disabled={!link}
            onClick={() => setPlayIcon(!playIcon)}
          >
            <i className={`bi bi-${playIcon ? "pause" : "play-fill"}`} />
          </button>
          <button
            className="disabled:opacity-50"
            disabled={!link}
          >
            <i className="bi bi-fast-forward" />
          </button>
        </section>
      </section>
    </div>
  )
}
