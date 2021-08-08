export const checkIfAdded = (productsArray, id) =>
  productsArray.some((product) => product.id === id);
