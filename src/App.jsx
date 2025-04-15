import { Routes, Route } from "react-router"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import NotFound from "./pages/NotFound"
import ProductDetail from "./pages/ProductDetail"
import Layout from "./layout/Layout"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
      {/* Grazie al Nested Routing posso raggruppare quali pagine debbano condividere delle componenti UI di layout "fisse" */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
