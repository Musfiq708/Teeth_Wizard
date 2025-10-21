import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from './../../assets/firebase.config';
export const authContext = createContext();
export default function AuthProvider({ routes }) {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const handleSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)

    }
    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
    }
    const handleSignOut = () => {
        signOut(auth)
    }
    const authInfo = {
        handleSignUp,
        handleSignIn,
        handleGoogleLogin,
        handleSignOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
console.log(currentUser)
            return () => {
                unsubscribe();
            }
        });
    }, [])
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    routes
                }
            </authContext.Provider>
        </div>
    )
}
