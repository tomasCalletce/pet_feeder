import { Box , Text , Input, Button } from '@chakra-ui/react'
import { useEffect, useState } from "react";

import funcs from '../../sinric_pro/change_state';

export default function SetTime(){

    const [inputTime,setInputTime] = useState()

    async function handleOnclick(){
        funcs.TurnON()
        setTimeout(()=>{},inputTime/2)
        funcs.TurnOFF()
        setInterval(()=>{
            funcs.TurnON()
            setTimeout(()=>{},inputTime/2)
            funcs.TurnOFF()
        },inputTime)
    }

    function handleOnChange(e){
        const val = e.target.value
        setInputTime(val)
    }


    return (
        <Box width="40%" display="flex" alignItems="center" justifyContent="space-around" flexDirection="column" height="25vh" mt="3" boxShadow='base' p='3' rounded='md' bg='white'> 
            <Text fontSize="3xl" color="#44337A" fontWeight="bold" >Time between food time?</Text>
            <Input placeholder='Basic usage' bg="white" onChange={handleOnChange}width="90%"   />
            <Button width="90%" bg="#44337A" color="white" onClick={handleOnclick} >save</Button>
        </Box>
    )
}