$(document).ready(function () {


    $('#nav li a').click(function () {
        $('#nav li a').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('href');
        scrollTo(id);
        return false;
    });
    function scrollTo(target) {
        if ($(target).length >= 1) {
            height = $(target).offset().top;

        }
        $('html,body').animate({ scrollTop: height }, 1200);
        return false;
    }

});


// SEND MAIL //

$(document).ready(function () {
    $('#send').click(function (event) {

        var name = $('#nom').val()
        var email = $('#email').val()
        var sujet = $('#sujet').val()
        var message = $('#message').val()

    })
})