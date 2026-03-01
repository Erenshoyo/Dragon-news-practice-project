import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  // Facebook Authentication

  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // Google Authentication
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authData = {
    user,
    setUser,
    createUser,
    logIn,
    logOut,
    loading,
    setLoading,
    updateUser,
    facebookSignIn,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
