import { Box, Center, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import './App.css';
import Cards from './components/Card';

function App() {

  const produtos = [
    {
      image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Pizza de Mussarela',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis convallis magna. Sed ipsum massa, egestas eu tincidunt in, volutpat ac ligula. Suspendisse potenti.',
      value: 'R$60,00'
    },

    {
      image: 'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Smash Burguer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis convallis magna. Sed ipsum massa, egestas eu tincidunt in, volutpat ac ligula. Suspendisse potenti.',
      value: 'R$25,00'
    },

    {
      image: 'https://images.unsplash.com/photo-1624772413714-7e1ea3fbfeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Shalchicha HotDog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis convallis magna. Sed ipsum massa, egestas eu tincidunt in, volutpat ac ligula. Suspendisse potenti.',
      value: 'R$25,00'
    },

    {
      image: 'https://plus.unsplash.com/premium_photo-1671559021023-3da68c12aeed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFzYW5oYXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Lasanha Pequena',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis convallis magna. Sed ipsum massa, egestas eu tincidunt in, volutpat ac ligula. Suspendisse potenti.',
      value: 'R$30,00'
    }
  ]

  return (
<div bg="#fef6e4">
  <Box bg="#cc2828" borderBottom="2px solid #000" borderRadius="1px" py={6}>
    <Heading
      as="h1"
      size="4xl"
      fontWeight="bold"
      letterSpacing="tight"
      textAlign="center"
    >
      🍕 Food-Shooppig Chakra ☯
    </Heading>
  </Box>

<SimpleGrid
  columns={[1, null, 4]}
  spacing={10}
  p={3}
  maxW="94%"
  mx="auto"
>
  {produtos.map((item, index) => (
    <Cards key={index} {...item} />
  ))}
</SimpleGrid>
</div>
  );
}

export default App;
