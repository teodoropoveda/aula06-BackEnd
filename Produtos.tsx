export class Produto {
  constructor(
    private nome: string,
    private preco: number
  ) {}

  exibirInformacoes(): void {
    console.log(`Produto: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)}`);
  }
}