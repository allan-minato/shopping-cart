export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (product) => {
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const data = await fetch(url);
  const response = await data.json();
  return response.results;
};
