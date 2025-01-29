# Práctica 10: React

## Partes de la documentación tratada

- [Elección de la estructura del estado](https://es.react.dev/learn/choosing-the-state-structure)
- [Compartir estado entre componentes](https://es.react.dev/learn/sharing-state-between-components)

----------------------------------------

## Actividad

El objetivo de esta actividad es seguir trabajando con algunos hooks de **React** como `useState`

### COMPONENTE PADRE

- El estado `activeIndex` controla cuál de los paneles (actividades) está expandido o activo.  Este estado usa el hook `useState` de React y comienza tal que el primer panel se mostrará por defecto. El estado se controla mediante setactiveIndex

- La componente padre pasará una función de **callback** (`callbackFunction`) al hijo para manejar un evento de tipo `onClick` en el hijo. Este evento de tipo `onClick` en el hijo usará la función de `Callback` en el padre para saber si el panel está cerrado o abierto.

### COMPONENTES HIJAS

- Cada componente hija representa un solo panel de actividad y tendrá los siguientes props:

  - **title**: El título de la actividad.
  
  - **children**: El contenido adicional que irá dentro del panel, como la descripción de la actividad.

  - **isActive**: Es un booleano que indica si el panel está expandido o no (se pasa desde el componente padre App).

  - **callbackFunction**: Función que se ejecuta al hacer clic en el panel para alternar su estado y de la que hablamosantes.

  - **fecha_vencimiento**: Fecha de entrega de la actividad.

El componente tiene su propio estado `comments`, que guarda el valor del campo de texto (es decir, el `textarea`) donde el usuario puede añadir comentarios.

Al hacer clic en el panel, se activa el evento  `onClick` -> `callbackFunction`, que alterna entre expandir o colapsar el panel.

Este evento se activa cuando el usuario escribe en el campo de comentarios, actualizando el estado local comments.

En el evento `onClick` del `textarea`, se previene que el clic se propague hacia el panel, evitando que se cierre el panel cuando se hace clic dentro del cuadro de comentarios. Para ello usa el método `stopPropagation()` de los objetos de tipo evento en **JS**.

Cuando el estado cambia (_cuando se alterna entre abierto y cerrado_), se activan transiciones visuales que hacen que el contenido de los paneles se expanda o se oculte suavemente con una transición.

[▶️ VIDEO](https://drive.google.com/file/d/1L-MWpRxoBuM9RdlWMJoRO6s_M7sh4BeL/view?usp=sharing)