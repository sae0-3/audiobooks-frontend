import { Back } from "@/components/Back"
import { Error } from "@/components/Error"
import { Loading } from "@/components/Loading"
import { useGetAudiosBySearch } from "@/hooks/useAudio"
import LayoutContent from "@/layouts/LayoutContent"
import { useLocation, useNavigate } from "react-router-dom"

const Result = () => {
  const { search } = useLocation()
  const query = search.split("?query=")[1]
  const { data, isLoading, error } = useGetAudiosBySearch(query)
  const navigate = useNavigate()

  if (isLoading) return <Loading />

  if (error) {
    return (
      <Error>
        <p className="text-center pt-20 font-bold text-lg">No se encontraron resultados</p>
      </Error>
    )
  }

  return (
    <>
      <Back action={() => navigate("/search")} />

      <div className="pt-16 pb-24 w-11/12 mx-auto max-w-lg">
        <LayoutContent title="Resultados" content={data.content} />
      </div>
    </>
  )
}

export default Result
