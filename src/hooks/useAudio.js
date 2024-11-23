import {
  deleteLibrary,
  getAudio,
  getAudios,
  getAudiosByGenre,
  getAudiosBySearch,
  getGenres,
  getLibrary,
  postLibrary,
} from "@/api/audioApi"
import queryClient from "@/utils/queryClient"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetAudio = (id_audio) => {

  return useQuery({
    queryKey: ["audios", id_audio],
    queryFn: () => getAudio(id_audio),
    enabled: !!id_audio,
  })
}

export const useGetAudios = () => useQuery({
  queryKey: ["audios"],
  queryFn: getAudios,
})

export const useGetAudiosByGenre = (genre) => useQuery({
  queryKey: ["audios", "genre", genre],
  queryFn: () => getAudiosByGenre(genre),
  enabled: !!genre,
})

export const useGetAudiosBySearch = (query) => useQuery({
  queryKey: ["audios", "search", query],
  queryFn: () => getAudiosBySearch(query),
  enabled: !!query,
})

export const useGetLibrary = () => {

  return useQuery({
    queryKey: ["audios", "library"],
    queryFn: getLibrary,
  })
}

export const useSaveLibrary = (id_audio) => {

  return useMutation({
    mutationFn: () => postLibrary(id_audio),
    onSuccess: () => {
      queryClient.invalidateQueries(["audios", "library"])
      queryClient.invalidateQueries(["audios", id_audio])
    },
  })
}

export const useDeleteLibrary = (id_audio) => {
  return useMutation({
    mutationFn: () => deleteLibrary(id_audio),
    onSuccess: () => {
      queryClient.invalidateQueries(["audios", "library"])
      queryClient.invalidateQueries(["audios", id_audio])
    },
  })
}

export const useGetGenres = () => useQuery({
  queryKey: ["audios", "genres"],
  queryFn: getGenres,
})
