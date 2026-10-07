export class Estudante {
  constructor(
    private _nome: string,
    private _nota1: number,
    private _nota2: number
  ) {
    this.validarNota(_nota1, "Nota 1");
    this.validarNota(_nota2, "Nota 2");
  }

  private validarNota(nota: number, campo: string): void {
    if (nota < 0 || nota > 10) {
      console.log(`Aviso: A ${campo} (${nota}) deve estar entre 0 e 10.`);
    }
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get nota1(): number {
    return this._nota1;
  }

  set nota1(valor: number) {
    this.validarNota(valor, "Nota 1");
    this._nota1 = valor;
  }

  get nota2(): number {
    return this._nota2;
  }

  set nota2(valor: number) {
    this.validarNota(valor, "Nota 2");
    this._nota2 = valor;
  }

  calcularMedia(): number {
    return (this._nota1 + this._nota2) / 2;
  }

  exibirInformacoes(): void {
    const media = this.calcularMedia();
    console.log(`Estudante: ${this._nome}`);
    console.log(`Nota 1: ${this._nota1} | Nota 2: ${this._nota2}`);
    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Situação: ${media >= 7 ? "Aprovado(a)" : "Reprovado(a)"}`);
    console.log("-----------------------------------");
  }
}
