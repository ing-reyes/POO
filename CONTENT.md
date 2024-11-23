
---
# Clase 3

## Sección 1: Introducción a la POO

### ¿Qué es la Programación Orientada a Objetos?
La POO es un paradigma de programación que organiza el código en **clases** y **objetos** basados en cuatro principios fundamentales:
1. **Abstracción**: Ocultar detalles complejos y mostrar solo la funcionalidad necesaria.
2. **Encapsulamiento**: Agrupar datos y métodos relacionados dentro de una clase.
3. **Herencia**: Permitir que una clase derive de otra para reutilizar código.
4. **Polimorfismo**: Habilidad de usar un método en diferentes contextos según el tipo de objeto.

### Ejemplo Básico:
```typescript
class Persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const persona = new Persona("Juan");
persona.saludar(); // Output: Hola, soy Juan
```

---

## Sección 2: POO en TypeScript

### Ventajas de TypeScript para la POO
- **Tipado Estático**: Detecta errores en tiempo de compilación.
- **Clases** e **Interfaces**: Implementa abstracción, herencia y polimorfismo.
- **Modificadores de Acceso**: Define `public`, `private`, y `protected` para mayor control.

### Ejemplo:
```typescript
class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    emitirSonido(): void {
        console.log("Sonido genérico");
    }
}
```

---

## Sección 3: Clases y Objetos

### Clases
- Una clase define una estructura con propiedades y métodos.
- Usa un **constructor** para inicializar objetos.

### Ejemplo:
```typescript
class Automovil {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    describir(): void {
        console.log(`Este auto es un ${this.marca} modelo ${this.modelo}`);
    }
}

const auto = new Automovil("Toyota", "Corolla");
auto.describir(); // Output: Este auto es un Toyota modelo Corolla
```

---

## Sección 4: Encapsulamiento

### Modificadores de Acceso
- **`public`**: Accesible desde cualquier lugar.
- **`private`**: Accesible solo dentro de la clase.
- **`protected`**: Accesible dentro de la clase y sus derivadas.

### Getters y Setters
Controlan el acceso a propiedades.

### Ejemplo:
```typescript
class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    get consultarSaldo(): number {
        return this.saldo;
    }

    set depositar(monto: number) {
        if (monto > 0) this.saldo += monto;
    }
}

const cuenta = new CuentaBancaria(1000);
console.log(cuenta.consultarSaldo); // Output: 1000
cuenta.depositar = 500;
console.log(cuenta.consultarSaldo); // Output: 1500
```

---

## Sección 5: Herencia

### Concepto
Una clase puede heredar de otra para compartir y extender funcionalidad.

### Ejemplo:
```typescript
class Vehiculo {
    ruedas: number;

    constructor(ruedas: number) {
        this.ruedas = ruedas;
    }

    mover(): void {
        console.log("El vehículo se está moviendo");
    }
}

class Bicicleta extends Vehiculo {
    constructor() {
        super(2);
    }

    pedalear(): void {
        console.log("Pedaleando...");
    }
}

const bici = new Bicicleta();
bici.mover(); // Output: El vehículo se está moviendo
bici.pedalear(); // Output: Pedaleando...
```

---

## Sección 6: Polimorfismo

### Concepto
Permite usar una misma interfaz o método de diferentes maneras.

### Ejemplo:
```typescript
class Animal {
    emitirSonido(): void {
        console.log("Sonido genérico");
    }
}

class Perro extends Animal {
    override emitirSonido(): void {
        console.log("Guau");
    }
}

class Gato extends Animal {
    override emitirSonido(): void {
        console.log("Miau");
    }
}

const animales: Animal[] = [new Animal(), new Perro(), new Gato()];
animales.forEach(animal => animal.emitirSonido());
// Output:
// Sonido genérico
// Guau
// Miau
```

---

## Sección 7: Abstracción

### Clases Abstractas
Son plantillas para otras clases. No se pueden instanciar directamente.

### Ejemplo:
```typescript
abstract class Figura {
    abstract area(): number;
}

class Rectangulo extends Figura {
    constructor(private base: number, private altura: number) {
        super();
    }

    area(): number {
        return this.base * this.altura;
    }
}

const rectangulo = new Rectangulo(10, 5);
console.log(rectangulo.area()); // Output: 50
```

---

## Sección 8: Composición vs Herencia

### Concepto
- **Herencia**: Reutiliza comportamientos por medio de clases base.
- **Composición**: Combina comportamientos a través de relaciones "tiene un".

### Ejemplo:
```typescript
class Motor {
    encender(): void {
        console.log("Motor encendido");
    }
}

class Coche {
    private motor: Motor;

    constructor() {
        this.motor = new Motor();
    }

    encender(): void {
        this.motor.encender();
        console.log("Coche listo para conducir");
    }
}

const coche = new Coche();
coche.encender();
// Output:
// Motor encendido
// Coche listo para conducir
```

---

## Sección 9: Métodos y Propiedades Estáticas

### Concepto
Los métodos y propiedades `static` pertenecen a la clase, no a las instancias.

### Ejemplo:
```typescript
class Matematica {
    static PI = 3.1416;

    static calcularAreaCirculo(radio: number): number {
        return this.PI * radio ** 2;
    }
}

console.log(Matematica.calcularAreaCirculo(5)); // Output: 78.54
```

---

## Sección 10: Clases Genéricas

### Concepto
Permiten trabajar con tipos dinámicos pero seguros.

### Ejemplo:
```typescript
class Pila<T> {
    private elementos: T[] = [];

    push(elemento: T): void {
        this.elementos.push(elemento);
    }

    pop(): T | undefined {
        return this.elementos.pop();
    }
}

const pilaNumeros = new Pila<number>();
pilaNumeros.push(1);
pilaNumeros.push(2);
console.log(pilaNumeros.pop()); // Output: 2
```

---
