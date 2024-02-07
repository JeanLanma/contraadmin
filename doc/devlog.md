# Notas sobre el desarrollo del proyecto

## 07/12/2023

### Sobre el stack y la arquitectura
Es importante tomar en cuanto un enfoque modular para todo el desarrollo del proyecto, esto nos permitirá tener un código más limpio y mantenible, además de que nos permitirá reutilizar código en caso de que sea necesario.

Tambien debemos pensar en las diversas integraciones con 
servicios externos como pasarelas de pago cotizadores de envíos, etc...

### Sobre el diseño
El diseño debe ser simple y minimalista, sin embargo, debe ser atractivo y funcional, es importante que el usuario pueda navegar de forma intuitiva y que pueda encontrar lo que busca de forma rápida y sencilla.

### Sobre la documentación
La documentación es importante, sin embargo, no es necesario documentar cada función, clase o componente, es importante documentar los aspectos más importantes del proyecto, como la arquitectura, el stack, el diseño, etc...

### Sobre el desarrollo
El desarrollo debe ser ágil, es importante que el proyecto se pueda adaptar a los cambios que puedan surgir durante el desarrollo, es importante que el código sea limpio y mantenible, es importante que el código sea legible y que se sigan las convenciones de estilo.

## Multi-Sucursal y Multi-Almacén.
Es importante que el sistema pueda manejar múltiples sucursales y almacenes, esto nos permitirá tener un control más preciso de los productos, además de que nos permitirá tener un control más preciso de los pedidos y de los clientes.

## 19/12/2023
Se inicia la creacion de una primera version de los modelos

## 09/01/2024
- Agregar logout[x]
- Desactivar el Scroll cuando se abre el menu lateral[-]

- Crear pagina de almacenes[x]
    Se iniciara por los almacenes ya que pensando en
    el diseño del sistema es la parte central no importa
    si es solo un almacen o varios.
    Los almacenes seran asignados a las tiendas

## 07/02/2024
## Sobre los modelos
Creacion estandar de un modelo en el proyecto
- Usar espacios de nombre de acuerdo al modulo
    - Ejemplo: App\Models\Catalog\Product
- Usar el nombre del modelo en singular
- Crear las relaciones
- Crear los repositorios de acceso a datos
-- Usando el patron de diseño Repository y espacios de nombre adecuados
- Crear los controladores
-- Usando espacios de nombre adecuados
- Crear las rutas