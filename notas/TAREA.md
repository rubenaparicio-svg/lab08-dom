# Tarea: Mi componente interactivo

## Componente elegido

**Gestor de Tareas Pendientes (To-Do List)**: Un componente interactivo para organizar tareas según su prioridad, que permite agregar, validar, marcar como completadas y eliminar tareas dinámicamente del DOM.

## Version 1: solo DOM

Se construyó la estructura visual insertando elementos dinámicos mediante métodos manipular del DOM.

```js
const listaTareas = document.querySelector("#listaTareas");
const li1 = document.createElement("li");
li1.textContent = "[Media] Estudiar para el examen de JavaScript";
listaTareas.appendChild(li1);
## Version 2: con eventos
## Version 3: con clases y objetos ## Donde uso DOM, eventos y objetos ## Pruebas realizadas
## Por que disene asi mi clase
```

## Version 2: con eventos

Se integró respuesta a eventos interactivos como submit para capturar entradas de formulario y click para borrar elementos.

formTarea.addEventListener("submit", (e) => {
e.preventDefault();
if(txtTarea.value.trim() === "") return;
const li = document.createElement("li");
li.textContent = txtTarea.value;
listaTareas.appendChild(li);
});

## Version 3: con clases y objetos

Se definió la POO con la clase TareaItem para modelar y gestionar el estado del componente.

JavaScript
class TareaItem {
constructor(titulo, prioridad) {
this.titulo = titulo;
this.prioridad = prioridad;
this.completada = false;
}
marcar() { this.completada = !this.completada; }
obtenerTexto() { return `[${this.prioridad}] ${this.titulo}`; }
}

## Donde uso DOM, eventos y objetos

| Pieza  | Código donde se usa                              | Uso/Propósito                                                           |
| ------ | ------------------------------------------------ | ----------------------------------------------------------------------- |
| DOM    | `document.createElement("li")` / `appendChild()` | Creación dinámica de elementos HTML e inserción en la lista del DOM.    |
| Evento | `addEventListener("submit", ...)` / `click`      | Captura del formulario y gestión de interacción (tachar/borrar tarea).  |
| Objeto | `new TareaItem(...)`                             | Encapsulamiento de los datos de la tarea y manejo de su estado interno. |

## Pruebas realizadas

| Acción                                   | Resultado esperado                                     | Resultado obtenido                                           | Cumple (Sí/No) |
| ---------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------ | -------------- |
| Enviar tarea vacía                       | Mostrar error en texto rojo sin agregar el elemento    | Aparece el mensaje "Por favor, escribe un título..."         | Sí             |
| Agregar "Estudiar JS" con prioridad Alta | Se crea el ítem en la lista con prefijo `[Alta]`       | Aparece el ítem `[Alta] Estudiar JS` en la pantalla          | Sí             |
| Hacer clic en el texto de una tarea      | Tachar/destachar el texto de la tarea                  | La clase `.completada` se aplica alternadamente              | Sí             |
| Hacer clic en el botón Eliminar          | Remover el elemento `<li>` correspondiente de la lista | La tarea desaparece del DOM de forma inmediata               | Sí             |
| Seleccionar prioridad Media/Baja         | Reflejar la prioridad elegida en la interfaz           | El prefijo se actualiza a `[Media]` o `[Baja]` correctamente | Sí             |

## Por que disene asi mi clase

Diseñé la clase `TareaItem` con los atributos `titulo`, `prioridad` y `completada` para mantener un control limpio del estado de cada objeto. Esto me permite separar la lógica de negocio (como alternar el estado con el método `marcar()` o formatear el texto con `obtenerTexto()`) de la manipulación directa de la interfaz gráfica en el DOM.
