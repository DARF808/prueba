/*let inputs = document.querySelectorAll(".btn-inp");
let botones = document.querySelectorAll(".agregarhabito");
let listas = document.querySelectorAll(".listahabito");

botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        let texto = inputs[index].value;
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = texto;
        
        // Agregar estilos directamente al li
Object.assign(nuevoElemento.style, {
  color: "black",
  padding: "8px",
  margin: "8px",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
        
  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar"; //agregamos el texto al boton
    botonBorrar.addEventListener("click", ()=> {
        nuevoElemento.remove()
    })
Object.assign(botonBorrar.style, {
  backgroundColor: "#ff4444",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "4px",
  cursor: "pointer",
  fontsize: "5px",
});

  

  
  let botonCompletar = document.createElement("button");
  botonCompletar.textContent = "Hecho";

  botonCompletar.addEventListener("click", ()=>{
    nuevoElemento.classList.toggle("completada");
  })
Object.assign(botonCompletar.style, {
  backgroundColor: "#3ffc00ff",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "4px",
  cursor: "pointer",
  fontsize: "5px",
});


        listas[index].appendChild(nuevoElemento);
        inputs[index].value = "";
        nuevoElemento.appendChild(botonBorrar)
        nuevoElemento.appendChild(botonCompletar)
        if (texto.trim() === "") {
        alert("Escribe una tarea antes de agregar.");
        return;
        }
    });
});

*/

let inputs = document.querySelectorAll(".btn-inp");
let botones = document.querySelectorAll(".agregarhabito");
let listas = document.querySelectorAll(".listahabito");

let semanaActual = 1;
let historialSemanas = {
  1: ["", "", ""].map(() => []),
};

// Función para crear un <li> con texto, botón eliminar y botón completar
function crearElementoLista(texto) {
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = texto;

  // Estilos directos
  Object.assign(nuevoElemento.style, {
    color: "black",
    padding: "8px",
    margin: "8px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar";
  Object.assign(botonBorrar.style, {
    backgroundColor: "#ff4444",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "7px",
  });
  botonBorrar.addEventListener("click", () => {
    nuevoElemento.remove();
  });

  let botonCompletar = document.createElement("button");
  botonCompletar.textContent = "Hecho";
  Object.assign(botonCompletar.style, {
    backgroundColor: "#3ffc00ff",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
  });
  botonCompletar.addEventListener("click", () => {
    nuevoElemento.classList.toggle("completada");
  });

  nuevoElemento.appendChild(botonBorrar);
  nuevoElemento.appendChild(botonCompletar);

  return nuevoElemento;
}

// Agregar hábitos a las listas
botones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    let texto = inputs[index].value.trim();
    if (texto === "") {
      alert("Escribe una tarea antes de agregar.");
      return;
    }

    let nuevoElemento = crearElementoLista(texto);
    listas[index].appendChild(nuevoElemento);
    historialSemanas[semanaActual][index].push(texto);
    inputs[index].value = "";
  });
});

// Actualiza la UI según la semana actual
function actualizarUI() {
  listas.forEach((lista, i) => {
    lista.innerHTML = "";
    historialSemanas[semanaActual][i].forEach(texto => {
      const li = crearElementoLista(texto);
      lista.appendChild(li);
    });
  });

  document.getElementById("numero-semana").textContent = semanaActual;
}

// Control de semanas
document.getElementById("siguienteSemana").addEventListener("click", () => {
  semanaActual++;
  if (!historialSemanas[semanaActual]) {
    historialSemanas[semanaActual] = ["", "", ""].map(() => []);
  }
  actualizarUI();
});

document.getElementById("anteriorSemana").addEventListener("click", () => {
  if (semanaActual > 1) {
    semanaActual--;
    actualizarUI();
  }
});
