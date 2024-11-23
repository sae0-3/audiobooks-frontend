import { Back } from "@/components/Back"
import { Error } from "@/components/Error"
import { Loading } from "@/components/Loading"
import { useGetAudiosByGenre } from "@/hooks/useAudio"
import LayoutContent from "@/layouts/LayoutContent"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const Genre = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const { data, isLoading, error } = useGetAudiosByGenre(id)
  const navigate = useNavigate()

  if (isLoading) return <Loading />

  if (error) {
    return (
      <Error>
        <p className="text-center pt-20 font-bold text-lg">No se encontro el genero</p>
      </Error>
    )
  }

  return (
    <>
      <Back action={() => navigate("/search")} />

      <div className="pt-16 pb-24 w-11/12 mx-auto max-w-lg">
        <LayoutContent
          title={`Recomendaciones ${state || ""}`}
          content={data.content}
        />
      </div>
    </>
  )
}

export default Genre
