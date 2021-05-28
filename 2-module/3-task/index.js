let calculator = {
  read: function( v1, v2) {
    this.v1 = v1;
    this.v2 = v2;
  },
  sum: function() {
    return this.v1 + this.v2;
  },
  mul: function() {
    return this.v1 * this.v2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
