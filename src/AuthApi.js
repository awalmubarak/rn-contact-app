import axios from 'axios'

export default axios.create({
    baseURL: "https://ampersand-contact-exchange-api.herokuapp.com/api/v1",
    headers: {
        ContentType: "application/json",
        Accept:"application/json"
    },
    
})
