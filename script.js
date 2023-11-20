// Definindo a classe do contador de energia
class ContadorEnergia {
    constructor() {
      this.consumoEnergia = 0;
    }
  
    // Método para incrementar o consumo de energia
    incrementar() {
      this.consumoEnergia++;
      this.mostrarConsumoEnergia();
    }
  
    // Método para decrementar o consumo de energia
    decrementar() {
      if (this.consumoEnergia > 0) {
        this.consumoEnergia--;
        this.mostrarConsumoEnergia();
      } else {
        console.log("O consumo de energia não pode ser negativo");
      }
    }
  
    // Método para mostrar o consumo de energia atual
    mostrarConsumoEnergia() {
      console.log(`Consumo de energia atual: ${this.consumoEnergia}`);
    }
  }
  
  // Criando uma instância do contador de energia
  let contador = new ContadorEnergia();
  
  // Incrementando o consumo de energia
  contador.incrementar(); // Consumo de energia atual: 1
  contador.incrementar(); // Consumo de energia atual: 2
  
  // Decrementando o consumo de energia
  contador.decrementar(); // Consumo de energia atual: 1
  contador.decrementar(); // Consumo de energia atual: 0
  contador.decrementar(); // O consumo de energia não pode ser negativo