
# Enunciado del Ejercicio: Implementación de un CRUD para Productos
---

En este ejercicio, desarrollarás un sistema para gestionar productos de una empresa utilizando TypeScript. El objetivo es implementar un **servicio** y un **controlador** siguiendo las mejores prácticas de programación orientada a objetos, manteniendo el código tipado, ordenado y limpio.

## Requisitos del ejercicio:

### Propiedades del Producto:
Cada producto gestionado debe tener las siguientes propiedades encapsuladas en un tipo llamado `ProductEntity`:
- `id` (único, tipo string)
- `name` (nombre del producto, tipo string)
- `description?` (descripción del producto, tipo string. Debe ser opcional)
- `price` (precio, tipo número)
- `stock` (cantidad en inventario, tipo número)
- `isActive` (indica si el producto está activo, tipo booleano "por defecto en true")
- `photo?` (foto del producto, tipo string. La foto debe ser opcional)
- `createdAt` (fecha de creación, tipo Date)
- `updatedAt` (fecha de última actualización, tipo Date)

### Servicio (`ProductsService`):
Crea una clase llamada `ProductsService` que permita realizar las operaciones de un CRUD para los productos. Todos los métodos deben ser `async` para simular acceso a una base de datos. Implementa los siguientes métodos:

1. `create(product: CreateProduct): Promise<ProductEntity>`  
   - Agrega un nuevo producto y retorna el producto creado.

2. `findAll(): Promise<ProductEntity[]>`  
   - Retorna una lista de todos los productos.

3. `findOne(id: string): Promise<ProductEntity>`  
   - Busca un producto por su `id` y retorna el producto. En este ejercicio, asume que siempre se encuentra un producto (no retorna `null`).

4. `update(id: string, changes: ProductUpdate): Promise<ProductEntity>`  
   - Actualiza las propiedades de un producto existente. El tipo `ProductUpdate` debe incluir solo las propiedades que pueden modificarse.

5. `remove(id: string): Promise<boolean>`  
   - Elimina un producto por su `id` y retorna un valor booleano indicando si la operación fue exitosa.

### Controlador (`ProductsController`):
Crea una clase llamada `ProductsController` que permita acceder a los métodos del servicio.  
- Inyecta la dependencia de `ProductsService` en el controlador.  
- Implementa métodos para manejar las operaciones del CRUD (crear, obtener, actualizar y eliminar productos) a través del controlador.  
- Asegúrate de delegar la lógica del negocio al servicio.  

### Consideraciones adicionales:
- Crea el tipo `ProductEntity` que contenga todas las propiedades de un producto.
- Define un tipo llamado `ProductUpdate` que incluya las propiedades actualizables del producto. Este tipo puede contener las mismas propiedades que `ProductEntity`, excepto aquellas como `id`, `createdAt`, y `updatedAt`.
- Define un tipo llamado `CreateProduct` que incluya las propiedades necesarias para crear un producto. Este tipo puede contener las mismas propiedades que `ProductEntity`, excepto aquellas como `id`, `createdAt`, `updatedAt` y `isActive`.
- Mantén un enfoque modular en el desarrollo del código.
- Tipifica todas las propiedades, métodos y argumentos de las funciones.
- Organiza y comenta el código de manera que sea fácil de leer y entender.
- Sigue los principios SOLID y aplica buenas prácticas de programación.

Este ejercicio te permitirá practicar la implementación de servicios y controladores, así como la organización y tipado en TypeScript. ¡Manos a la obra! 🚀
