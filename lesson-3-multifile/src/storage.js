import { Bank } from "./bank";

const TRANSACTIONS_KEY = "transactions";

export function saveBankToLocalStorage({ transactions }) {
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
}

export function loadBankFromLocalStorage() {
  const bank = new Bank();
  bank.transactions = JSON.parse(localStorage.getItem(TRANSACTIONS_KEY)) ?? [];
  return bank;
}
