$(document).ready(function() {

    $(".contact-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "https://60376bfd5435040017722533.mockapi.io/form",
            data: $(this).serialize()
        }).done(function() {
            alert("Ваш запрос принят");
        });
        
        $('.contact-form').trigger( 'reset' );
        
        return false;
        
    });

});