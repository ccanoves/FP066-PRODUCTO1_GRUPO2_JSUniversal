// JSON data for subjects
var asignaturasData = {
    "23241": {
        name: "Full Stack JS",
        dateStart: "",
        dateEnd: "",
        color: "#33aaff",
        description: "El semestre m\xe1s importante",
        opinion: "Me encanta",
        difficulty: 1,
        status: "asignaturas-pending"
    },
    "23242": {
        name: "Competencias Digitales",
        dateStart: "",
        dateEnd: "",
        color: "#CCCCCC",
        description: "El semestre m\xe1s importante",
        opinion: "Me encanta",
        difficulty: 3,
        status: "empezada"
    }
};
// Function to draw the subject cards
function drawAsignaturas(asignaturas) {
    // Get the container where cards will be added
    var container = $("#asignaturas-pending");
    // Clear the container
    container.empty();
    // Iterate through the subjects and create cards
    $.each(asignaturas, function(index, asignatura1) {
        var card = createCard(index, asignatura1);
        container.append(card);
    });
    // Enable drag and drop functionality
    dragAndDrop();
}
// Function to create a single subject card
function createCard(index, asignatura1) {
    var card = `
    <div class="margen-top-lg col-sm-4 ${asignatura1.status}" id="${index}">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" style="background-color: ${asignatura1.color};">
            Asignatura: ${asignatura1.name}
          </h5>
          <div class="padding-sm">
            <p class="card-text">
              Fecha inicio: ${asignatura1.dateStart}<br>
              Fecha fin: ${asignatura1.dateEnd}<br>
              Descripci\xf3n: ${asignatura1.description}<br>
              Opini\xf3n: ${asignatura1.opinion}<br>
              Dificultad: ${asignatura1.difficulty}
            </p>
            <a href="#" class="btn btn-primary" id="editarAsignatura" onclick="drawModalAsignatura(${index})">Editar</a>
            <button class="btn btn-danger" id="eliminar" onclick="eliminar(${index})"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div>
  `;
    return card;
}
// Function to enable drag and drop functionality
function dragAndDrop() {
    $(".draggable").draggable({
        helper: "clone"
    });
    $(".column").sortable({
        connectWith: ".column"
    });
}
// Function to open the modal for a new subject
function drawModalAsignatura() {
    // Reset the form
    $("#asignaturaForm")[0].reset();
    // Show the modal
    $("#modalAsignatura").modal("show");
}
// Handle click on "Añadir Asignatura" button
$("#a\xf1adir-asignatura").click(function() {
    drawModalAsignatura();
});
// Si viene definido un índice de asignatura, cargamos los datos en el formulario
$("#editar-asignatura").click(function(index) {
    if (index && typeof asignaturasData[index] != "undefined") {
        asignatura = asignaturasData[index];
        title = "Ver/Editar ";
    }
    drawModalAsignatura();
});
// Handle click on "Guardar" button in the modal
$("#guardarAsignatura").click(function() {
    // Get data from the form
    var nombreAsignatura = $("#nombreAsignatura").val();
    var fechaInicio = $("#fechaInicio").val();
    var fechaFin = $("#fechaFin").val();
    var descripcion = $("#descripcion").val();
    var opinion = $("#opinion").val();
    var color = $("#color").val();
    var dificultad = $("#dificultad").val();
    // Create a new subject object
    var newSubject = {
        name: nombreAsignatura,
        dateStart: fechaInicio,
        dateEnd: fechaFin,
        color: color,
        description: descripcion,
        opinion: opinion,
        difficulty: dificultad,
        status: "asignaturas-pending"
    };
    // Add the new subject to the data
    var newIndex = Date.now().toString();
    asignaturasData[newIndex] = newSubject;
    // Create and append a new card
    var newCard = createCard(newIndex, newSubject);
    $("#asignaturas-pending").append(newCard);
    // Hide the modal
    $("#modalAsignatura").modal("hide");
});
// Document ready function
$(document).ready(function() {
    drawAsignaturas(asignaturasData);
});
// Handle changes in the select element with id "select-semana"
$("#select-semana").change(function() {
// Update subjects based on the selected week if needed
});

//# sourceMappingURL=interfaz_3.bf494ef0.js.map
