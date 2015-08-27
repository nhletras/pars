  $(window).load(function() {           
    var i = 0; 
    var images = ['./img/bg2.png',
                  './img/bg3.jpg',
                  './img/bg4.jpg',
                  './img/bg5.jpg',
                  './img/bg6.jpg',
                  './img/bg1.jpg'];
    var image = $('.main');
    //Initial Background image setup
    image.css('background-image', 'url(image1.png)');
    //Change image at regular intervals
    setInterval(function(){   
      image.fadeOut(1000, function () {
      image.css('background-image', 'url(' + images [i++] +')');
      image.fadeIn(1000);
     });
     if(i == images.length)
      i = 0;
     }, 5000);   
 });

document.getElementById("btnEstudio").addEventListener("click", function() {toDiv('.estudio')});
document.getElementById("btnServicios").addEventListener("click", function() {toDiv('.servicios')});
document.getElementById("btnProyectos").addEventListener("click", function() {toDiv('.proyectos')});
document.getElementById("btnEquipo").addEventListener("click", function() {toDiv('.equipo')});
document.getElementById("btnBlog").addEventListener("click", function() {toDiv('.blog')});
document.getElementById("btnContacto").addEventListener("click", function() {toDiv('.contacto')});

document.getElementById("sd1").addEventListener("click", function() {toDiv('.estudio')});

function toDiv(divToGo) {
    $('html, body').animate({
        scrollTop: $(divToGo).offset().top
    }, 1000);
}

$(".navbar-fixed-top").autoHidingNavbar();


$('.to-cmp').on('click', function(event) 
{
    event.preventDefault();
    $('#st1').show(1000);
    $('#st2').hide(1000);
    $('#st3').hide(1000);

});

$('.to-flsf').on('click', function(event) 
{
    event.preventDefault();
    $('#st2').css("display", "inline");
    $('#st1').css("display", "none");
    $('#st3').css("display", "none");

});

$('.to-pqn').on('click', function(event) 
{
    event.preventDefault();
    $('#st3').css("display", "inline");
    $('#st1').css("display", "none");
    $('#st2').css("display", "none");

});
    