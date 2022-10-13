export function startSession(token) {
    localStorage.setItem("token", token);
}

export function isSessionUp() {
    return localStorage.getItem("token") != null;
}

export function getToken() {
    return localStorage.getItem("token");
}

export function logOut() {
    localStorage.removeItem("token");
    console.log("logOut - isSessionUp: " + isSessionUp());
}