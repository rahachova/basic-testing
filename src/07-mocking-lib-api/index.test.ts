import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('lodash', () => ({
  throttle: (fn: () => void) => fn,
}));

describe('throttledGetDataFromApi', () => {
  const mockResponse = { data: { userId: 1, id: 1, title: 'test title' } };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create instance with provided base url', async () => {
    const getMock = jest.fn().mockResolvedValue(mockResponse);
    mockedAxios.create.mockReturnValue({
      get: getMock,
    } as unknown as AxiosInstance);

    await throttledGetDataFromApi('/posts/1');

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const getMock = jest.fn().mockResolvedValue(mockResponse);
    mockedAxios.create.mockReturnValue({
      get: getMock,
    } as unknown as AxiosInstance);

    await throttledGetDataFromApi('/posts/2');

    expect(getMock).toHaveBeenCalledWith('/posts/2');
  });

  test('should return response data', async () => {
    const getMock = jest.fn().mockResolvedValue(mockResponse);
    mockedAxios.create.mockReturnValue({
      get: getMock,
    } as unknown as AxiosInstance);

    const result = await throttledGetDataFromApi('/posts/1');

    expect(result).toEqual(mockResponse.data);
  });
});
