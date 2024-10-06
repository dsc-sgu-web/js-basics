import "normalize.css";
import "./main.css";
import { Bank } from "./bank";
import { renderBank, subscribeToSubmitForm } from "./render";
import { loadBankFromLocalStorage, saveBankToLocalStorage } from "./storage";
import { setupBalanceLineChart } from "./balanceLineChart";

const bank = loadBankFromLocalStorage() ?? new Bank();

bank.addOnChangeEventListener(renderBank);
bank.addOnChangeEventListener(saveBankToLocalStorage);
subscribeToSubmitForm(bank);
setupBalanceLineChart(bank, "balance-history");

renderBank(bank);
