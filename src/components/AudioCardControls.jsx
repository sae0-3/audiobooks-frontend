import { InputRange } from "@/components/InputRange"
import { Howl } from "howler"
import { useEffect, useRef, useState } from "react"

export const AudioCardControls = ({ title, author, cover, duration, link }) => {
  const [rangeValue, setRangeValue] = useState(0)
  const [playIcon, setPlayIcon] = useState(false)
  const [audioDuration, setAudioDuration] = useState(0)
  const audioRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!link) return

    const sound = new Howl({
      src: [link],
      html5: true,
      onload: () => {
        setAudioDuration(sound.duration())
      },
      onend: () => {
        setPlayIcon(false)
        setRangeValue(0)
        clearInterval(intervalRef.current)
      },
    })

    audioRef.current = sound

    return () => {
      if (audioRef.current) audioRef.current.unload()
      clearInterval(intervalRef.current)
    }
  }, [link])

  const handlePlay = () => {
    if (!audioRef.current) return

    if (playIcon) {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    } else {
      audioRef.current.play()

      intervalRef.current = setInterval(() => {
        setRangeValue(audioRef.current.seek())
      }, 1000)
    }

    setPlayIcon((value) => !value)
  }

  const handleBack = () => {
    const newTime = Math.max(0, rangeValue - 10)
    setRangeValue(newTime)
    audioRef.current.seek(newTime)
  }

  const handlePass = () => {
    const newTime = Math.min(audioDuration, rangeValue + 10)
    setRangeValue(newTime)
    audioRef.current.seek(newTime)
  }

  const handleProgress = (e) => {
    const newValue = parseInt(e.target.value, 10)
    setRangeValue(newValue)
    audioRef.current.seek(newValue)
  }

  const handleMute = () => {
    if (audioRef.current) audioRef.current.mute(true)
  }

  const handleUnmute = () => {
    if (audioRef.current) audioRef.current.mute(false)
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
          <InputRange
            max={convert(duration)}
            action={handleProgress}
            value={rangeValue}
            disabled={!link}
            onMouseDown={handleMute}
            onMouseUp={handleUnmute}
            onTouchStart={handleMute}
            onTouchEnd={handleUnmute}
          />
        </section>

        <section className="flex justify-center gap-5 text-5xl">
          <button
            onClick={handleBack}
            className="disabled:opacity-50"
            disabled={!link}
          >
            <i className="bi bi-rewind" />
          </button>
          <button
            onClick={handlePlay}
            className="disabled:opacity-50"
            disabled={!link}
          >
            <i className={`bi bi-${playIcon ? "pause" : "play-fill"}`} />
          </button>
          <button
            onClick={handlePass}
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
