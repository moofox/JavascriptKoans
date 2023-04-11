
describe('9-DIY.js', () => {
  // Por si no sabes que significa DIY es "Do it yourself", que es la forma
  // moderna de decir: - Haz lo tu. ¡BRO!
  // Pues a eso vamos, el primero lo hago y tú rellenas las expectaciones,
  // pero luego yo lleno las expectaciones y tu creas el código.
  it('crea una función que nos diga si un número es par', () => {
    // Y pensarás: - Eso es trampa, ¡está en el fichero anterior!.
    // Mi respuesta: - LTP (Learn to play), BRO! xD
    // Escribe tu código aquí.
    let esPar = function(unNumero) {
      let esDivisiblePorDos = (unNumero % 2 === 0)

      return esDivisiblePorDos
    }

    expect(esPar(1)).toBe(false)
    expect(esPar(22)).toBe(true)
    expect(esPar(333)).toBe(false)
    expect(esPar(1234)).toBe(true)
  })
  // ¡¡¡A PROGRAMAR!!!
  it('crea una función que nos diga si un número es impar', () => {
    // Fácil, ¿No?
    // Escribe tu código aquí.
  let esImpar = function(unNumero) {
    let esDivisiblePorDos = (unNumero % 2 === 0)
  }

    expect(esImpar(1)).toBe(undefined )
    expect(esImpar(22)).toBe(undefined)
    expect(esImpar(333)).toBe(undefined)
    expect(esImpar(1234)).toBe(undefined)
  })
  // ¡WOW! ^^
  it('crea una función que nos diga si dos números son iguales', () => {
    // Escribe tu código aquí.
  let sonIguales = function(unNumero, otroNumero) { 
    return (unNumero === otroNumero)
  }

    expect(sonIguales(1, 1)).toBe(true)
    expect(sonIguales(22, 333)).toBe(false)
    expect(sonIguales(333.0, 333)).toBe(true)
    expect(sonIguales(1234, 4321)).toBe(false)
  })

  it('crea una función que sume tres número', () => {
    // Escribe tu código aquí.
    let suma = function(unNumero, otroNumero, masOtro) {
      return (unNumero + otroNumero + masOtro)
    }

    expect(suma(1, 1, 1)).toBe(3)
    expect(suma(3, 4, 5)).toBe(12)
    expect(suma(89, 32, 56)).toBe(177)
    // Lee atentamente el error, puede que no sea problema de tu código.
    expect(suma(47847343673, 23412314123421, 26897712)).toBe(23460188364806)
    // Ups... parece que me equivoque en la más difícil, ¿Puedes arreglarlo? :)
  })

  it('crea una función que nos diga que ya sabemos programar', () => {
    // Escribe tu código aquí.
    let miTestDimeQuienEsElMejorCoder = function() {
      return 'ya sabemos programar'
    }         
                     
    // Trailer del siguiente fichero.
    expect(miTestDimeQuienEsElMejorCoder()).toBe('ya sabemos programar' )
  })
  // ¡Ya lo tenemos! En 9 ficheros y ya hacemos programas. Pues imaginate en 18
  // ficheros o en 100 o en 1000... xDD
})
