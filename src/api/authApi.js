import axiosInstance from "@/api/axiosInstance"

export const login = async (email, password) => {
  const { data } = await axiosInstance.post("/auth/login", { email, password })
  return data
}

export const getVerifyToken = async () => {
  const { data } = await axiosInstance.get("/users/profile")
  return data
}
