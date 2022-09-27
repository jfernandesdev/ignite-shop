import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'

import { 
  SuccessContainer, 
  ContainerImages,
  ImageItem 
} from '../styles/pages/success'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ContainerImages>
          <ImageItem>
            <Image src={product.imageUrl} alt={product.name} width={120} height={110} />
          </ImageItem>

          <ImageItem>
            <Image src={product.imageUrl} alt={product.name} width={120} height={110} />
          </ImageItem>

          <ImageItem>
            <Image src={product.imageUrl} alt={product.name} width={120} height={110} />
          </ImageItem>
        </ContainerImages>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de 3 camisetas já está a caminho da sua casa.
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
  const product = session.line_items.data[0].price.product as Stripe.Product


  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      }
    }
  }
}
