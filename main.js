$(document).ready(function () {
    $('#form-tarefa').on('submit', function (e) {
      e.preventDefault(); // Previne o recarregamento da página

    const tarefa = $('#nova-tarefa').val().trim();

    if (tarefa !== "") {
        $('#lista-tarefas').append(`<li>${tarefa}</li>`);
        $('#nova-tarefa').val(''); // Limpa o campo
    }
    });

    $('#lista-tarefas').on('click', 'li', function () {
    $(this).toggleClass('completed');
    });
});