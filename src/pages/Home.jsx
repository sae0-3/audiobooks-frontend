import LayoutContent from "@/layouts/LayoutContent"

const Home = () => {
  const content = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    cover: "https://via.placeholder.com/300x450"
  }))

  return (
    <div className="pt-8 pb-24 max-w-lg mx-auto">
      <LayoutContent
        title={(<><i className="bi bi-house-door" /> AudioBooks</>)}
        content={content}
      />
    </div>
  )
}

export default Home
