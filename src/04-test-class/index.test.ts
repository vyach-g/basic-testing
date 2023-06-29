// Uncomment the code below and write your tests
import lodash from 'lodash';
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const balance = 1337;
    const account = getBankAccount(balance);

    expect(account.getBalance()).toBe(balance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const balance = 228;
    const withdrawAmount = 322;
    const account = getBankAccount(balance);

    expect(() => account.withdraw(withdrawAmount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const balance = 100;
    const transferAmount = 322;
    const accountFrom = getBankAccount(balance);
    const accountTo = getBankAccount(0);

    expect(() =>
      accountFrom.transfer(transferAmount, accountTo),
    ).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    const balance = 100;
    const transferAmount = 322;
    const accountFrom = getBankAccount(balance);
    const accountTo = accountFrom;

    expect(() => accountFrom.transfer(transferAmount, accountTo)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const balance = 322;
    const depositAmount = 100;
    const account = getBankAccount(balance);

    expect(account.deposit(depositAmount).getBalance()).toBe(
      balance + depositAmount,
    );
  });

  test('should withdraw money', () => {
    const balance = 322;
    const withdrawAmount = 100;
    const account = getBankAccount(balance);

    expect(account.withdraw(withdrawAmount).getBalance()).toBe(
      balance - withdrawAmount,
    );
  });

  test('should transfer money', () => {
    const balanceFrom = 322;
    const balanceTo = 0;
    const transferAmount = 100;
    const accountFrom = getBankAccount(balanceFrom);
    const accountTo = getBankAccount(balanceTo);

    expect(accountFrom.transfer(transferAmount, accountTo).getBalance()).toBe(
      balanceFrom - transferAmount,
    );
    expect(accountTo.getBalance()).toBe(balanceTo + transferAmount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const randomBalance = 100;
    const requestFailed = 1;
    const spy = jest.spyOn(lodash, 'random');
    spy
      .mockImplementationOnce(() => {
        return randomBalance;
      })
      .mockImplementationOnce(() => {
        return requestFailed;
      });

    const balance = 322;
    const account = getBankAccount(balance);

    const expected = expect.any(Number);
    await expect(account.fetchBalance()).resolves.toEqual(expected);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const randomBalance = 100;
    const requestFailed = 1;
    const spy = jest.spyOn(lodash, 'random');
    spy
      .mockImplementationOnce(() => {
        return randomBalance;
      })
      .mockImplementationOnce(() => {
        return requestFailed;
      });

    const balance = 322;
    const account = getBankAccount(balance);

    await account.synchronizeBalance();

    expect(account.getBalance()).toEqual(randomBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const randomBalance = 100;
    const requestFailed = 0;
    const spy = jest.spyOn(lodash, 'random');
    spy
      .mockImplementationOnce(() => {
        return randomBalance;
      })
      .mockImplementationOnce(() => {
        return requestFailed;
      });

    const balance = 322;
    const account = getBankAccount(balance);

    await expect(
      async () => await account.synchronizeBalance(),
    ).rejects.toThrow(SynchronizationFailedError);
  });
});
