export function setCookie(name, value, exp) {
    let date = new Date();
    date.setTime(date.getTime() + exp);
    //document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`
};
export function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};
export function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}
