import React,  {createContext, useState} from "react";
import app from "../services/firebaseConnection";
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext({});

export default function AuthProvider ({children}) {
    const [user, setUser] = useState(null)
    const db = getDatabase(app)
    const auth = getAuth();

    //Cadastrar usuário
    async function signUp(email, password, name) {
        createUserWithEmailAndPassword(auth, email, password)
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
            })
        })
    }

    return(
        //!! converte user para boleano.
        <AuthContext.Provider value={{signed: !!user, user, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}

