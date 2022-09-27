import { useState } from 'react'
import type { AppProps } from 'next/app'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Handbag } from 'phosphor-react'

import { globalStyles } from '../styles/global'

import { 
  Container, 
  Header, 
  CartButton 
} from '../styles/pages/app'

import { ShoppingCart } from '../components/ShoppingCart'

import logoImg from '../assets/logo-ignite-shop.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [cartIsOpen, setCartIsOpen] = useState(false)

  function closeCart() {
    setCartIsOpen(false)
  }
  return (
    <Container>
      <Header justify={router.pathname === '/success' ? 'center' : 'between'}>
        <Link href="/">
          <Image src={logoImg} alt="" width={logoImg.width} height={logoImg.height} />
        </Link>

        {router.pathname !== '/success' && (
          <CartButton onClick={() => setCartIsOpen(true)}>
            <Handbag size={24} weight="bold" />
            <span>3</span>
          </CartButton>
        )}
      </Header>

      <ShoppingCart 
        cartIsOpen={cartIsOpen}
        closeCart={closeCart}
      />
      
      <Component {...pageProps} />
    </Container>
  )
}