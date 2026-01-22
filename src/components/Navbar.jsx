import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"

function Navbar() {
  const { user, logout } = useAuth()
  const { cartItems, clearCart } = useCart()

  return (
    <header className="border-b border-white/5">
      <div className="app-container h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight"
        >
          Fancy<span className="text-yellow-400">Food</span>
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6 text-sm">

          {/* MENU */}
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Menu
          </NavLink>

          {/* ORDERS (ONLY WHEN LOGGED IN) */}
          {user && (
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Orders
            </NavLink>
          )}

          {/* CART */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative transition ${
                isActive
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </NavLink>

          {/* AUTH SECTION */}
          {user ? (
            <>
              <span className="text-xs text-gray-400">
                Hi, {user.name}
              </span>

              <button
                onClick={() => {
                  logout()
                  clearCart()
                }}
                className="text-red-400 hover:text-red-300 transition text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Login
            </NavLink>
          )}

        </nav>
      </div>
    </header>
  )
}

export default Navbar
