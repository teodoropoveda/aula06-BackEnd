export class ContaBancaria {
  private titular: string;
  private saldo: number;

  constructor();
  constructor(titular: string);
  constructor(titular: string, saldo: number);
  constructor(titular: string = "", saldo: number = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  public getTitular(): string {
    return this.titular;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public sacar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do saque deve ser maior que zero.");
    } else if (valor > this.saldo) {
      console.log(`Saldo insuficiente! Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
      console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
  }

  public depositar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser maior que zero.");
    } else {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
      console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
  }
}