import './App.scss'
import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout'
import Home from "./components/Home/index.js"
import About from "./components/Home/About/index.js"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes >
    </>
  )
}

export default App;
