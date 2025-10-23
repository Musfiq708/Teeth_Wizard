import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from './../../assets/firebase.config';
export const authContext = createContext();
export default function AuthProvider({ routes }) {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            

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
    const manageProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }
    const authInfo = {
        handleSignUp,
        handleSignIn,
        handleGoogleLogin,
        handleSignOut,
        manageProfile
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
