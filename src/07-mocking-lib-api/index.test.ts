// Uncomment the code below and write your tests
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.useFakeTimers();

afterEach(() => {
  jest.runAllTimers();
});

const responseData = {
  value: 'mocked',
};

const mockResponse: Partial<AxiosResponse> = {
  data: responseData,
  status: 200,
  statusText: 'OK',
};

const baseURL = 'https://jsonplaceholder.typicode.com';

const relativePath = '/posts';

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const defaultAxiosCreate = axios.create;

    let instance: null | AxiosInstance = null;
    const spyCreate = jest.spyOn(axios, 'create');

    const mockGet = jest.fn();
    mockGet.mockResolvedValue(mockResponse as AxiosResponse);

    spyCreate.mockImplementation((arg) => {
      instance = defaultAxiosCreate(arg);
      instance.get = mockGet;
      return instance;
    });

    await throttledGetDataFromApi(relativePath);

    expect((instance as unknown as AxiosInstance).defaults.baseURL).toEqual(
      baseURL,
    );
  });

  test('should perform request to correct provided url', async () => {
    const defaultAxiosCreate = axios.create;

    let instance: null | AxiosInstance = null;
    const spyCreate = jest.spyOn(axios, 'create');

    const mockGet = jest.fn();
    mockGet.mockResolvedValue(mockResponse as AxiosResponse);

    spyCreate.mockImplementation((arg) => {
      instance = defaultAxiosCreate(arg);
      instance.get = mockGet;
      return instance;
    });

    await throttledGetDataFromApi(relativePath);

    expect(mockGet).toBeCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const defaultAxiosCreate = axios.create;

    let instance: null | AxiosInstance = null;
    const spyCreate = jest.spyOn(axios, 'create');

    const mockGet = jest.fn();
    mockGet.mockResolvedValue(mockResponse as AxiosResponse);

    spyCreate.mockImplementation((arg) => {
      instance = defaultAxiosCreate(arg);
      instance.get = mockGet;
      return instance;
    });

    await throttledGetDataFromApi(relativePath);

    await expect(await throttledGetDataFromApi(relativePath)).toEqual(
      responseData,
    );
  });
});
