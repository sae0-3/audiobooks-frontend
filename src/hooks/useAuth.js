import { getVerifyToken, login } from "@/api/authApi"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: ({ data }) => {
      console.log(data)
    },
  })
}

export const useVerifyToken = () => useQuery({
  queryKey: ["verifyToken"],
  queryFn: getVerifyToken,
})
