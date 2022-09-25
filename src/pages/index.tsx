import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from '../styles/pages/home'

import camiseta1 from '../assets/shirts/1.png'
import camiseta2 from '../assets/shirts/2.png'
import camiseta3 from '../assets/shirts/3.png'
import camiseta4 from '../assets/shirts/4.png'

import 'keen-slider/keen-slider.min.css'

const Home: NextPage = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Head>
        <title>Ignite Shop</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Product href="#" className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product href="#" className="keen-slider__slide">
        <Image src={camiseta2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product href="#" className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product href="#" className="keen-slider__slide">
        <Image src={camiseta4} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product href="#" className="keen-slider__slide">
        <Image src={camiseta2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export default Home
