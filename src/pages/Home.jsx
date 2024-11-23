import { Error } from "@/components/Error"
import { Loading } from "@/components/Loading"
import { useGetAudios } from "@/hooks/useAudio"
import LayoutContent from "@/layouts/LayoutContent"

const Home = () => {
  const { data, isLoading, error } = useGetAudios()

  if (isLoading) return <Loading />

  if (error) {
    return (
      <Error>
        <p className="text-center pt-20 font-bold text-lg">Surgió un problema</p>
      </Error>
    )
  }

  return (
    <div className="pt-8 pb-24 max-w-lg mx-auto">
      <LayoutContent
        title={(<><i className="bi bi-house-door" /> AudioBooks</>)}
        content={data.content}
      />
    </div>
  )
}

export default Home
