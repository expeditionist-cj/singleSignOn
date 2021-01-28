import router from './router';
import Cookies from 'js-cookie';
import { getQueryString } from './utils/auth';

let token: string | null = getQueryString('token')
if (token !== null) {
    let tk: string = token;
    Cookies.set('token', tk);
} else {
    Cookies.remove('token');
}
console.log(token, 999);

router.beforeEach((to: any, from: any, next: any): any => {
    console.log(to, Cookies.get('token'));
    // if (to.name !== "Login" && Cookies.get('token') === undefined) {
    //     next({ path: '/Login' });
    // } else {
    //     next()
    // }   
})