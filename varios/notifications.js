// Cuando haga click en el video
document.getElementById("video").addEventListener("click", function (event) {
    launchFullScreen(this);
    this.play();
});

// Lanzar a pantalla completa. Preguntamos al navegador si tiene
// el requestFullscreen (genérico, mozzila, safari y microsof)
function launchFullScreen (element) {
    if(element.requestFullscreen) {  
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullScreen () {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if(document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}