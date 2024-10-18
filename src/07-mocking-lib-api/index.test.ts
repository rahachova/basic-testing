// import axios from 'axios';
// import { throttle } from 'lodash';
import { throttledGetDataFromApi, THROTTLE_TIME } from './index';

jest.mock('lodash', () => {
  return {
    __esModule: true,
    throttle: jest.fn((value) => {
      return value;
    }),
  };
});

jest.mock('axios', () => {
  return {
    __esModule: true,
    create: jest.fn((value) => {
      return {
        get: jest.fn(),
      };
    }),
  };
});

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    // Write your test here
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
  });

  test('should return response data', async () => {
    // Write your test here
  });
});
