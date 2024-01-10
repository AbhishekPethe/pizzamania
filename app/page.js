import Image from 'next/image'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Ingredients from './Components/Ingredients'
import Banner from './Components/Banner'
import Menu from './Components/Menu'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Ingredients />
      <Banner bgcolor="#fff" textcolor="#D63920" />
      <Menu />
    </main>
  )
}
