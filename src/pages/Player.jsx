import { AudioCardInfo } from "@/components/AudioCardInfo"
import { Back } from "@/components/Back"
import { AudioCardControls } from "@/components/AudioCardControls"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Player = () => {
  const [viewPlayer, setViewPlayer] = useState(false)
  const navigate = useNavigate()

  const data = {
    cover: "https://via.placeholder.com/300x450",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem eius, corrupti ipsam itaque quasi possimus rem dolore debitis assumenda laboriosam labore minima illo? Assumenda, mollitia vero! Doloribus nostrum fuga nam vel commodi, expedita veniam asperiores voluptate ducimus, quas aut nisi sapiente animi quos? Perspiciatis nobis, eligendi accusantium ipsaLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem eius, corrupti ipsam itaque quasi possimus rem dolore debitis assumenda laboriosam labore minima illo? Assumenda, mollitia vero! Doloribus nostrum fuga nam vel commodi, expedita veniam asperiores voluptate ducimus, quas aut nisi sapiente animi quos? Perspiciatis nobis, eligendi accusantium ipsa",
    duration: 3.7,
  }

  return (
    <>
      <Back
        action={viewPlayer
          ? () => setViewPlayer(false)
          : () => navigate("/home")
        }
      />

      {viewPlayer
        ? <AudioCardControls
          cover={data.cover}
          duration={data.duration}
        />
        : <AudioCardInfo
          cover={data.cover}
          duration={data.duration}
          description={data.description}
          viewPlayer={() => setViewPlayer(true)}
        />
      }
    </>
  )
}

export default Player
