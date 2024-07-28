import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"


export const login = async (idUser) => {
    const user = await getUser(idUser)
    if (user === undefined) {
        return await createUser(idUser)
    }
    return user
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
    const userToCreate = {
        username : idUser,
        menu : fakeMenu.MEDIUM
    }
    await setDoc(path, userToCreate)
    return userToCreate
}