import axios from 'axios'

const API_KEY = '563492ad6f917000010000011359bc0d026e441f910a360b5d22c7c3';

export const getImagesBySearch = async (searchParameter, numberOfResults) => {
    return await axios.get(`https://api.pexels.com/v1/search?query=${searchParameter}&per_page=${numberOfResults}`,{
        headers:{
            'Authorization': API_KEY
        }
    })
}