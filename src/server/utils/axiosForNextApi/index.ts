import axios from 'axios'

const axiosForNextApi = axios.create({
    headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
        'Accept-Encoding': 'application/json',
    },
})

export { axiosForNextApi }
