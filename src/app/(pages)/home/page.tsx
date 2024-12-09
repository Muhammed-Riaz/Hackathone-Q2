import Classic from "@/app/components/classic"
import Hero from "@/app/components/hero"
import Universe from "@/app/components/universe"
import Products from '@/app/components/products'
import Features from "@/app/components/feautures"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"


function Home() {
  return (
    <main>
       
      <Hero/>
      <Products/>
      <Classic/>
      <Universe/>
      <Features/>
    </main>
  )
}

export default Home