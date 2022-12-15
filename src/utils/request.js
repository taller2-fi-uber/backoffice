import {getToken} from './session';

export class Requester {

    static async _request(request, method, path) {
        const requestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': getToken()},
        };
        if ( request ) requestOptions.body = JSON.stringify(request);
        const res = await fetch(process.env.REACT_APP_BACKEND_URL + path, requestOptions);
        return await res.json();
    }

    static login(body) {
        return this._request(body, "POST", '/login/login')
    }

    static signup(body) {
        return this._request(body, "POST", '/login/admin')
    }

    static getUsers() {
        return this._request(null , "GET", '/users/users').then(d => d)
    }

    static updateRules(body) {
        return this._request(body , "POST", '/trip/rules').then(d => d)
    }

    static getRules() {
        return this._request(null , "POST", '/trip/rules').then(d => d)
    }

}

export const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export default {Requester, delay}
