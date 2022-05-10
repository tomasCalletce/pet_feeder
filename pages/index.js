import { Box , Text } from '@chakra-ui/react'

//components 
import SetTime from './components/setTime'
import WeightFeed from './components/weightFeed'

export default function Home() {
  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" flexDirection="column" alignItems="center"  >
      <Box display="flex" alignItems="center" justifyContent="center" height="10vh">
        <Text fontSize="6xl" color="tomato" fontWeight="bold" >petii</Text>
      </Box>
      <SetTime/>
      <WeightFeed/>
    </Box>
  )
}
