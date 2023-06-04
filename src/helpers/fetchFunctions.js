export const fetchProduct = async (idProduct) => {
  if (!idProduct) {
    throw new Error('ID não informado');
  }
  const url = `https://api.mercadolibre.com/items/${idProduct}`;
  const data = await fetch(url);
  const response = await data.json();
  return response;
};
console.log('https://api.mercadolibre.com/items/');
console.log(fetchProduct('MLB1405519561'));
export const fetchProductsList = async (product) => {
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const data = await fetch(url);
  const response = await data.json();
  return response.results;
};
