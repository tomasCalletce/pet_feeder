import { Box , Text, Button } from '@chakra-ui/react'
import { useEffect, useState } from "react";

import getData from '../../sinric_pro/relay_device_data';

export default function WeightFeed(){

    const [weight,setWeight] = useState()

    useEffect(()=>{
        getData(setWeight)
    })


    return (
        <Box width="70%" display="flex" mt="6" justifyContent="space-around" >
            <Box boxShadow='base' p='3' rounded='md' bg='white' width="25%">
                <Text fontSize="3xl" color="#44337A" fontWeight="bold">{weight}</Text>
                <Text>food left</Text>
            </Box>
            <Box boxShadow='base' p='3' rounded='md' bg='white' width="25%">
                <Text fontSize="3xl" color="#44337A" fontWeight="bold">10kg</Text>
                <Text>weight of serving</Text>
            </Box>
            <Box boxShadow='base' p='3' rounded='md' bg='white' width="25%">
                <Text fontSize="3xl" color="#44337A" fontWeight="bold">10kg</Text>
                <Button>now</Button>
            </Box>
        </Box>
    )
}
