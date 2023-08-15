import axios, {AxiosResponse} from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

const responseBody = (response : AxiosResponse) => response.data;

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

axios.interceptors.response.use(async response => {
        await sleep(1000);
        return response;
})

const requests = {
    get: (url: string, params?: URLSearchParams ) => axios.get(url, {params}).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const Products = {
    list: (params?: URLSearchParams) => requests.get('/products', params),
    details: (id: number) => requests.get(`/products/${id}`),
}

const agent = {
    Products
}

export default agent;