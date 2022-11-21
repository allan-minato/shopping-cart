import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';

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

products.addEventListener('click', async (param) => {
  const cartProducts = document.querySelector('.cart__products');
  const id = param.target.parentNode.firstChild.innerText;
  const itemData = await fetchProduct(id);
  const productCart = createCartProductElement(itemData);
  cartProducts.appendChild(productCart);
  saveCartID(id);
});

function reloadSavedCartProducts() {
  const savedIds = getSavedCartIDs();
  Promise.all(
    savedIds.map(async (id) => {
      const productDetails = await fetchProduct(id);
      const cartProductItem = createCartProductElement(productDetails);
      const cartProducts = document.querySelector('.cart__products');
      cartProducts.appendChild(cartProductItem);
    }),
  );
}

if (localStorage.cartProducts !== undefined && localStorage.cartProducts.length > 0) {
  reloadSavedCartProducts();
}

listOfProduct();
