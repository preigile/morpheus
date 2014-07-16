$(document).ready(function () {
    $('.submitTermAction').click(function (event) {
        event.preventDefault();
        var answer = {term: $('.termInput').val()};
        $.ajax('/jedi', {
            type: 'POST',
            data: JSON.stringify(answer),
            dataType: 'text',
            contentType: 'application/json',

            success: function (response) {
                location.reload();
            },

            error: function (response) {
                console.log('Bad response: ' + response.toString())
            }
        });
    });
});
