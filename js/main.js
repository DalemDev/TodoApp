const inputValor = document.getElementsByClassName("tarea")[0];

const btnAgregar = document.getElementsByClassName("btn")[0];

btnAgregar.addEventListener("click", function () {
  if (inputValor.value.trim() != 0) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      listaTareas = [];
    } else {
      listaTareas = localItems;
    }
    listaTareas.push(inputValor.value);
    localStorage.setItem("localItem", JSON.stringify(listaTareas));
  }
  inputValor.value = ''
  mostrarItems();
});

function mostrarItems() {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    listaTareas = [];
  } else {
    listaTareas = localItems;
  }

  let html = "";
  let itemVista = document.querySelector(".contenedor-todoLista");
  listaTareas.forEach((data, index) => {
    html += `
    <div class="todoLista">
    <div class="texto">
    <p>${data}</p>
    </div>
    <div class="button">
    <button onClick="deleteItem(${index})">x</button>
    </div>
    </div>
    `;
  });
  itemVista.innerHTML = html;
}
mostrarItems();

function deleteItem(index) {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  listaTareas.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(listaTareas));
  mostrarItems();
}

function limpiarItems() {
  localStorage.clear();
  mostrarItems();
}

const limpiarTareas = document.querySelector('.limpiarItems')
limpiarTareas.addEventListener('click', limpiarItems)