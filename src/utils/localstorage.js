export const saveInLocalStrorage = (username, itemToSave) => {
    localStorage.setItem(username, JSON.stringify(itemToSave))
}
export const getLocalStrorage = (username) => {
    return JSON.parse(localStorage.getItem(username))
}