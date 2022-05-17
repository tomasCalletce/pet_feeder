import { Box , Text, Button } from '@chakra-ui/react'
import { useEffect, useState } from "react";

import funcs from '../../sinric_pro/change_state.js';
import getWeight from '../../sinric_pro/weight_device_data.js';

export default function WeightFeed(){

    const [weight,setWeight] = useState();

    useEffect(()=>{
        getWeight(setWeight)
    })

    async function handleClick(){
        await funcs.TurnON();
        setTimeout(()=>{},10000)
        await funcs.TurnOFF();
    }

    return (
        <Box width="70%" display="flex" mt="6" justifyContent="space-around" >
            <Box boxShadow='base' p='3' rounded='md' bg='white' width="25%">
                <Text fontSize="3xl" color="#44337A" fontWeight="bold">{weight}kg</Text>
                <Text>food left</Text>
            </Box>
            <Box boxShadow='base' p='3' rounded='md' bg='white' width="25%">
                <Text fontSize="3xl" color="#44337A" fontWeight="bold">10kg</Text>
                <Text>weight of serving</Text>
            </Box>
            <Box boxShadow='base' p='3' rounded='md' bg='white' width="25%">
                <Text fontSize="3xl" color="#44337A" fontWeight="bold">give them food!!</Text>
                <Button width="100%"onClick={handleClick}>now</Button>
            </Box>
        </Box>
    )
}
