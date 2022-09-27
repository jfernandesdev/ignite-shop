import Image from 'next/future/image'
import { 
  CartContainer,
  ProductList,
  CartItem,
  ContainerImage
} from './styles'

import { X } from 'phosphor-react'

import camiseta1 from '../../assets/shirts/1.png'

interface ShoppingCartProps {
  cartIsOpen: boolean,
  closeCart: () => void,
}

export function ShoppingCart({ cartIsOpen, closeCart }: ShoppingCartProps ) {
  return (
    <CartContainer open={cartIsOpen}>
      <header>
        <h2>Sacola de compras</h2>

        <button onClick={closeCart}>
          <X size={24} weight="bold"/>
        </button>
      </header>

      <ProductList>
        {[1,2,3].map((index, item) => (
          <CartItem key={index}>
            <ContainerImage>
              <Image src={camiseta1} alt="" width={95} height={95} />
            </ContainerImage>

            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <a>Remover</a>
            </div>
          </CartItem>
        ))}
      </ProductList>

      <footer>
        <div>
          <span>Quantidade</span>
          <span className="itemsAmount">3 itens</span>
        </div>

        <div>
          <strong>Valor total</strong>
          <strong className="price">R$ 270,00</strong>
        </div>

        <button>Finalizar compra</button>
      </footer>
    </CartContainer>
  )
}