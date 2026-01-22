import { useEffect, useState } from "react"
import PageWrapper from "../components/PageWrapper"
import { getMyOrders } from "../api/order.api"
import { useAuth } from "../context/AuthContext"

function Orders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getMyOrders()
        setOrders(data)
      } catch (err) {
        setError("Failed to load orders")
      } finally {
        setLoading(false)
      }
    }

    if (user) fetchOrders()
  }, [user])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        Loading orders...
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-400">
        {error}
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-400">
        You have no orders yet.
      </div>
    )
  }

  return (
    <PageWrapper>
      <div className="app-container py-16">
        <h1 className="page-title">My Orders</h1>

        <div className="space-y-8">
          {orders.map(order => (
            <div key={order._id} className="card p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-400">
                    Order ID: {order._id.slice(-6)}
                  </p>
                  <p className="text-sm text-gray-400">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-sm bg-yellow-400 text-black">
                  {order.status}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-sm text-gray-300"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <hr className="border-white/10 my-4" />

              {/* Total */}
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-yellow-400">
                  ₹{order.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

export default Orders
