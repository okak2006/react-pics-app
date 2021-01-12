import axios from 'axios';

// export name = file name
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID AQFy4Jz_Ne3m798tTZ80UtDUYVPNuyH2ZqI_VZ4NQ9g'
    },
})