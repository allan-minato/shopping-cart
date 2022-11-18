import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await (fetchProductsList('computador'));
    expect(fetch).toHaveBeenLastCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it('retorno da função fetchProductsList é uma estrutura igual ao objeto computadorSearch', async () => {
    const expected = await fetchProductsList('computador');
    expect(expected).toEqual(computadorSearch);
  });

  it('sem argumento, fetchProductsList retorna um erro', async () => {
    const expectedError = new Error("Termo de busca não informado");
    await expect(fetchProductsList('')).rejects.toThrow(expectedError);
  })

  // it('...', () => {
  // });
});
