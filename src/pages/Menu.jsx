import { useState } from "react"
import { useCart } from "../context/CartContext"
import { motion } from "framer-motion"
import PageWrapper from "../components/PageWrapper"

const foodItems = [
  {
    id: 1,
    name: " Butter Chicken",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=60",
    description: "Creamy tomato-based chicken curry",
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
    description: "Juicy grilled burger with melted cheese",
  },
  {
    id: 3,
    name: "Hakka Noodles",
    price: 219,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    description: "Stir fried noodles with vegetables",
  },
  {
    id: 4,
    name: "Chocolate Dessert",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Rich chocolate dessert for sweet cravings",
  },
  {
    id: 5,
    name: "Pepperoni Pizza",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e",
    description: "Loaded pepperoni pizza with mozzarella cheese",
  },
  {
    id: 6,
    name: "Veg Supreme Pizza",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    description: "Pizza topped with fresh veggies and olives",
  },
  {
    id: 7,
    name: "Grilled Chicken Burger",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1610440042657-612c34d95e9f",
    description: "Grilled chicken patty with lettuce and sauce",
  },
  {
    id: 8,
    name: "Double Cheese Burger",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    description: "Extra cheesy burger with double layers",
  },
  {
    id: 9,
    name: "Chicken Biryani",
    price: 359,
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3972",
    description: "Aromatic basmati rice with spiced chicken",
  },
  {
    id: 10,
    name: "Butter Naan",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1626074353765-517a681e40be",
    description: "Soft Indian bread brushed with butter",
  },
  {
    id: 11,
    name: "Fried Rice",
    price: 219,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    description: "Classic fried rice with veggies and sauces",
  },
  {
    id: 12,
    name: "Chicken Pasta",
    price: 319,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    description: "Creamy pasta tossed with grilled chicken",
  },
  {
    id: 13,
    name: "Red Sauce Pasta",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    description: "Pasta in rich tomato-based sauce",
  },
  {
    id: 14,
    name: "Cold Coffee",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c",
    description: "Chilled coffee blended with milk and ice",
  },
  {
    id: 15,
    name: "Fresh Lime Soda",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859",
    description: "Refreshing lime soda with mint",
  },
  {
    id: 16,
    name: "Chocolate Brownie",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Warm chocolate brownie with rich flavor",
  },
  {
    id: 17,
    name: "Vanilla Ice Cream",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
    description: "Classic vanilla ice cream scoop",
  },
  {
    id: 18,
    name: "Chicken Tikka",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=60",
    description: "Spiced grilled chicken pieces",
  },
  {
    id: 19,
    name: "Veg Biryani",
    price: 259,
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=60",
    description: "Fragrant rice cooked with vegetables",
  },
  {
    id: 20,
    name: "Chicken Fried Rice",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=60",
    description: "Wok-tossed rice with chicken & veggies",
  },
  {
    id: 21,
    name: "Veg Manchurian",
    price: 239,
    image:
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=60",
    description: "Crispy veg balls in Indo-Chinese sauce",
  },
  {
    id: 22,
    name: "Schezwan Noodles",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=60",
    description: "Spicy noodles with Schezwan sauce",
  },
  {
    id: 23,
    name: "Ramen Bowl",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=60",
    description: "Japanese ramen with rich broth",
  },
  {
    id: 24,
    name: "Sushi Platter",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=60",
    description: "Assorted sushi rolls with soy sauce",
  },
  {
    id: 25,
    name: "Masala Dosa",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=60",
    description: "Crispy dosa with spiced potato filling",
  },
  {
    id: 26,
    name: "Idli Sambhar",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=60",
    description: "Steamed rice cakes with sambhar",
  },
  {
    id: 27,
    name: "Matcha Tea",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60",
    description: "Traditional Japanese green tea",
  },
  {
    id: 28,
    name: "Mango Lassi",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=60",
    description: "Sweet yogurt-based mango drink",
  },
]

function Menu() {
  const { addToCart } = useCart()
  const [addedId, setAddedId] = useState(null)

  return (
    <PageWrapper>
      <div className="app-container py-16">
        <h1 className="page-title">Our Menu</h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foodItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card card-hover overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold mb-1">
                  {item.name}
                </h2>

                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-yellow-400 font-bold text-lg">
                    ₹{item.price}
                  </span>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      addToCart(item)
                      setAddedId(item.id)
                      setTimeout(() => setAddedId(null), 800)
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition
                      ${addedId === item.id
                        ? "bg-green-500 text-black"
                        : "bg-yellow-400 text-black hover:bg-yellow-300"
                      }`}
                  >
                    {addedId === item.id ? "Added ✓" : "Add to Cart"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}


export default Menu
