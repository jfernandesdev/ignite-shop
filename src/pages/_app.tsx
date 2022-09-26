import type { AppProps } from 'next/app'
import Image from 'next/future/image'
import Link from 'next/link'

import { globalStyles } from '../styles/global'
import { Container, Header} from '../styles/pages/app'

import logoImg from '../assets/logo-ignite-shop.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" width={logoImg.width} height={logoImg.height} />
        </Link>
      </Header>
      
      <Component {...pageProps} />
    </Container>
  )
}