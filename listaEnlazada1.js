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
      
      if (this.buscar(dato) === -1) {
        
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
    }
  
    buscar(dato) {
      let indice = -1;
      let contador = 0;
      let actual = this.cabeza;
  
      
      while (actual !== null) {
        if (actual.dato === dato) {
          indice = contador;
          break;
        }
        contador++;
        actual = actual.siguiente;
      }
  
      return indice;
    }
  }