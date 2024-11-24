import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider();

  // google login
  const handleGoogleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  };

  // gitHub login
  const handleGithubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider) 
  };

  // user create use email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with password and email
  const handleSignInUsePassword = (email, password) => {
    setLoading(true) 
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user logout function
const userLogout = ()  => {
  setLoading(true)
return signOut(auth)
}

// Password reset email send function 
const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email)
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    user,
    setUser,
    handleSignInUsePassword,
    userLogout,
    handleGoogleLogin,
    handleGithubLogin,
    loading,
    resetPassword
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
