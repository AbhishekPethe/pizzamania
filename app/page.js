import Image from 'next/image'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Ingredients from './Components/Ingredients'
import Banner from './Components/Banner'
import Menu from './Components/Menu'
import OrderNow from './Components/OrderNow'
import Offers from './Components/Offers'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Ingredients />
      <Banner bgcolor={"#fff"} textcolor={"#D63920"} />
      <OrderNow />
      <Menu />
      <Offers />
      <Banner bgcolor={"#D63920"} textcolor={"#fff"} />
    </main>
  )
}
