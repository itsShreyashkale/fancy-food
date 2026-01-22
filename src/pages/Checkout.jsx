import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import PageWrapper from "../components/PageWrapper"
import { motion } from "framer-motion"
import { useAuth } from "../context/AuthContext"


function Checkout() {
  const navigate = useNavigate()

  const {
    cartItems,
    subtotal,
    tax,
    deliveryFee,
    total,
    placeOrder: placeOrderContext,
    clearCart,
  } = useCart()

  const { user } = useAuth()

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  /* ---------- AUTH GUARD ---------- */
  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-xl mb-4">
          Please login to place an order
        </h2>
        <Link to="/login" className="btn-primary">
          Login
        </Link>
      </div>
    )
  }

  /* ---------- HANDLERS ---------- */

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validate() {
    const newErrors = {}

    if (!form.name) newErrors.name = "Name is required"
    if (!form.phone) newErrors.phone = "Phone number is required"
    if (!form.address) newErrors.address = "Address is required"
    if (!form.city) newErrors.city = "City is required"
    if (!form.pincode) newErrors.pincode = "Pincode is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function submitOrder() {
    if (!validate()) return
    if (cartItems.length === 0) return

    try {
      setLoading(true)

      await placeOrderContext({
        items: cartItems.map(item => ({
          productId: item._id || "000000000000000000000000",
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        address: form,
        subtotal,
        tax,
        deliveryFee,
        total,
      })

      clearCart()
      navigate("/success")
    } catch (err) {
      alert(err.response?.data?.message || "Order failed")
    } finally {
      setLoading(false)
    }
  }

  /* ---------- UI ---------- */

  return (
    <PageWrapper>
      <div className="app-container py-16 grid gap-10 md:grid-cols-3">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2 card p-8"
        >
          <h1 className="section-title">Checkout</h1>

          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Full Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
            <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} />
            <Input label="Address" name="address" value={form.address} onChange={handleChange} error={errors.address} full />
            <Input label="City" name="city" value={form.city} onChange={handleChange} error={errors.city} />
            <Input label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} error={errors.pincode} />
          </div>
        </motion.div>

        {/* SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
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

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={submitOrder}
            disabled={loading}
            className={`w-full mt-6 btn-primary ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </motion.button>
        </motion.div>

      </div>
    </PageWrapper>
  )
}

/* ---------- Reusable Input ---------- */

function Input({ label, name, value, onChange, error, full }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="block text-sm mb-1">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`input w-full ${error ? "border-red-400" : ""}`}
      />
      {error && (
        <p className="text-red-400 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default Checkout
