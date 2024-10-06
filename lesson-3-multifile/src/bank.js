export function Bank(onChange) {
  this.transactions = [];
  this.onChange = onChange;

  this.addTransaction = function (amount) {
    const id =
      this.transactions.length === 0
        ? 1
        : Math.max(...this.transactions.map((t) => t.id)) + 1;
    this.transactions.push({ id, amount });

    onChange(this);
  };

  this.removeTransaction = function (id) {
    this.transactions = this.transactions.filter((t) => t.id !== id);
    onChange(this);
  };

  this.calculateBalance = function () {
    if (this.transactions.length === 0) {
      return 0;
    }
    return this.transactions.map((t) => t.amount).reduce((acc, v) => acc + v);
  };
}
