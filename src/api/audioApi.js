import axiosInstance from "@/api/axiosInstance"

export const getAudio = async (id) => {
  const { data } = await axiosInstance.get(`/audios/${id}`)
  return data
}

export const getAudios = async () => {
  const { data } = await axiosInstance.get("/audios")
  return data
}

export const getAudiosByGenre = async (genre) => {
  const { data } = await axiosInstance.get(`/audios?genre=${genre}`)
  return data
}

export const getAudiosBySearch = async (query) => {
  const { data } = await axiosInstance.get(`/audios?search=${query}`)
  return data
}

export const getGenres = async () => {
  const { data } = await axiosInstance.get("/audios/genres")
  return data
}

export const getLibrary = async () => {
  const { data } = await axiosInstance.get("/audios/library")
  return data
}

export const postLibrary = async (id_audio) => {
  const { data } = await axiosInstance.post(`/audios/library/${id_audio}`)
  return data
}

export const deleteLibrary = async (id_audio) => {
  const { data } = await axiosInstance.delete(`/audios/library/${id_audio}`)
  return data
}
