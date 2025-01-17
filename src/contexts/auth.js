import React,  {createContext, useState, useEffect} from "react";
import app from "../services/firebaseConnection";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider ({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const db = getDatabase(app)
    const auth = getAuth();

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser) {
                /*
                Como para armazenar no asyncStorage nós convertemos para string,
                agora converteremos para objeto de volta.
                */   
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }

            setLoading(false)
        }
        loadStorage();
    },[])

    //Cadastrar usuário
    async function signUp(email, password, name) {
        setLoadingAuth(true)
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
            let uid = value.user.uid;
            const usersRef = ref(db, `users/${uid}`);

            await set(usersRef, {
                sale: 0,
                name: name
            })
            .then(() => {
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email
                };
                setUser(data);
                storageUser(data)
                setLoadingAuth(false)
            })
        })
        .catch((error) => {
            alert(error.code);
            setLoadingAuth(false)
        })
    }

    //Logar usuário
    async function signIn(email, password) {
        setLoadingAuth(true);
        await signInWithEmailAndPassword(auth, email, password)
        .then(async(value) => {
            let uid = value.user.uid;
            const usersRef = ref(db, `users/${uid}`);

            await onValue(usersRef, (snapshot) => {
                let data = {
                    uid: uid,
                    name: snapshot.val().name,
                    email: snapshot.val().email
                };
                setUser(data)
                storageUser(data)
                setLoadingAuth(false)
            }, {
                onlyOnce: true
            })
        })
        .catch((error) => {
            Alert.alert(error.code)
            setLoadingAuth(false)
        })
    }

    async function storageUser(data) {
        //Não podemos passar objetos para o asyncstorage, por isso convertemos.
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function SignOut() {
        await signOut(auth);
        await AsyncStorage.clear()
        .then(() => {
            setUser(null)
        })
    }
    return(
        //!! converte user para boleano.
        <AuthContext.Provider value={{signed: !!user, user, signUp, signIn,
        loading, SignOut, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

