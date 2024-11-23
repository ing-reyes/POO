
---

# Ejercicios: Programación Orientada a Objetos en TypeScript

## **Sección 1: Introducción a la POO**

1. Define los cuatro principios de la POO (Abstracción, Encapsulamiento, Herencia y Polimorfismo) y da un ejemplo teórico para cada uno.
2. Investiga cómo se aplica la abstracción en un caso real, como en una aplicación de banco. Escribe tus conclusiones.
3. Diseña una clase llamada `Persona` con las propiedades `nombre` y `edad`. Incluye un método `saludar`.
4. Explica con tus palabras qué diferencia hay entre un paradigma de programación orientado a objetos y uno funcional.
5. Crea un diagrama sencillo de clases para un sistema de gestión de estudiantes, incluyendo atributos y métodos.
6. Define un problema que podría ser solucionado con herencia y explica por qué.
7. Corrige el siguiente código y haz que funcione correctamente:
    ```typescript
    class Vehiculo {
        ruedas;
        constructor(numeroDeRuedas) {
            this.ruedas = numeroDeRuedas;
        }
    }

    const coche = new Vehiculo(4);
    console.log(coche.ruedas);
    ```
8. Explica qué hace un constructor en una clase y da un ejemplo simple.
9. ¿Por qué es útil agrupar atributos y métodos relacionados en una misma clase?
10. Implementa una clase básica que represente un producto, con atributos como `nombre` y `precio`.

---

## **Sección 2: POO en TypeScript**

1. Escribe una clase `Animal` con un atributo `nombre` y un método `emitirSonido`. Crea un objeto de la clase y llámalo.
2. Corrige el siguiente código:
    ```typescript
    class Usuario {
        email: string;

        constructor(mail) {
            this.email = mail;
        }
    }

    const usuario = new Usuario("correo@ejemplo.com");
    console.log(usuario.email);
    ```
3. Diseña una clase `Libro` que permita mostrar el título y autor de un libro.
4. Describe tres diferencias entre el uso de clases en JavaScript y TypeScript.
5. Implementa una clase `Empleado` que reciba un `nombre` y `salario` como parámetros. Agrega un método que calcule un bono del 10%.
6. Explica qué son los modificadores de acceso (`public`, `private`, `protected`) y crea un ejemplo simple.
7. Escribe un programa que implemente una clase `Coche` y permita modificar su color después de ser creado.
8. Corrige los errores en el siguiente código:
    ```typescript
    class Producto {
        constructor(publico precio: number) {}
    }

    const producto = new Producto(20);
    console.log(producto.precio);
    ```
9. Crea una clase `Pelicula` que incluya un método para mostrar su descripción.
10. ¿Qué sucede si defines una clase sin usar el modificador `export` en TypeScript?

---

## **Sección 3: Clases y Objetos**

1. Implementa una clase `Persona` con propiedades `nombre`, `edad` y `profesión`. Agrega un método que retorne una presentación.
2. Crea una clase `Vehiculo` con métodos `acelerar` y `frenar`. Impleméntala con un ejemplo de un coche.
3. Escribe un programa que cree dos objetos diferentes a partir de una misma clase. ¿Qué sucede si modificas una propiedad de uno?
4. Diseña una clase `Factura` con atributos como `cliente` y `montoTotal`. Agrega un método para calcular impuestos.
5. Corrige los errores en este código:
    ```typescript
    class Cliente {
        nombre: string;
        constructor(name) {
            this.nombre = name;
        }
    }

    const cliente = Cliente("María");
    console.log(cliente.nombre);
    ```
6. Explica qué es un objeto en términos de POO y cómo se relaciona con una clase.
7. Escribe una clase `Producto` que incluya un método para aplicar un descuento sobre su precio.
8. Implementa una clase `Reserva` que tenga atributos como `nombreCliente` y `fechaReserva`. Agrega un método para imprimir los detalles.
9. Diseña una clase `CuentaBancaria` con métodos `depositar` y `retirar`, y prueba su funcionalidad.
10. Crea una clase `Mascota` que permita definir `nombre` y `tipo`. Incluye un método que haga que la mascota emita un sonido.

---

## **Sección 4: Encapsulamiento**

1. Implementa una clase `Banco` con un atributo privado `saldo`. Incluye métodos para consultar y modificar el saldo.
2. Corrige los errores en este código:
    ```typescript
    class Usuario {
        private password;
        
        constructor(password: string) {
            password = password;
        }

        validarPassword(pwd: string): boolean {
            return password === pwd;
        }
    }
    ```
