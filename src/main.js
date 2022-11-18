import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productsList = await fetchProductsList('computador');
const products = document.querySelector('.products');

productsList.forEach((product) => {
  products.appendChild(createProductElement(product));
});
