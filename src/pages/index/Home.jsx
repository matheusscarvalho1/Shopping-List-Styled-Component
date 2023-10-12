import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product } from './styles'
// React Hooks 

// useRef - Pega o valor de dentro do input (inputRef.current.value)

// useState -> Estado (Variável especial) -> É uma variável que 
//toda vez que troca de valor a tela irá renderizar com os valores atualizado

//useEffect -> Usado para importar apis utilizando fetch('URL')


// Sempre que for criar/usar uma função que envia um parâmetro (algum valor) sempre utilizar arrowFunction 
// como nesse estrutura -> " <button onclick={() => deleteProduct(product.id)}>🗑️</button> "


// const [products, setProducts] = useState ([]) -> 
//products -> Nome da variável / setProducts -> nome da função que vamos utilizar para colocar valor dentro do products

export default function Home() {
  const inputRef = useRef()
  const [products, setProducts] = useState ([])

  const titulo = "Lista de Compras"

  // products.push - Pega o valor e adiciona no array
  // products.map - Pega produto por produto do array
  // products.filter0

  //npm i uuid (cria IDs aleatórios) - Para que o react saiba o id de cada elemento adicionado pelo cliente

  function cliqueiNoBotao(){
  setProducts ([{ id: v4(), name:inputRef.current.value}, ...products])
  inputRef.current.value = ''
   
  }

  function deleteProduct(id){
    setProducts (products.filter(product => product.id !== id))
  }

  return (
    <>
      <Container>
        <h1>{titulo}</h1>
        <input placeholder="Adicione um produto na lista de compras" ref={inputRef}></input>
        <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

        {
          products.map((product) => (
            <Product key={product.id}>  
            <p>{product.name}</p> 
            <button onClick={() => deleteProduct(product.id)}>🗑️</button>
            </Product>
          ))
        }
      </Container>
    </>
  )
}