3. Diseña una clase `Producto` con propiedades privadas y métodos para leer y escribir estas propiedades.
4. Explica la diferencia entre `private` y `protected` con un ejemplo.
5. Implementa una clase `Empleado` con un atributo `salario` privado y un método para calcular un bono basado en este atributo.
6. Diseña una clase `CuentaBancaria` que use `getters` y `setters` para manejar el saldo.
7. ¿Qué sucede si intentas acceder directamente a un atributo privado desde fuera de la clase? Da un ejemplo.
8. Escribe un programa que simule un sistema de gestión de usuarios con contraseñas protegidas.
9. Implementa un ejemplo donde una propiedad privada se use para almacenar un valor calculado.
10. Corrige el siguiente código:
    ```typescript
    class Carro {
        private _color;

        get color() {
            return this._color;
        }

        set color(c) {
            this.color = c;
        }
    }
    ```

---


---

## **Sección 5: Herencia**

1. Implementa una clase `Vehiculo` con métodos `encender` y `apagar`. Luego, crea una clase hija `Coche` que agregue un método `tocarBocina`.
2. Diseña una jerarquía de clases para representar animales: `Animal`, `Mamifero` y `Ave`. Implementa al menos un método único en cada clase.
3. Corrige los errores del siguiente código:
    ```typescript
    class Persona {
        nombre: string;
        constructor(nombre: string) {
            this.nombre = nombre;
        }
    }

    class Empleado extends Persona {
        constructor(sueldo: number) {
            super();
            this.sueldo = sueldo;
        }
    }
    ```
4. Implementa una clase base `Figura` con un método abstracto `calcularArea`. Crea clases hijas `Rectangulo` y `Circulo` que implementen dicho método.
5. Diseña un sistema para una tienda en línea con clases `Producto`, `Electrodomestico` y `Ropa`. Usa herencia para compartir atributos comunes.
6. Explica cómo la herencia puede reducir la redundancia en un sistema. Crea un ejemplo simple.
7. Escribe un programa que implemente una clase `Instrumento` con un método `tocar`. Luego, crea clases hijas como `Guitarra` y `Piano` que sobrescriban el método.
8. Corrige este código para que utilice correctamente `super`:
    ```typescript
    class Animal {
        constructor(nombre: string) {
            this.nombre = nombre;
        }
    }

    class Perro extends Animal {
        constructor() {
            console.log("Creando un perro");
        }
    }
    ```
9. Implementa una jerarquía de clases para un sistema de transporte, incluyendo clases como `Vehiculo`, `Bicicleta` y `Avion`.
10. ¿Qué sucede si una clase hija no llama al constructor de la clase base? Explica con un ejemplo.

---

## **Sección 6: Polimorfismo**

1. Crea una clase base `Empleado` con un método `calcularSalario`. Sobrescribe el método en las clases `Gerente` y `Operario`.
2. Diseña un sistema de pago con una clase `Pago` y clases derivadas como `PagoEfectivo` y `PagoTarjeta`. Implementa métodos polimórficos.
3. Explica qué sucede si olvidas usar la palabra clave `override` al sobrescribir un método en TypeScript.
4. Corrige el siguiente código:
    ```typescript
    class Animal {
        emitirSonido(): void {
            console.log("Sonido genérico");
        }
    }

    class Perro extends Animal {
        emitirSonido(): void {
            console.log("Guau");
        }

    const perro = new Perro();
    perro.emitirSonido();
    ```
5. Implementa un ejemplo de polimorfismo con una clase `Figura` y sus clases derivadas `Cuadrado` y `Triangulo`.
6. Diseña un sistema de vehículos donde todas las clases hijas (e.g., `Auto`, `Bicicleta`) sobrescriban un método `mover`.
7. Explica cómo se relaciona el polimorfismo con la abstracción en TypeScript.
8. Implementa un ejemplo donde un array de objetos de diferentes tipos (usando polimorfismo) llame a un método común.
9. Escribe un programa que use polimorfismo para calcular áreas de diferentes figuras geométricas.
10. Diseña un sistema de gestión de empleados que utilice polimorfismo para calcular diferentes bonificaciones según el tipo de empleado.

---

## **Sección 7: Abstracción**

1. Implementa una clase abstracta `Figura` con métodos abstractos para calcular el área y perímetro. Crea clases concretas como `Rectangulo` y `Circulo`.
2. Diseña un sistema de pago con una clase abstracta `Pago` y clases derivadas `PagoEfectivo` y `PagoTarjeta`.
3. Corrige el siguiente código:
    ```typescript
    abstract class Animal {
        nombre: string;

        constructor(nombre: string) {
            this.nombre = nombre;
        }
    }

    const perro = new Animal("Rex");
    console.log(perro.nombre);
    ```
