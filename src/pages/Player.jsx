import { AudioCardControls } from "@/components/AudioCardControls"
import { AudioCardInfo } from "@/components/AudioCardInfo"
import { Back } from "@/components/Back"
import { Error } from "@/components/Error"
import { Loading } from "@/components/Loading"
import { useGetAudio } from "@/hooks/useAudio"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Player = () => {
  const { id } = useParams()
  const [viewPlayer, setViewPlayer] = useState(false)
  const { data, isLoading, error } = useGetAudio(id)
  const navigate = useNavigate()

  if (isLoading) return <Loading />

  if (error) {
    return (
      <Error>
        <p className="text-center pt-20 font-bold text-lg">Surgió un problema</p>
      </Error>
    )
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
          title={data.title}
          author={data.author}
          cover={data.cover}
          duration={data.duration.substr(3)}
          link={data.link}
        />
        : <AudioCardInfo
          id={data.id}
          title={data.title}
          author={data.author}
          cover={data.cover}
          duration={data.duration.substr(3)}
          description={data.description}
          is_saved={data.is_saved}
          viewPlayer={() => setViewPlayer(true)}
        />
      }
    </>
  )
}

export default Player
