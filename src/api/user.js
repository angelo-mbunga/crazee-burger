import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"


export const login = async (idUser) => {
    const user = await getUser(idUser)
    if (user === undefined) {
        createUser(idUser)
    }
}

export const getUser = async (idUser) => {
    // Connect to a specific field in the database
    const docRef = doc(db, "users", idUser)
    const result = await getDoc(docRef)
    if (result.exists()) {
        const user = result.data()
        return user
    }
}
export const createUser = async (idUser) => {
    const path = doc(db, "users", idUser)
    const data = {
        username : idUser,
        menu : fakeMenu.LARGE
    }
    setDoc(path, data)
}