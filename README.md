# Ignite Shop <img src='https://github.com/jfernandesdev/ignite-shop/blob/773c33abe446e170dc17ab6d24c932ff0118b551/src/assets/logo-ignite-shop.svg' width='90px' />

Projeto Web desenvolvido dentro do Ignite by Rocketseat • Trilha ReactJS - TEMA: "Ignite Shop" 🛒

### Descrição:
O projeto trata-se de uma loja online de camisetas com carrinho de compra

- [x] Slider de produtos (camisetas);
- [x] Página dos produtos com foto, título, preço e descrição;
- [x] Carrinho de compra com lista de produtos, opção de remover e total calculado;
- [x] Integração com checkout do Stripe;
- [x] Responsividade desktop e mobile.

### Alguns cartões para simular pagamentos no checkout: 🧪

| Marca | Número | CVC | Data | Opção |
| --- | --- | --- | --- | --- |
| Visa | `4242 4242 4242 4242` | Quaisquer 3 dígitos | Qualquer data futura | SUCESSO |
| Martercard | `5555 5555 5555 4444` | Quaisquer 3 dígitos | Qualquer data futura | SUCESSO |
| Visa | `4000 0000 0000 9995` | Quaisquer 3 dígitos | Qualquer data futura | CARTÃO RECUSADO POR FUNDOS INSUFICIENTES |
| Visa | `4000 0000 0000 0127` | Quaisquer 3 dígitos | Qualquer data futura | CARTÃO RECUSADO POR CVC INCORRETO |

> Para outros cenários de teste consulte a documentação do Stripe

## Tecnologias utilizadas: 🚀

- ReactJs | ^18.2.0
- Nextjs | 12.3.1
- Typescript | ^4.8.3 -D
- Stripe | ^10.11.0
- Stitches | ^1.2.8
- Keen Slider | ^6.8.2
- Axios | ^0.27.2


## Layout (design by @millenakmartins) 🤩

### Desktop (screenshot):

| Home | Produto |
| --- | --- |
| <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/desktop-1.png" /> | <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/desktop-2.png" /> | 

| Carrinho | Checkout | Sucesso |
| --- | --- | --- |
| <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/desktop-3.png" /> | <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/desktop-4.png" /> | <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/desktop-5.png" />

### Mobile (screenshot):

| Home | Carrinho | Produto | Checkout |  Sucesso |
| --- | --- | --- | --- | --- |
| <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/mobile-1.png" width='275px' /> | <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/mobile-2.png" width='275px' /> | <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/mobile-3.png" width='275px' /> | <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/mobile-4.png" width='275px' /> | <img src="https://github.com/jfernandesdev/ignite-shop/blob/b2f9c8bfcf05a019e33694596af3e9170407b487/public/mobile-5.png" width='275px' /> 


##  Rodando o projeto localmente: ⚙

Este projeto possui integração com o Stripe (listagem de produtos e checkout), então segue o passo a passo para configuração do Stripe:
 - Logar em sua conta Stripe;
 - Criar nova conta (`modo teste`) com o nome do projeto (canto superior esquerdo);
 - Cadastre alguns produtos na aba `Produtos`
   - Nome;
   - Descrição;
   - Foto;
   - Preço (selecione `uma única vez`).
 - Por fim, `Salvar e adicionar`
 - Na aba de desenvolvedores > chaves da API. Copie a `chave publicável` e `chave secreta` e cole nas variáveis ambiente (alterar o arquivo .env.sample para `.env.local`) e preencher as variáveis `STRIPE_PUBLIC_KEY` e `STRIPE_SECRET_KEY`
 
 
Depois, instale as depedências (com npm ou yarn)
```sh
$ yarn
```

Por fim, rode:
```sh
$ yarn dev
```

### Dê uma olhada como o projeto ficou! 👀
https://shop-jfernandesdev.vercel.app/

<br>

<img src="https://i.ibb.co/Yckq764/footer-signature.png" alt="footer-signature" border="0"  width='400px' />
