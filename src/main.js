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

function addError() {
  const error = document.createElement('h2');
  h2.className = 'error';
  h2.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  products.appendChild(error);
}

function removeLoading() {
  document.querySelector('.loading').remove();
}

const listOfProduct = async () => {
  addLoading();
  try {
    const productsList = await fetchProductsList('computador');
    removeLoading();
    productsList.forEach((product) => {
      products.appendChild(createProductElement(product));
    });
  } catch (error) {
    const errorElement = document.createElement('h2');
    errorElement.className = 'error';
    errorElement.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    products.appendChild(errorElement);
  }
};

listOfProduct();
