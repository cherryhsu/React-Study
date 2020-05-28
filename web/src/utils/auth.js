export function getToken() {
    return sessionStorage.getItem("token")
}
export function setToken(token) {
    sessionStorage.setItem('token', token)
}
export function clearToken() {
    sessionStorage.removeItem('token')
}
export function isLogined() {
    if (sessionStorage.getItem('token')) {
        return true
    }
    return false
}