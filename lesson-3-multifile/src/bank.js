export function Bank() {
  this.transactions = [];
  this.onChangeEventListeners = [];

  this.addTransaction = function (amount) {
    const id =
      this.transactions.length === 0
        ? 1
        : Math.max(...this.transactions.map((t) => t.id)) + 1;
    this.transactions.push({ id, amount });

    this.onChange();
  };

  this.removeTransaction = function (id) {
    this.transactions = this.transactions.filter((t) => t.id !== id);
    this.onChange();
  };

  this.calculateBalance = function () {
    if (this.transactions.length === 0) {
      return 0;
    }
    return this.transactions.map((t) => t.amount).reduce((acc, v) => acc + v);
  };

  this.addOnChangeEventListener = function (listener) {
    this.onChangeEventListeners.push(listener);
  };

  this.onChange = function () {
    for (const onChange of this.onChangeEventListeners) {
      onChange(this);
    }
  };
}
