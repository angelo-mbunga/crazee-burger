import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothMenus = (idUser, menuUpdated) => {
    const path = doc(db, "users", idUser)
    const data = {
        username : idUser,
        menu : menuUpdated
    }
    setDoc(path, data)
}
