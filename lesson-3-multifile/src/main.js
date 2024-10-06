import "normalize.css";
import "./main.css";
import { Bank } from "./bank";
import { renderBank, subscribeToSubmitForm } from "./render";
import { loadBankFromLocalStorage, saveBankToLocalStorage } from "./storage";

const bank = loadBankFromLocalStorage() ?? new Bank();

bank.addOnChangeEventListener(renderBank);
bank.addOnChangeEventListener(saveBankToLocalStorage);
subscribeToSubmitForm(bank);

renderBank(bank);
