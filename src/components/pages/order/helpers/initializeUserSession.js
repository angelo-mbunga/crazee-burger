import { getLocalStrorage } from "../../../../utils/localstorage";
import { getUser } from "../../../../api/user";

const initializeMenu = async (username, setMenu) => { 
    const userOwnMenu = await getUser(username);
    setMenu(userOwnMenu.menu)
}
const initializeBasket = (username, setBasket) => { 
    const userOwnBasket = getLocalStrorage(username);
    if (userOwnBasket) {
        setBasket(userOwnBasket)
    }
}
export const initializeUserSession = async (username, setMenu, setBasket) => {
    await initializeMenu(username, setMenu),
    initializeBasket(username, setBasket)  
}
