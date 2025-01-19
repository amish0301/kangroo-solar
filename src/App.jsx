import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import { Home, NotFoundPage, Contact, About } from "./pages/index"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
