import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'
import Stripe from 'stripe'

import { Handbag } from 'phosphor-react'

import { stripe } from '../lib/stripe'

import { useKeenSlider } from 'keen-slider/react'

import { 
  HomeContainer, 
  Product,
  AddToCartButton
} from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
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
        <title>Home | Ignite Shop</title>
      </Head>

      {products.map(product => (
        <Link href={`product/${product.id}`} key={product.id} prefetch={false}>
          <Product className="keen-slider__slide" >
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              width={520} 
              height={480} 
              priority={true}
            />

            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>

              <AddToCartButton 
                onClick={() => alert('Add card!')}
              >
                <Handbag size={32} weight="bold" />
              </AddToCartButton>
            </footer>
          </Product>
       </Link>
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


