// Uncomment the code below and write your tests
import path from 'path';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    jest.spyOn(global, 'setTimeout');

    const mockCb = jest.fn();
    const timeout = 100;
    doStuffByTimeout(mockCb, timeout);

    expect(setTimeout).toHaveBeenCalledWith(mockCb, timeout);
  });

  test('should call callback only after timeout', () => {
    const mockCb = jest.fn();
    const timeout = 100;
    doStuffByTimeout(mockCb, timeout);

    expect(mockCb).not.toBeCalled();
    jest.runAllTimers();
    expect(mockCb).toBeCalled();
    expect(mockCb).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    jest.spyOn(global, 'setInterval');
    const mockCb = jest.fn();
    const interval = 100;

    doStuffByInterval(mockCb, interval);
    expect(setInterval).toHaveBeenCalledWith(mockCb, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const mockCb = jest.fn();
    const interval = 100;
    doStuffByInterval(mockCb, interval);

    expect(mockCb).not.toBeCalled();

    for (let i = 0; i < 5; i++) {
      jest.runOnlyPendingTimers();
      expect(mockCb).toHaveBeenCalledTimes(i + 1);
    }
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    jest.spyOn(path, 'join');
    const pathToFile = 'pathToFile';
    await readFileAsynchronously(pathToFile);

    expect(path.join).toBeCalledWith(expect.anything(), pathToFile);
  });

  test('should return null if file does not exist', async () => {
    const wrongPath = 'wrongPath';
    await expect(readFileAsynchronously(wrongPath)).resolves.toBeNull();
  });

  test('should return file content if file exists', async () => {
    const rightPath = './mock.txt';
    await expect(readFileAsynchronously(rightPath)).resolves.toEqual('content');
  });
});
