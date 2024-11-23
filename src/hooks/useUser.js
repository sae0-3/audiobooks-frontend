import { register } from "@/api/userApi"
import { useMutation } from "@tanstack/react-query"

export const useCreateAccount = () => useMutation({
  mutationFn: ({ email, password }) => register(email, password)
})
