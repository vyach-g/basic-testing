// Uncomment the code below and write your tests
import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const defaultAxiosCreate = axios.create;
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const relativePath = '/posts';

    let instance: null | AxiosInstance = null;

    const spyCreate = jest.spyOn(axios, 'create');
    spyCreate.mockImplementation((...args) => {
      instance = defaultAxiosCreate(...args);
      return instance;
    });

    throttledGetDataFromApi(relativePath);

    instance as unknown as AxiosInstance;

    expect((instance as unknown as AxiosInstance).defaults.baseURL).toEqual(
      baseURL,
    );

    //
    //
    //

    // // const spyCreate = jest.spyOn(axios, 'create');
    // const instanceOptions = { baseURL: 'https://jsonplaceholder.typicode.com' };
    // const relativePath = '/posts';

    // throttledGetDataFromApi(relativePath);

    // expect(spyCreate).toBeCalledWith(instanceOptions);
  });

  test('should perform request to correct provided url', async () => {
    // const defaultAxiosCreate = axios.create;
    // const relativePath = '/posts';
    // let instance: null | AxiosInstance = null;
    // const spyCreate = jest.spyOn(axios, 'create');
    // spyCreate.mockImplementation((...args) => {
    //   instance = defaultAxiosCreate(...args);
    //   // instance.
    //   expect('a').toEqual('b');
    //   return instance;
    // });
    // // throttledGetDataFromApi(relativePath);
    // console.log(
    //   'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    //   instance,
    // );
    // // const spyGet = jest.spyOn(instance as unknown as AxiosInstance, 'get');
    // await throttledGetDataFromApi(relativePath);
    // expect(spyGet).toBeCalled();
    // const defaultAxiosCreate = axios.create;
    // // const baseURL = 'https://jsonplaceholder.typicode.com';
    // const relativePath = '/posts';
    // let instance: null | AxiosInstance = null;
    // // let instanceGet: null | AxiosInstance['get'] = null;
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // let spyGet: any;
    // const spyCreate = jest.spyOn(axios, 'create');
    // spyCreate.mockImplementation((...args) => {
    //   instance = defaultAxiosCreate(...args);
    //   spyGet = jest.spyOn(instance as unknown as AxiosInstance, 'get');
    //   // instanceGet = instance.get; //
    //   return instance;
    // });
    // throttledGetDataFromApi(relativePath);
    // expect(spyGet).toBeCalledWith(null);
    // instance as unknown as AxiosInstance;
    // expect((instance as unknown as AxiosInstance).defaults.baseURL).toEqual(
    //   baseURL,
    // );
    // const defaultAxiosCreate = axios.create;
    // const relativePath = '/posts';
    // const spyCreate = jest.spyOn(axios, 'create');
    // spyCreate.mockImplementation((...args) => {
    //   const instance = defaultAxiosCreate(...args);
    //   const spyGet = jest.spyOn(instance, 'get');
    //   expect(spyGet).toBeCalledWith(null);
    //   return instance;
    // });
    // throttledGetDataFromApi(relativePath);
  });

  test('should return response data', async () => {
    // const defaultAxiosCreate = axios.create;
    // const relativePath = '/posts';
    // const spyCreate = jest.spyOn(axios, 'create');
    // spyCreate.mockImplementation((...args) => {
    //   const instance = defaultAxiosCreate(...args);
    //   const spyGet = jest.spyOn(instance, 'get');
    //   expect(spyGet).toBeCalledWith(relativePath);
    //   return instance;
    // });
    // throttledGetDataFromApi(relativePath);
  });
});
