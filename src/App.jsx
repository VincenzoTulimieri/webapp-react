// importazione file
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/defaultLayout"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Route>
          <Route path="*" element={<div><h1>Pagina non trovata</h1></div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
