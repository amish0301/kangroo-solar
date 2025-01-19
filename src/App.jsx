import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import { NotFoundPage } from "./pages"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
