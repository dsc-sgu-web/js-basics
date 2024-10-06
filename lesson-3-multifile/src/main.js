import "normalize.css";
import "./main.css";
import { Bank } from "./bank";
import { onBankChange, subscribeToSubmitForm } from "./render";

const bank = new Bank(onBankChange);
subscribeToSubmitForm(bank);
