import { ProtectedRoute } from "@/components/ProtectedRoute"
import Layout from "@/layouts/Layout"
import Genre from "@/pages/Genre"
import Home from "@/pages/Home"
import Index from "@/pages/Index"
import Library from "@/pages/Library"
import Login from "@/pages/Login"
import NotFound from "@/pages/NotFound"
import Player from "@/pages/Player"
import Register from "@/pages/Register"
import Result from "@/pages/Result"
import Search from "@/pages/Search"
import UserProvider from "@/providers/UserProvider"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.min.css"

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />

          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="/results" element={<Result />} />
            <Route path="/genre/:id" element={<Genre />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  )
}
