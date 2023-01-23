import * as React from 'react'
import { Box, ChakraProvider, GridItem, SimpleGrid } from '@chakra-ui/react'
import Card from './components/Card'

export const App = () => (
  <ChakraProvider>
    <Box>
      <SimpleGrid minChildWidth='250px' spacing='40px'>
        <GridItem maxW='300px' w='100%' h='100%'>
          <Card
            src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg'
            tagName='AUCTION'
            userId='#B8/457843'
            likes={92}
            userName='Enoch Citizen'
            bidPrice='$260'
            days={0}
            hours={0}
            minutes={0}
            seconds={3}
            btns={['BID NOW']}
          />
        </GridItem>
        <GridItem maxW='300px' w='100%' h='100%'>
          <Card
            src='https://assets.cdn.thewebconsole.com/S3WEB6082/a_images/61e0b084c4b3c.jpg?v=2&m=2fa877f3869f57733f5584d35ffc344b&cropresize(850x607)'
            tagName='AUCTION'
            userId='#B8/457843'
            likes={92}
            userName='Enoch Citizen'
            bidPrice='$260'
            days={2}
            hours={1}
            minutes={2}
            seconds={59}
            btns={['BID NOW']}
          />
        </GridItem>
        <GridItem maxW='300px' w='100%' h='100%'>
          <Card
            src='https://emirateswoman.com/wp-content/uploads/2022/07/Bored-Ape-Club-NFT-1.png'
            tagName='AUCTION'
            userId='#B8/457843'
            likes={92}
            userName='Enoch Citizen'
            bidPrice='$260'
            days={2}
            hours={0}
            minutes={0}
            seconds={4}
            btns={['BUY NOW', 'ADD TO CART']}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  </ChakraProvider>
)
