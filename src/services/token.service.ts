import Cookies from "universal-cookie"

const cookie = new Cookies();
const cookiename: string = 'react-strater'

const tokenService = {
    setToken: (val: string) => {
        cookie.set(cookiename, val, {
            path: '/'
        })
    },
    getToken: () => {
        return cookie.get(cookiename) ? true : false
    }
    ,
    removeToken: () => {
        cookie.remove(cookiename)
    }
}
export default tokenService;