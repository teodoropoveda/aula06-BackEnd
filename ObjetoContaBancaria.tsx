import { ContaBancaria } from "./ContaBancaria";

console.log("Objeto Conta Bancária");

const dadosDoUsuario = {
  titular: "Carlos Silva",
  valorDeposito: 500.00,
  valorSaque: 150.00
};

const minhaConta = new ContaBancaria(dadosDoUsuario.titular);

console.log("CONTA BANCÁRIA CRIADA");
console.log("Titular: " + minhaConta.getTitular());
console.log("Saldo inicial: R\$ " + minhaConta.getSaldo().toFixed(2));

console.log(`\nProcessando depósito de R$ ${dadosDoUsuario.valorDeposito.toFixed(2)}...`);
minhaConta.depositar(dadosDoUsuario.valorDeposito);

console.log(`\nProcessando saque de R$ ${dadosDoUsuario.valorSaque.toFixed(2)}...`);
minhaConta.sacar(dadosDoUsuario.valorSaque);

console.log("RESUMO");
console.log("Titular: " + minhaConta.getTitular());
console.log("Saldo final: R\$ " + minhaConta.getSaldo().toFixed(2));
