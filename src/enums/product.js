export const EMPTY_PRODUCT = Object.freeze({
    id : "",
    imageSource : "",
    title : "",
    price : "",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false
})
export const defaultImage = "/src/assets/img/coming-soon.png";
export const IMAGE_NO_STOCK = "/src/assets/img/stock-epuise.png";
export const BASKET_MESSAGE = {
    EMPTY : 'Votre panier est vide.',
    LOADING : 'Chargement ...'
}