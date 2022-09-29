import type { GetStaticProps } from 'next'
import { useState, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'
import Stripe from 'stripe'

import { Handbag } from 'phosphor-react'

import { stripe } from '../lib/stripe'

import { CartContext } from '../contexts/CartContext'

import { 
  HomeContainer, 
  Product,
  AddToCartButton
} from '../styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'
import { ArrowSlide } from '../components/ArrowSlider'

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    priceFormatted: string;
    defaultPriceId: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { addProductToCart } = useContext(CartContext)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 2.3,
      spacing: 48,
    }
  })


  async function handleAddToCart(product) {
    const productToAdd = { ...product, amount: 1 }

    addProductToCart(productToAdd)
  }

  return (
    <HomeContainer ref={sliderRef} className="keen-slider" maxWidth={(currentSlide === 0) ? 'calc' : 'auto'}>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      {products.map(product => (
        <Product key={product.id} className="keen-slider__slide">
        
          <Link href={`product/${product.id}`} prefetch={false}>
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              width={520} 
              height={480} 
              priority={true}
            />
          </Link>

          <footer>
            <div>
              <strong>{product.name}</strong>
              <span>{product.priceFormatted}</span>
            </div>

            <AddToCartButton 
              onClick={() => handleAddToCart(product)}
            >
              <Handbag size={32} weight="bold" />
            </AddToCartButton>
          </footer>
        </Product>
      ))}
      <ArrowSlide 
        left 
        onClick={(event:any) => event.stopPropagation() || instanceRef.current?.prev()} 
        disabled={currentSlide === 0}
      />

      <ArrowSlide
        onClick={(event: any) => event.stopPropagation() || instanceRef.current?.next()}
        disabled={
          currentSlide ===
          instanceRef.current?.track.details.slides.length - 2
        }
      />
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
      price: (price.unit_amount! / 100), //comes in cents    
      priceFormatted: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100), //comes in cents  
      defaultPriceId: price.id,  
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  }
}


