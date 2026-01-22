import { Link } from "react-router-dom"
import PageWrapper from "../components/PageWrapper"
import { motion } from "framer-motion"
import { useAuth } from "../context/AuthContext"

function Home() {
  const { user } = useAuth()

  return (
    <PageWrapper>
      <div>

        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[85vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Food background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 app-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Premium food,
                <br />
                <span className="text-yellow-400">delivered fast</span>
              </h1>

              <p className="text-gray-300 text-lg mb-8">
                Discover fresh meals, crafted by top chefs and delivered
                straight to your doorstep.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link to="/menu" className="btn-primary">
                    Explore Menu
                  </Link>
                </motion.div>

                {!user && (
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link to="/login" className="btn-secondary">
                      Sign In
                    </Link>
                  </motion.div>
                )}

                {user && (
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link to="/orders" className="btn-secondary">
                      My Orders
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= FEATURED SECTION ================= */}
        <section className="app-container py-24">
          <h2 className="section-title text-center mb-12">
            Popular This Week
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {featuredItems.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="card card-hover overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 font-bold">
                      ₹{item.price}
                    </span>

                    <Link
                      to="/menu"
                      className="text-sm text-yellow-400 hover:underline"
                    >
                      Order →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= REVIEWS SECTION ================= */}
        <section className="bg-black/40 py-24">
          <div className="app-container">
            <h2 className="section-title text-center mb-12">
              What Customers Say
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  className="card p-6"
                >
                  <p className="text-gray-300 text-sm mb-4">
                    “{review.text}”
                  </p>
                  <p className="font-semibold text-yellow-400">
                    {review.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageWrapper>
  )
}

/* ================= STATIC DATA ================= */

const featuredItems = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    price: 349,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
    description: "Loaded pepperoni pizza with mozzarella cheese",
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 249,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    description: "Juicy burger with melted cheese",
  },
  {
    id: 3,
    name: "Chocolate Dessert",
    price: 199,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Rich chocolate dessert for sweet cravings",
  },
]

const reviews = [
  {
    name: "Amit Sharma",
    text: "Best food delivery experience I’ve had. Super fast and tasty!",
  },
  {
    name: "Neha Verma",
    text: "The UI is so smooth and the food quality is amazing.",
  },
  {
    name: "Rahul Mehta",
    text: "FancyFood is now my go-to app for weekend meals.",
  },
]

export default Home
