import axios from 'axios';
const base_url = `https://nextjs-pinterest.vercel.app/`


const app = axios.create({
    baseURL: base_url,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default app;