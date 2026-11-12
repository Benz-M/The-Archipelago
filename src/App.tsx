import  {Routes, Route } from "react-router"
import Homepage from './pages/homepage'
import Destinations from './pages/destination'
import Activities from './pages/activities'
import FoodAndCulture from './pages/food-culture'
import Booking from './pages/booking'
function App() {
  return(
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/food-culture" element={<FoodAndCulture />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  )
}

export default App