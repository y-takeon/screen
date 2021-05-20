import axios from 'axios'
const services=axios.create({
    baseURL:'https://nb.cyyun.com:9888',
    timeout:60000,
    headers:{
        'Access-Control-Allow-Origin': '*',
    }
})
services.interceptors.request.use(
    // request=>{

    // },
    // error=>{}
)
services.interceptors.response.use(
    response=>{
        return response.data
    },
    error=>{}
)

export default services