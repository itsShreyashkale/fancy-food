import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"
import Login from "./pages/Login"
import Orders from "./pages/Orders"

import PrivateRoute from "./routes/PrivateRoute"
import PublicRoute from "./routes/PublicRoute"

function App() {

  const location = useLocation()


  return (

    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            <Route path="/success" element={<Success />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <Orders />
                </PrivateRoute>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>

  )
}

export default App
