const bank = {
  transactions: [],

  addTransaction(amount) {
    const id = Math.max(this.transactions.map((t) => t.id)) + 1;
    this.transactions.push({ id, amount });
    this.render();
  },

  removeTransaction(id) {
    this.transactions = this.transactions.filter((t) => t.id !== id);
    this.render();
  },

  calculateBalance() {
    if (this.transactions.length === 0) {
      return 0;
    }
    return this.transactions.map((t) => t.amount).reduce((acc, v) => acc + v);
  },

  render() {
    const expensesUlElement = document.querySelector("#expenses > ul");
    expensesUlElement.innerHTML = "";

    const revenuesUlElement = document.querySelector("#revenues > ul");
    revenuesUlElement.innerHTML = "";

    this.transactions.forEach((t) => {
      const el = document.createElement("li");
      el.className = t.amount >= 0 ? "transaction green" : "transaction red";
      el.innerText = (t.amount >= 0 ? "+" : "") + t.amount + "₽";

      if (t.amount >= 0) {
        expensesUlElement.append(el);
      } else {
        revenuesUlElement.append(el);
      }

      el.addEventListener("click", () => this.removeTransaction(t.id));
    });

    const balance = this.calculateBalance();

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = `${balance}₽`;

    if (balance > 0) {
      balanceElement.className = "balance green";
    } else if (balance < 0) {
      balanceElement.className = "balance red";
    } else {
      balanceElement.className = "balance";
    }
  },
};

const expenseForm = document.getElementById("add-expense-form");
const expenseInput = document.querySelector("#add-expense-form > input");

const revenueForm = document.getElementById("add-revenue-form");
const revenueInput = document.querySelector("#add-revenue-form > input");

const onSubmitForm = (transactionType) => (e) => {
  e.preventDefault();

  let coeff;
  let value;

  if (transactionType === "expense") {
    coeff = 1;
    value = expenseInput.value;
  } else if (transactionType === "revenue") {
    coeff = -1;
    value = revenueInput.value;
  } else {
    throw new Error("transactionType must be 'expense' or 'revenue'");
  }

  const amount = parseFloat(value);
  if (isNaN(amount)) {
    alert("Значение должно быть числом");
    return;
  }

  bank.addTransaction(Math.abs(amount) * coeff);

  if (transactionType === "expense") {
    expenseInput.value = "";
  } else {
    revenueInput.value = "";
  }
};

expenseForm.addEventListener("submit", onSubmitForm("expense"));
revenueForm.addEventListener("submit", onSubmitForm("revenue"));
