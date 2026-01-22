import { Link } from "react-router-dom"
import PageWrapper from "../components/PageWrapper"
import { motion } from "framer-motion"

function Success() {
  return (
    <PageWrapper>
      <div className="min-h-[70vh] flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1a1a1a] rounded-2xl p-10 text-center max-w-md w-full"
        >

          {/* SUCCESS ICON */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-yellow-400 flex items-center justify-center"
          >
            <span className="text-black text-4xl">✓</span>
          </motion.div>

          <h1 className="text-3xl font-bold mb-3">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-400 mb-6">
            Thank you for your order. Your delicious food will arrive soon.
          </p>

          <div className="text-sm text-gray-400 mb-8">
            <p>
              Order ID: <span className="text-white">#FF1024</span>
            </p>
            <p>
              Estimated Delivery:{" "}
              <span className="text-white">30–40 mins</span>
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
              >
                Go Home
              </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                to="/menu"
                className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition"
              >
                Order More
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </PageWrapper>
  )
}

export default Success
