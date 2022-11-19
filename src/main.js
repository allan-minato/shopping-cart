import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

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

const listOfProduct = async () => {
  addLoading();
  const productsList = await fetchProductsList('computador');
  removeLoading();
  productsList.forEach((product) => {
    products.appendChild(createProductElement(product));
  });
};

listOfProduct();
