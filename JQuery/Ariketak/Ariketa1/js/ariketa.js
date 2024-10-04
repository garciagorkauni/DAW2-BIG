$(document).ready(function(){
    let products = ['jamon', 'queso']
    $('.needs-validation').on('submit', function(e) {
        e.preventDefault();
        if (!this.checkValidity()) {
            e.stopPropagation();
        } else {
            $('#saskia').append("<li>" + $('#produktua').val() + "</li>")
        }
        $(this).addClass('was-validated');
        $('#produktua').val('')
    });

    $('#erosi').click(function(){
        $('#saskia').css("background-color", "green");
        $('#saskia').css("border", "3px solid");
        alert('Erosketa prest dago!')
    })
});