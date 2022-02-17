// set 쿠키만들기 함수
function setCookie(name,value,expir){
    let date = new Date();
    date.setDate(date.getDate() + expir);
    document.cookie = name + '=' + value + ';expires=' + date +';path=/;';
}
// get 쿠키만들기 함수
function getCookie(name) { 
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}