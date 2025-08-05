import { Button, Card, Image, Text } from "@chakra-ui/react"
import { useState } from "react"

const Cards = ({image , title , description , value}) => {

  const [ comprar , setComprar ] = useState(false)
  const [ adicionar , setAdicionar ] = useState(false)

  const handleComprar = () => {
    setComprar(true)
    alert('Compra realizada com sucesso!');
  }

    const handleAdicionar = () => {
    setAdicionar(true)
    alert('Item adicionado ao carrinho com sucesso!');
  }

  return (
    <Card.Root maxW="300px" maxH="500px" overflow="hidden">
      <Image
        src={image}
        w="100%"
        h="45%"
        alt={title}
      />
      <Card.Body gap="1">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
        <Text textStyle="1.5xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {value}
        </Text>
      </Card.Body>
      <Card.Footer gap="1">
        <Button variant="solid" marginLeft="0%" maxW={120} w="100%" onClick={handleComprar}>Comprar Item</Button>
        <Button variant="outline" marginLeft="4%" maxW={120} w="100%" border="1px solid #000" onClick={handleAdicionar}> Adicionar </Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default Cards