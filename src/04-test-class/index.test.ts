// Uncomment the code below and write your tests
import { InsufficientFundsError, TransferFailedError, getBankAccount } from '.';

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
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
