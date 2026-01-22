import { createContext, useContext, useState } from "react"
import { useEffect } from "react"
import { placeOrder as placeOrderAPI } from "../api/order.api"


const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems))
}, [cartItems])


  function addToCart(item) {
    const existing = cartItems.find(i => i.id === item.id)

    if (existing) {
      setCartItems(
        cartItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  function increaseQty(id) {
    setCartItems(
      cartItems.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    )
  }

  function decreaseQty(id) {
    setCartItems(
      cartItems
        .map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    )
  }

  function removeItem(id) {
    setCartItems(cartItems.filter(i => i.id !== id))
  }

  function clearCart() {
    setCartItems([])
  }

  async function placeOrder(orderData) {
  const response = await placeOrderAPI(orderData)
  return response
}


  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const tax = Math.round(subtotal * 0.1)
  const deliveryFee = cartItems.length > 0 ? 40 : 0
  const total = subtotal + tax + deliveryFee

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        placeOrder,
        subtotal,
        tax,
        deliveryFee,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
