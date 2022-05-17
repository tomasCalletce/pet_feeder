// import axios from "axios";
const axios  = require('axios')
async function TurnON(){
    try {
        const res = await axios({
            method: 'post',
            url: 'https://cors-anywhere.herokuapp.com/https://ifttt.sinric.pro/v1/actions',
            data: {
                "api_key" : "b4d269b2-299d-4bba-accf-9f0eb0e0f67f",
                "device_id": "62699e6bd0fd258c521bf3d5",
                "action": "setPowerState",
                "value": { "state" : "Off" }
                }
          });
          return res;
    } catch (error) {
        return error;
    }
        
}

async function TurnOFF(){
    try {
        const res = await axios({
            method: 'post',
            url: 'https://cors-anywhere.herokuapp.com/https://ifttt.sinric.pro/v1/actions',
            data: {
                "api_key" : "b4d269b2-299d-4bba-accf-9f0eb0e0f67f",
                "device_id": "62699e6bd0fd258c521bf3d5",
                "action": "setPowerState",
                "value": { "state" : "Off" }
                }
          });
          return res;
    } catch (error) {
        return error;
    }
}
const funcs = {
    TurnON,
    TurnOFF
}

export default funcs;




