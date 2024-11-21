import { useState } from "react"
import { Back } from "@/components/Back"


const Player = () => {
  const [rangeValue, setRangeValue] = useState(0)

  return (
    <>
      <Back />

      <section className="flex flex-col w-full h-screen justify-center items-center pb-14 gap-8">
        <section className="w-full flex justify-center">
          <img
            src="/portrait.jpg"
            alt="portada"
            className="w-6/12 max-w-56"
          />
        </section>

        <div className="w-full flex flex-col gap-2">
          <p className="text-center space-x-2 text-lg">
            <i className="bi bi-clock"></i>
            <span>25 minutos</span>
          </p>

          <section class="flex justify-center w-full">
            <input
              type="range"
              class="h-1 w-9/12 max-w-96 rounded-full my-2 hover:bg-gray-400 active:bg-gray-500 appearance-none"
              value={rangeValue}
              min="0"
              max="100"
              step="1"
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </section>

          <section className="flex justify-center gap-5 text-4xl">
            <button>
              <i className="bi bi-rewind" />
            </button>
            <button>
              <i className="bi bi-play" />
            </button>
            <button>
              <i className="bi bi-fast-forward" />
            </button>
          </section>
        </div>
      </section>
    </>
  )
}

export default Player
