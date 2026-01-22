import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24 bg-[#0b0b0b]">
      <div className="app-container py-16 grid gap-12 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight mb-4">
            Fancy<span className="text-yellow-400">Food</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium food delivery experience with fast service,
            fresh meals, and a modern ordering experience.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-white transition">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white transition">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-300">
            Support
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-300">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@fancyfood.com</li>
            <li>Phone: +91 987654321</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} FancyFood. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
