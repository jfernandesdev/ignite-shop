import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'

import { 
  SuccessContainer, 
  ContainerImages,
  ImageItem 
} from '../styles/pages/success'

interface SuccessProps {
  customerName: string;
  products: {
    id: string
    name: string;
    imageUrl: string;
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>

        <ContainerImages>
          {products.map((product) => (
            <ImageItem key={product.id}>
              <Image src={product.imageUrl} alt={product.name} width={120} height={110} />
            </ImageItem>
          ))}
        </ContainerImages>

        <h1>Compra efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de 
          {(products.length > 1 ? 
            `${products.length} camisetas` : 
            `${products.length} camiseta`) 
          } já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>

      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      // notFound: true  
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  
  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name;
  const lineItems = session.line_items.data as Stripe.LineItem[]

 const products = lineItems.map((item) => {
  const product = item.price.product as Stripe.Product

  return {
    id: product.id,
    imageUrl: product.images[0],
  }
 })

  return {
    props: {
      customerName,
      products,
    }
  }
}
