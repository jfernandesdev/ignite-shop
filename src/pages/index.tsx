import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
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

      {products.map(product => (
        <Product 
          key={product.id} 
          href={`product/${product.id}`} 
          className="keen-slider__slide"
        >
          <Image src={product.imageUrl} alt={product.name} width={520} height={480} />

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100), //comes in cents    
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  }
}


