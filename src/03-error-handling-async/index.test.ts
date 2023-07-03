// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'test';
    await expect(resolveValue(value)).resolves.toBe(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const errMessage = 'test';

    expect(() => throwError(errMessage)).toThrow(Error);
    expect(() => throwError(errMessage)).toThrow(errMessage);
  });

  test('should throw error with default message if message is not provided', () => {
    const defaultErrMessage = 'Oops!';

    expect(() => throwError()).toThrow(Error);
    expect(() => throwError()).toThrow(defaultErrMessage);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const awesomeErrMessage = 'This is my awesome custom error!';

    expect(() => throwCustomError()).toThrow(MyAwesomeError);
    expect(() => throwCustomError()).toThrow(awesomeErrMessage);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    const awesomeErrMessage = 'This is my awesome custom error!';

    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
    await expect(rejectCustomError()).rejects.toThrow(awesomeErrMessage);
  });
});
