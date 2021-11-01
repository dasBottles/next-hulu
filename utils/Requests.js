const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/treading/all/week?/api_key=${API_KEY}&language=en-US`
    }
}