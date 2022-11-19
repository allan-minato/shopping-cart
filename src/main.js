import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productsList = await fetchProductsList('computador');
const products = document.querySelector('.products');

function addLoading() {
  const h2 = document.createElement('h2');
  h2.className = 'loading';
  h2.innerHTML = 'carregando...';
  products.appendChild(h2);
}

function removeLoading() {
  document.querySelector('.loading').remove();
}
const listOfProduct = () => {
  addLoading();
  productsList.forEach((product) => {
    products.appendChild(createProductElement(product));
  });
  removeLoading();
};

listOfProduct();
