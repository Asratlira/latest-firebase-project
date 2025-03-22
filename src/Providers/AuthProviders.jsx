import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoole = () => {
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    setloading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    signInUser,
    signOutUser,
    loading,
    signInWithGoole,
  };
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser, "currentUser");
      setUser(currentUser);
      setloading(false);
    });
    return () => {
      unSuscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
