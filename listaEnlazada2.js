class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
    }
  
    insertarAlFinal(dato) {
      const nuevoNodo = new Nodo(dato);
  
      if (this.cabeza === null) {
        this.cabeza = nuevoNodo;
      } else {
        let actual = this.cabeza;
  
        while (actual.siguiente !== null) {
          actual = actual.siguiente;
        }
  
        actual.siguiente = nuevoNodo;
      }
    }
  
    mostrarNodosSuperiores(valor) {
      let actual = this.cabeza;
  
      while (actual !== null) {
        if (actual.dato > valor) {
          console.log(actual.dato);
        }
  
        actual = actual.siguiente;
      }
    }
  }
  
  function crearListaAleatoria(numNodos, valorMaximo) {
    const lista = new ListaEnlazada();
  
    for (let i = 0; i < numNodos; i++) {
      const dato = Math.floor(Math.random() * (valorMaximo + 1));
      lista.insertarAlFinal(dato);
    }
  
    return lista;
  }
  
  const lista1 = crearListaAleatoria(10, 100);
  const lista2 = crearListaAleatoria(8, 50);
  
  const valorDeterminado = 70;
  console.log('Nodos de lista1 que superan el valor determinado:');
  lista1.mostrarNodosSuperiores(valorDeterminado);
  console.log('Nodos de lista2 que superan el valor determinado:');
  lista2.mostrarNodosSuperiores(valorDeterminado);