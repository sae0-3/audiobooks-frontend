import { InputRange } from "@/components/InputRange"
import { useState } from "react"

export const AudioCardControls = ({ title, author, cover, duration, link }) => {
  const [rangeValue, setRangeValue] = useState(0)
  const [playIcon, setPlayIcon] = useState(false)

  const handlePlay = () => {
    setPlayIcon((value) => !value)
  }

  const handleBack = () => {
    setRangeValue((prev) => Math.max(0, prev - 10))
  }

  const handlePass = () => {
    setRangeValue((prev) => Math.min(newDuration, prev + 10))
  }

  const handleProgress = (e) => {
    setRangeValue(parseInt(e.target.value))
  }

  const convert = (tiempo) => {
    const [minutos, segundos] = tiempo.split(":").map(Number)
    return minutos * 60 + segundos
  }

  return (
    <div className="w-11/12 max-w-sm mx-auto pt-24 pb-28 overflow-hidden">
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
          <InputRange max={convert(duration)} action={handleProgress} value={rangeValue} />
        </section>

        <section className="flex justify-center gap-5 text-5xl">
          <button onClick={handleBack}><i className="bi bi-rewind" /></button>
          <button onClick={handlePlay}>
            <i className={`bi bi-${playIcon ? "pause" : "play-fill"}`} />
          </button>
          <button onClick={handlePass}><i className="bi bi-fast-forward" /></button>
        </section>
      </section>
    </div>
  )
}
