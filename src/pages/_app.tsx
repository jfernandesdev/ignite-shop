import type { AppProps } from 'next/app'
import Image from 'next/future/image'

import { globalStyles } from '../styles/global'
import { Container, Header} from '../styles/pages/app'

import logoImg from '../assets/logo-ignite-shop.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" width={logoImg.width} height={logoImg.height} />
      </Header>
      
      <Component {...pageProps} />
    </Container>
  )
}