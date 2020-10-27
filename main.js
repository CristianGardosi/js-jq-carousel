// ***********************************************************
// SLIDER DI IMMAGINI UTILIZZANDO LOGICA JS / JQUERY
// ***********************************************************

$(document).ready( function () {
    // MOUSE Scorro la slider di immagini cliccando con il mouse l'apposita freccetta

    // Come prima cosa vado a targhettizzare gli elementi che mi permettono di passare da una slide all'altra ovvero PREV e NEXT
    $('.prev').click( function() {
        nextPrevImg('prev');
    });

    $('.next').click( function() {
        nextPrevImg('next');
    });

    // KEYBOARD Scorro la slider di immagini con le frecce da tastiera
    $(document).keydown( function(event) {

        if (event.keyCode === 37) {
            nextPrevImg('prev');
        }

        else if (event.keyCode === 39) {
            nextPrevImg('next');
        }

    });

}); 


// FUNZIONI
// Naviga prev o next tra le immagini
function nextPrevImg(direction) {
    // Targhettizzo quella che è l'img attualmente active ovvero visualizzata su schermo in quando unica ad avere display diverso da none (inline-block)
    var activeImg = $('.images img.active');
    // Allo stesso modo mi comporto per il pallino che lavora alla stessa maniera
    var activeCircle = $('.nav i.active');
    // RESET per poter applicare active ad un nuovo elemento è necessario toglierlo da quello che lo aveva in precedenza in questa maniera
    activeImg.removeClass('active');
    activeCircle.removeClass('active');

    // PREV lavoro con if nella casistica prev per img e i rendendo active non più l'immagine e il cerchio di partenza, ma la/il precedente e cosi via ad ogni click su prev
    if ( direction === 'prev' ) {
        // Casistica in cui dalla prima immagine/cerchio mi sposto a sx, ovviamente devo ripartire dall'ultima/o e per farlo utilizzo questa sintassi
        if ( activeImg.hasClass('first') ) {
            $('.images img.last').addClass('active');
        }
        if ( activeCircle.hasClass('first') ) {
            $('.nav i.last').addClass('active');
        }
        // Else che copre tutte le casistiche tranne quella descritta in precedenza
        else{
            activeImg.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }
        // NEXT lavoro con if nella casistica next per img e i rendendo active non più l'immagine e il cerchio di partenza, ma la/il successiva/o e cosi via ad ogni click su next
    else if ( direction === 'next' ) {
        if ( activeImg.hasClass('last') ) {
            $('.images img.first').addClass('active');
        }
        if ( activeCircle.hasClass('last') ) {
            $('.nav i.first').addClass('active');
        }
        // Else che copre tutte le casistiche tranne quella descritta in precedenza
        else{
            activeImg.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }
    }
}