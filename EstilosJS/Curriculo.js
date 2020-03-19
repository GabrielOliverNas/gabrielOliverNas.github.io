/*Eventos js formam uma ação na página quando clicamos no link são executados 3 eventos
OnClick quando clicamos em um link ao clicar temos o evento clicar
onOnload ele deixa uma página
onload carrega uma nova página*/

$(document).ready(function() {
    $('.Objetivo').click(function() {
        $('.background, .box').animate({
            'opacity': '.60'
        }, 500, 'linear');
        $('.box').animate({
            'opacity': '1.00'
        }, 500, 'linear')
        $('.background, .box').css('display', 'block');

    })
    $('.close').click(function() {
        $('.backgound, .box').animate({
            'opacity': '0'
        }, 500, 'linear');
        $('.background').css('display', 'none');
    });
});
$(document).ready(function() {
    $('.Habilidades').click(function() {
        $('.background, .box').animate({
            'opacity': '.60'
        }, 500, 'linear');
        $('.box').animate({
            'opacity': '1.00'
        }, 500, 'linear')
        $('.background, .box').css('display', 'block');

    })
    $('.close').click(function() {
        $('.backgound, .box').animate({
            'opacity': '0'
        }, 500, 'linear');
        $('.background').css('display', 'none');
    });
});