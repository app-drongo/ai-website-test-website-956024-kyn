import Hero from '@/components/sections/home/Hero'
import Pricing from '@/components/sections/home/Pricing'
import Features from '@/components/sections/home/Features'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      <section id="features">
        <Features />
      </section>
      </section>
      <section id="pricing">
        <Pricing />
      </section>
    </>
  )
}