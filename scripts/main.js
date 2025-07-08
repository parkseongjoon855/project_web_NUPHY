const login =document.querySelector('#my img');
console.log(login);
const loginWrap =document.querySelector('#login_wrap');
console.log(loginWrap);
const xBtn =document.querySelector('#x_btn');
console.log(xBtn);
xBtn.addEventListener('click',btnX);
function btnX(){
    loginWrap.style.display='none';
}
loginWrap.style.display='none';
login.addEventListener('click',myLogin);
function myLogin (){
loginWrap.style.display='block';
}