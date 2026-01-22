import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import PageWrapper from "../components/PageWrapper"
import { motion } from "framer-motion"

function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
    subtotal,
    tax,
    deliveryFee,
    total,
  } = useCart()

  // ✅ EMPTY CART STATE
  if (cartItems.length === 0) {
    return (
      <PageWrapper>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-400 mb-6">
            Looks like you haven’t added anything yet.
          </p>
          <Link to="/menu" className="btn-primary">
            Browse Menu
          </Link>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div className="app-container py-16 grid gap-10 md:grid-cols-3">

        {/* CART ITEMS */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="section-title">Your Cart</h1>

          {cartItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card p-4 flex gap-4 items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">
                  ₹{item.price}
                </p>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center gap-3 mt-3">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => decreaseQty(item.id)}
                    disabled={item.quantity === 1}
                    className={`px-3 py-1 rounded 
                      ${
                        item.quantity === 1
                          ? "bg-gray-700 cursor-not-allowed"
                          : "bg-black hover:bg-white/10"
                      }`}
                  >
                    −
                  </motion.button>

                  <span>{item.quantity}</span>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 rounded bg-black hover:bg-white/10"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => removeItem(item.id)}
                className="btn-danger"
              >
                Remove
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* ORDER SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="card p-6 h-fit sticky top-24"
        >
          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹{tax}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{deliveryFee}</span>
            </div>

            <hr className="border-white/10 my-2" />

            <div className="flex justify-between font-bold text-white">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              to="/checkout"
              className={`block text-center mt-6 btn-primary ${
                cartItems.length === 0
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            >
              Proceed to Checkout
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </PageWrapper>
  )
}

export default Cart
