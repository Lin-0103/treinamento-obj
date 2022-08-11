class Carro {
  constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
  }
}

document.getElementById('btn').addEventListener('click', function car() {
  const marca = document.getElementById('marca').value
  const modelo = document.getElementById('model').value

  let carro = new Carro(marca, modelo)
  console.log(carro)
  alert('A sua marca é: '  + carro.marca + 'e o modelo é:' + carro.modelo)

})

