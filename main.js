

$(document).ready(function(){

    $('form').submit(function(e){
        e.preventDefault();
        adicionarTarefa();
        adicionarRisco();
    })  
})  

function adicionarTarefa(){
        let tarefa = $('#inserir-nome').val();
        let addTarefa = $('<li></li>');
        $(`<p>${tarefa}<p/>`).appendTo(addTarefa);
        $(addTarefa).appendTo('ul');
        $('#inserir-nome').val(''); 
}

function adicionarRisco(){
    $('li').click(function(){
    $(this).addClass('risco');
    })
}

