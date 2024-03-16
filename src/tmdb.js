const API_KEY = 'f2cf227126deb841898eb74b866e2160'
const BASE_URL = 'https://api.themoviedb.org/3'

async function basicFetch(endpoint) {
    const req = await fetch(`${BASE_URL}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&lenguage=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Para Você',
                items: await basicFetch(`/trending/all/week?lenguage=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?lenguage=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?genres=28&lenguage=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?genres=35&lenguage=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?genres=27&lenguage=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?genres=10749&lenguage=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?genres=99&lenguage=pt-BR&api_key=${API_KEY}`),
            },
        ]
    }
}