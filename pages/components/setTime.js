import { Box , Text , Input, Button } from '@chakra-ui/react'

export default function SetTime(){
    return (
        <Box width="40%" display="flex" alignItems="center" justifyContent="space-around" flexDirection="column" height="25vh" mt="3" boxShadow='base' p='3' rounded='md' bg='white'> 
            <Text fontSize="3xl" color="#44337A" fontWeight="bold" >Time between food time?</Text>
            <Input placeholder='Basic usage' bg="white" width="90%" />
            <Button width="90%" bg="whiteAlpha.600" >save</Button>
        </Box>
    )
}