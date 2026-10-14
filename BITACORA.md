# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. Navegador usado: Google Chrome

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                                                  | Se mantiene al recargar (Si/No) |
| ---------------------------- | -------------------------------------------------------------------------- | ------------------------------- |
| textContent desde la consola | El título cambió inmediatamente a "Hola desde la consola".                 | No                              |
| textContent desde app.js     | El título se actualizó para mostrar "Hola TECSUP".                         | Si                              |
| style.color                  | El texto del título cambió su color a azul.                                | Si                              |
| classList.add                | Se le aplicó el fondo amarillo al párrafo (estilo de la clase .destacado). | Si                              |
| createElement + appendChild  | Se agregó un nuevo elemento "JavaScript" a la lista.                       | Si                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara                  | Cuanto suma por accion                        |
| -------------- | -------------------------------------- | --------------------------------------------- |
| click          | Hacer un clic simple sobre el botón    | Suma 1 por cada clic                          |
| dblclick       | Hacer doble clic rápido sobre el botón | Suma 1 únicamente tras el segundo clic rápido |
| mouseover      | Pasar el puntero por encima del botón  | Suma 1 cada vez que el cursor entra al botón  |

**Información mostrada en consola:**

- `evento.type`: Indica el tipo de evento disparado (ej. "click").
- `evento.target`: Devuelve el nodo/elemento HTML exacto que recibió la interacción (`<button id="btnSumar">Sumar 1</button>`).

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                  | Se recargo la pagina (Si/No) |
| --------------------------------------- | -------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | El saludo se actualiza en tiempo real letra por letra.   | No                           |
| Enviar sin preventDefault               | Se muestra el mensaje un instante y desaparece rápido.   | Si                           |
| Enviar con preventDefault, correo sin @ | Muestra "Correo no valido: falta @" en texto color rojo. | No                           |
| Enviar con preventDefault, correo con @ | Muestra "Enviado: [correo]" en pantalla correctamente.   | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------- | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875.00            |
| mouse   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/ 120.00 | 90.00              |
| monitor | Monitor | 680    | Monitor - S/ 680.00 | 510.00             |

**Ventaja de usar clases:**
Nos permite centralizar y reutilizar la estructura y métodos numéricos/formatos en un solo lugar. Evita duplicar código repetitivo en el HTML o en variables sueltas.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina                                        | Correcto (Si/No) |
| --------------- | ------------------------------------------------------------------ | ---------------- |
| Cuaderno 12.50  | 12.50                                                              | Si               |
| + Lapicero 3.20 | 15.70                                                              | Si               |
| + Mochila 89.90 | 105.60                                                             | Si               |
| Sin Number()    | Muestra error en consola (`this.precio.toFixed is not a function`) | No               |

| Pieza  | Linea de tu codigo donde aparece               | Para que sirve                                                       |
| ------ | ---------------------------------------------- | -------------------------------------------------------------------- |
| DOM    | `document.querySelector("#carrito")`           | Selecciona el contenedor de la lista donde se agregan los elementos. |
| Evento | `formProducto.addEventListener("submit", ...)` | Captura el envío del formulario sin recargar la página.              |
| Objeto | `new Producto(...)` / `carrito.agregar(...)`   | Instancia datos estructurados para procesar operaciones matemáticas. |
