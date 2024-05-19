export function formatPrice(priceToFormat) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return 0
  price = replaceFrenchCommaWithDot(price)

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}
export function ajustPrice(itemPrice) {
  return itemPrice.toFixed(1).concat("0");
}
export function truncate(string, length){
  if (string.length > length)
      return string.substring(0,length)+'...';
  else
      return string;
};
export const calculateAmoutToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {

    const menuProduct = menu.find((product) => product.id === basketProduct.id);

    // Dont add products when price is not a number
    if (isNaN(menuProduct.price)) { return total; }

    total += menuProduct.price * basketProduct.quantity;
    return total;

  }, 0);
}


