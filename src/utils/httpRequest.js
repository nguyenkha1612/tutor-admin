import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

// export const get = async (api, options = []) => {
//     const response = await request.get(api, options);
//     return response.data;
// };

// export default request;

instance.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
        const { headers } = config;
        return {
            ...config,
            headers: {
                ...headers,
                'Access-Token': `Token ${accessToken}`,
            },
        };
    }
    return config;
});

export default instance;
