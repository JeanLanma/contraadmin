# Producto

## Descripción
El producto es un objeto que se puede vender o comprar. El producto tiene un nombre, un precio y una cantidad, puede pertenecer o no a un almacen.

## Atributos
- Nombre: Nombre del producto.
- Precio: Precio del producto.
- Cantidad: Cantidad de productos.
- Almacen: Almacen al que pertenece el producto.

```js
{  
    "product": {
    "user_id":3,
    "name": "Product 3",
    "description": "Some....",
    "long_description": "Some long...",
    "slug":"product_3",
    "sku": "c108",
    "status": "published",
    "created_at": "timestamp",
    "updated_at": "timestamp",
    "deleted_at": "timestamp"
}}
```

## Como funciona la pagina admin de productos
### Script
Entrar a la pagina de Catalogo -> Productos
Siempre al entrar se muestra una lista de productos
### Pantalla
Se muestra una lista de productos con los siguientes campos:
- Nombre
- Precio
- Sku
- Cantidad
- Almacenes
- Acciones
### Acciones
- Agregar: Agregar un nuevo producto
- Editar: Editar el producto
- Eliminar: Eliminar el producto
- Ver: Ver el producto
- Buscar: Buscar un producto
- Filtrar: Filtrar los productos por almacen
- Ordenar: Ordenar los productos por nombre, precio o cantidad
- Paginacion: Paginacion de los productos
### Agregar
Se muestra un formulario con los siguientes campos:
- Nombre
- Precio
- Cantidad
- Almacen
- Guardar
- Cancelar
### Editar
Se muestra un formulario con los siguientes campos:
- Nombre
- Precio
- Cantidad
- Almacen
- Guardar
- Cancelar
### Eliminar
Se muestra un mensaje de confirmacion para eliminar el producto
### Ver
Se muestra

## Crear Producto - Script

1.- Entrar a la pagina de Catalogo -> Productos
2.- Hacer clic en el boton Agregar
3.- Llenar el formulario con los siguientes datos:
    - Nombre: Product 3
    - Precio: 100
    - Cantidad: 10
    - Almacen: Almacen 1
4.- Hacer clic en el boton Guardar
5.- Verificar que el producto se haya creado
