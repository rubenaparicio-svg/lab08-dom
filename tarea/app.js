// Clase que representa una tarea individual
class TareaItem {
  constructor(titulo, prioridad) {
    this.titulo = titulo;
    this.prioridad = prioridad;
    this.completada = false;
  }

  marcar() {
    this.completada = !this.completada;
  }

  obtenerTexto() {
    return `[${this.prioridad}] ${this.titulo}`;
  }
}

// Selección de elementos DOM
const formTarea = document.querySelector("#formTarea");
const txtTarea = document.querySelector("#txtTarea");
const selPrioridad = document.querySelector("#selPrioridad");
const listaTareas = document.querySelector("#listaTareas");
const msgError = document.querySelector("#msgError");

// Arreglo para almacenar instancias de TareaItem
const tareas = [];

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  const tituloVal = txtTarea.value.trim();

  // Validación
  if (tituloVal === "") {
    msgError.textContent = "Por favor, escribe un título válido para la tarea.";
    return;
  }

  msgError.textContent = "";

  // Creación de objeto
  const nuevaTarea = new TareaItem(tituloVal, selPrioridad.value);
  tareas.push(nuevaTarea);

  // Renderizar en el DOM
  const li = document.createElement("li");
  const spanText = document.createElement("span");
  spanText.textContent = nuevaTarea.obtenerTexto();

  // Evento de clic en la tarea para marcar
  spanText.addEventListener("click", () => {
    nuevaTarea.marcar();
    spanText.classList.toggle("completada");
  });

  // Botón para eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(spanText);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  formTarea.reset();
});
