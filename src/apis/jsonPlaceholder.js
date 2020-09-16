import axios from 'axios';

export default axios.create({
    baseURL: 'https://trolltunga.vantage6.ai'
    // baseURL: 'http://localhost:5000'
});
