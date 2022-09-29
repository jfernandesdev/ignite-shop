import { useState, useContext } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import { useRouter } from 'next/router'

import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'

import axios from 'axios'
import { CartContext } from '../../contexts/CartContext'

import {
  ProductContainer,
  ImageContainer,
  ProductDetails
} from '../../styles/pages/product'

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    priceFormatted: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { addProductToCart } = useContext(CartContext)

  const { isFallback } = useRouter()

  if(isFallback) {
    return <p>Loading...</p>
  }

  async function handleAddToCart(product) {
    const productToAdd = { ...product, amount: 1 }
    
    addProductToCart(productToAdd)
  }

  return (
    <>
      <Head>
        <title>{product?.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>
          <p>{product.description}</p>

          <button 
            disabled={isCreatingCheckoutSession}
            onClick={() => handleAddToCart(product)}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await stripe.products.list({
    limit: 3
  })

  const paths = data.map(product => ({
    params: { id: product.id },
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string}> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
   
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: (price.unit_amount! / 100),
        priceFormatted: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}