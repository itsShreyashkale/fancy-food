import { useState } from "react"
import PageWrapper from "../components/PageWrapper"
import { motion } from "framer-motion"
import { loginUser, registerUser } from "../api/auth.api"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const [mode, setMode] = useState("login") // login | register
  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const data =
        mode === "login"
          ? await loginUser(form)
          : await registerUser(form)     

      login(data)
      navigate("/")

      alert("Auth successful")
      window.location.href = "/"
    } catch (err) {
      alert(err.response?.data?.message || "Auth failed")
    }
  }

  return (
    <PageWrapper>
      <div className="min-h-[80vh] flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="card w-full max-w-md p-8"
        >
          {/* HEADER */}
          <h1 className="text-3xl font-bold mb-2 text-center">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="text-gray-400 text-sm text-center mb-8">
            {mode === "login"
              ? "Sign in to continue ordering delicious food"
              : "Join FancyFood and start ordering today"}
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {mode === "register" && (
              <div>
                <label className="block text-sm mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label className="block text-sm mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="input w-full"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  className="input w-full pr-10"
                  placeholder="••••••••"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn-primary w-full"
            >
              {mode === "login" ? "Login" : "Register"}
            </motion.button>
          </form>

          {/* TOGGLE */}
          <div className="mt-6 text-center text-sm text-gray-400">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("register")}
                  className="text-yellow-400 hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-yellow-400 hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  )
}

export default Login