4. Explica por qué las clases abstractas no pueden ser instanciadas.
5. Diseña un sistema de gestión de inventario con una clase abstracta `Producto` y clases concretas como `Ropa` y `Electrodomestico`.
6. Implementa una jerarquía de figuras geométricas con clases abstractas para los métodos `calcularArea` y `calcularPerimetro`.
7. Escribe un programa que utilice abstracción para modelar vehículos de diferentes tipos (e.g., `Avion`, `Barco`).
8. Explica la diferencia entre clases abstractas e interfaces en TypeScript.
9. Diseña una clase abstracta `Empleado` con un método `calcularSalario` que sea implementado por clases hijas.
10. ¿Qué sucede si no implementas un método abstracto en una clase hija? Explica con un ejemplo.

---

## **Sección 8: Composición vs Herencia**

1. Explica con tus palabras cuándo deberías usar composición en lugar de herencia.
2. Diseña un sistema de `Automovil` que utilice composición para incluir un `Motor`.
3. Corrige los errores en este código:
    ```typescript
    class Motor {
        encender(): void {
            console.log("Motor encendido");
        }
    }

    class Vehiculo extends Motor {
        manejar(): void {
            this.encender();
            console.log("Conduciendo...");
        }
    }

    const coche = new Vehiculo();
    coche.manejar();
    ```
4. Implementa un ejemplo de composición donde una clase `Casa` tenga un objeto `Puerta` como propiedad.
5. Explica por qué la composición puede ser más flexible que la herencia.
6. Diseña un sistema de gestión de pedidos donde la clase `Pedido` utilice composición para incluir objetos `Producto`.
7. Implementa un sistema de organización empresarial con clases `Empleado` y `Departamento`, usando composición.
8. Crea un ejemplo de herencia que sería mejor modelado con composición.
9. Diseña una clase `Computadora` que use composición para incluir un objeto `Procesador`.
10. Escribe un programa que use tanto herencia como composición para modelar un zoológico.

---

## **Sección 9: Métodos y Propiedades Estáticas**

1. Implementa una clase `Matematica` con un método estático para calcular el área de un círculo.
2. Diseña una clase `Contador` con una propiedad estática que cuente cuántos objetos han sido creados.
3. Corrige el siguiente código:
    ```typescript
    class Utils {
        static PI = 3.1416;
        
        calcularArea(radio: number): number {
            return this.PI * radio ** 2;
        }
    }

    console.log(Utils.calcularArea(5));
    ```
4. Explica por qué las propiedades estáticas no necesitan una instancia de la clase para ser utilizadas.
5. Diseña un sistema de gestión de usuarios con una clase `Usuario` que incluya un contador de usuarios creados.
6. Implementa un método estático en una clase `Convertidor` para convertir temperaturas entre Celsius y Fahrenheit.
7. Crea un programa que use métodos estáticos para operaciones matemáticas comunes.
8. ¿Qué sucede si intentas acceder a una propiedad estática usando una instancia? Explica con un ejemplo.
9. Diseña una clase `Configuracion` que use propiedades estáticas para almacenar valores globales.
10. Implementa una clase `GeneradorID` que utilice un método estático para generar identificadores únicos.

---

## **Sección 10: Clases Genéricas**

1. Implementa una clase genérica `Caja` que permita almacenar objetos de cualquier tipo.
2. Diseña una clase genérica `Lista` que incluya métodos para agregar y eliminar elementos.
3. Corrige los errores del siguiente código:
    ```typescript
    class Almacen<T> {
        items: T[];

        constructor() {
            this.items = [];
        }

        agregarItem(item): void {
            this.items.push(item);
        }
    }

    const almacen = new Almacen<string>();
    almacen.agregarItem(123);
    ```
4. Explica cómo las clases genéricas mejoran la reutilización de código.
5. Diseña una clase genérica `Pila` que incluya métodos para `push` y `pop`.
6. Implementa una clase genérica `Par` que almacene dos valores de cualquier tipo.
7. Crea un sistema de inventario que use una clase genérica para representar diferentes tipos de productos.
8. Explica la diferencia entre clases genéricas e interfaces genéricas.
9. Diseña una clase genérica `Cola` que permita agregar y retirar elementos en orden.
10. Implementa una clase genérica `Mapa` que almacene pares clave-valor.

---

Espero que estos ejercicios sean útiles para tu curso. Si necesitas algo más, ¡estoy aquí para ayudarte! 😊