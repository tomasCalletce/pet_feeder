
import axios from 'axios'

async function getData(setState){

    const res = await axios({
        method: 'POST',
        url: 'https://api.sinric.pro/api/v1/auth',
        headers: 
        {   'x-sinric-api-key' : 'b4d269b2-299d-4bba-accf-9f0eb0e0f67f',
            'Content-Type'  : 'application/x-www-form-urlencoded' 
        },
        form: 
        {
            client_id: "android-app"
        } 
      });
    
    const data = await axios({
        method: 'GET',
        url: `https://api.sinric.pro/api/v1/devices/62699e6bd0fd258c521bf3d5`,
        headers: 
        {   
            'Authorization': `Bearer ${res.data.accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: 
        {
            client_id: "android-app"
        } 
    });
    
    setState(data.data.device.powerState);
      
}



export default getData;