import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //Google Sign in
    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        .catch(error=>{
            setError(error.message);
        })
        .finally(()=> setIsLoading(false))
    };
//observe user
    useEffect(()=>{
        onAuthStateChanged(auth,  user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[])
//logout user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(()=> setIsLoading(false))
    };

// user create using email password
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

//handle Registration form
const handleRegistation = e => {
    e.preventDefault();
    if(password.length < 6){
        setError('Password must be at least 6 characters.')
        return;
    }
   isLogIn? proccessLogin(email, password) : createNewUser(email, password); 
};

//new user create
const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        const user = result.user;
        setUser(user);
        setError('');
        setUserName();
    })
    .catch(error=>{
        setError(error.message);
    })
};
//user login
const proccessLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(result=> {
        const user = result.user;
        setUser(user); 
        setError('');
    })
    .catch(error=>{
        setError(error.message);
    })
}

//handle user Name
 const setUserName = () => {
     updateProfile(auth.currentUser, {displayName: name})
     .then(result=>{})
 }

//email handle
const handdleEmailChange = e =>{
    setEmail(e.target.value);
}

//password handle
const handlePasswordChange = e => {
    setPassword(e.target.value);
}

//user name handle
const handleNameChange = e => {
    setName(e.target.value);
}

//toggle login and resigter
const toggleLogin = e => {
    setIsLogIn(e.target.checked)
}
    return{
        user,
        setUser,
        error,
        googleSignIn,
        logOut,
        handleRegistation,
        handdleEmailChange,
        handlePasswordChange,
        toggleLogin,
        isLogIn,
        handleNameChange,
        isLoading
    }
}
export default useFirebase;