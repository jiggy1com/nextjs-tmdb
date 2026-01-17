// https://www.google.com/search?q=add+external+api+with+credentials+as+datasource+for+graphql+consumption
import { RESTDataSource } from '@apollo/datasource-rest';

const API_HOST = '';
const API_KEY = '';
const API_READ_ACCESS_TOKEN = '';

class TMDBAPI extends RESTDataSource {
    baseURL = API_HOST;

    headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    getEndpoint(endpoint: string) {
        return this.get(`${this.baseURL}/${endpoint}?api_key=${API_KEY}`);
    }

    // getTracksForHome() {
    //     return this.get('tracks'); // Uses the built-in get method for a GET request
    // }
    //
    // getAuthor(authorId) {
    //     return this.get(`author/${authorId}`);
    // }
}
