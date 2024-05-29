export const saveInLocalStrorage = (username, itemToSave) => {
    localStorage.setItem(username, JSON.stringify(itemToSave))
}