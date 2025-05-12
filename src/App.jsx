// importazione file
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "../pages/movies"
import DefaultLayout from "../layout/defaultLayout"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<div>home</div>} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<div>movies reviews</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
