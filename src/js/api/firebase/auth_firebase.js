import { auth, provider } from './firebase_app'
import { onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth';
import currentUser from '../../storage/currentUser';

const logInBtn = document.querySelector('#signin');
const logOutBtn = document.querySelector('#signout');
const googleUser = document.querySelector('#googleUser');

onAuthStateChanged(auth, user => {
    if (user) {
        console.log('User is signed in');
        console.log(user.displayName);
        currentUser.userName = user.displayName;
        currentUser.userEmail = user.email;
        currentUser.userUiid = user.uid;
        currentUser.isAuth = true;

        logInBtn.classList.toggle('auth-hide');
        logOutBtn.classList.toggle('auth-hide');
        googleUser.classList.toggle('auth-hide');
        googleUser.textContent = currentUser.userName;

    } else {
        console.log('User is signed out');
        currentUser.isAuth = false;
        currentUser.userName = '';
        currentUser.userEmail = '';
        currentUser.userUiid = '';
        currentUser.movieLists = {};
    }
});

function logInByGoogle() {
    console.log('login API');
    signInWithRedirect(auth, provider);
}
function logOut() {
    console.log('logout API');
    signOut(auth)
        .then(() => {
            console.log('Sign-out successful');
            logInBtn.classList.toggle('auth-hide');
            logOutBtn.classList.toggle('auth-hide');
            googleUser.classList.toggle('auth-hide');
            console.log(currentUser);
        })
        .catch(error => {
            console.log('Sign-out error', error);
        });
}

export default { logInByGoogle, logOut };