import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { HomeContainer, Product } from '../styles/pages/home'

import camiseta1 from '../assets/shirts/1.png'
import camiseta2 from '../assets/shirts/2.png'
import camiseta3 from '../assets/shirts/3.png'
import camiseta4 from '../assets/shirts/4.png'

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Head>
        <title>Ignite Shop</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Product>
        <Image src={camiseta1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
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
