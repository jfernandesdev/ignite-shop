import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '../styles/global'
import { Container, Header} from '../styles/pages/app'

import logoImg from '../assets/logo-ignite-shop.svg'

console.log(logoImg);

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt="" width={logoImg.width} height={logoImg.height} />
      </Header>
      
      <Component {...pageProps} />
    </Container>
  )
}