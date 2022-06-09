
const singIn = document.querySelector('.login-modal__in');
const singUp = document.querySelector('.login-modal__up');
const modalRegistration = document.querySelector('.registration-modal');
const modalnput = document.querySelector('.login-modal');
const btnSignin = document.querySelector('#signin');
const btnModalClose = document.querySelector('.modal-close');
const mobalCheckBox = document.querySelector('#checkbox-log');
const emailLogin = document.querySelector('#email');
const passwordLogin = document.querySelector('#password-1'); 
const formLog = document.querySelector('.login-modal_form'); 

singIn.addEventListener('click', onCloseModalRegistrationClick);

function onCloseModalRegistrationClick(){
    if(singIn.classList.contains('login-modal__active')){
        return
    }
    else{
        modalRegistration.style.transform = 'translateX(100%)';
        singUp.classList.add('login-modal__noactive');
        singUp.classList.remove('login-modal__active');
        singIn.classList.add('login-modal__active');
        singIn.classList.remove('login-modal__noactive');
    }
};

singUp.addEventListener('click', onOpenModalRegistrationClick);

function onOpenModalRegistrationClick(){
    if(singUp.classList.contains('login-modal__active')){
        return
    }
    else{
        modalRegistration.style.transform = 'translateX(0%)';
        singUp.classList.add('login-modal__active');
        singUp.classList.remove('login-modal__noactive');
        singIn.classList.add('login-modal__noactive');
        singIn.classList.remove('login-modal__active');
    }
};

btnSignin.addEventListener('click', () => {
    modalnput.style.display = 'block';
});

btnModalClose.addEventListener('click', () => {
    modalnput.style.display = 'none';
    onCloseModalRegistrationClick();
});



////////////////////////close modal in ESC//////////////////////////////
window.addEventListener("keydown", closeModalKeydown);

function closeModalKeydown(event){
    if(event.code !== "Escape"){
    return
    }
    modalnput.style.display = 'none';
    onCloseModalRegistrationClick();
  }

  ////////////////////////remember login and password//////////////////////////////
  
    const localLogin = localStorage.getItem('login') || '';
    const localPassword = localStorage.getItem('password')|| '';
    const localCxheckboxLog = localStorage.getItem('checkboxlog') || '';

if (localLogin !=="") {
    emailLogin.value = localLogin;
}
if (localPassword !=="") {
    passwordLogin.value = localPassword;
}
if (localCxheckboxLog !== "") {
    mobalCheckBox.checked = true;
}


function rememberAndDeletLoginAndPassword() {
    if(mobalCheckBox.checked){
        localStorage.setItem('checkboxlog', true); // save
        localStorage.setItem('login', emailLogin.value); // save
        localStorage.setItem('password', passwordLogin.value); // save
    }else {
        localStorage.removeItem('login'); // delete
        localStorage.removeItem('password'); // delete
        localStorage.removeItem('checkboxlog');// delete
    }
    }

formLog.addEventListener('submit', (event) => {
    event.preventDefault();
    rememberAndDeletLoginAndPassword();
});