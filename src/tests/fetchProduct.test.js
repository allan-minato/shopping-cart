import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se "FetchProduct" é uma função.', () => {
    expect(typeof fetchProduct).toBe('function')
  });
  it('Teste "FetchProduct" com o parâmetro "MLB1405519561".', () => {
    expect(fetchProduct('MLB1405519561')).not.toBe(undefined)
  });
});
