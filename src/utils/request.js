export async function request(request, method) {
    const requestOptions = {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(request)
    };
    const res = await fetch("https://fiuber-api-gateway.herokuapp.com" + '/login/login', requestOptions);
    const body = await res.json();
    return body;
}

export const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export default {request, delay}