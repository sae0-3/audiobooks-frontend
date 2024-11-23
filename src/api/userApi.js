import axiosInstance from "@/api/axiosInstance"

export const register = async (email, password) => {
  const { data } = await axiosInstance.post('/users/register', { email, password })
  return data
}
