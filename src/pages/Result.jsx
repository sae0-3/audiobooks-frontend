import LayoutContent from "@/layouts/LayoutContent"
import NotFound from "@/pages/NotFound"
import { useLocation } from "react-router-dom"

const Result = () => {
  const { search } = useLocation()
  const query = search.split("?query=")[1]

  if (!query) return <NotFound />

  return (
    <div className="pt-8 pb-24 w-11/12 mx-auto max-w-lg">
    <LayoutContent  title="Resultados" content={[]} />
    </div>
  )
}

export default Result
