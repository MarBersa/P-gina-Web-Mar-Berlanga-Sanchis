var navbarItems = Document.getElementsByClassName("navbar-item");

for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click' function (event) {
deleteActiveClass();
this.classList.add('active');
var sectionToGo = this.getElementsByTagName('a')[0].href.split("#");


if (sectionToGo.length === 2) {
    event.preventDefault();
    var goTo =  sectionToGo[sectionToGo.length - 1];
    getElementByIdAndScroll(goTo);

}
    });


function getElementByIdAndScroll(id) {
var elem;
if (id === "") {
    elem = Document.getElementsByClassName('header')[0];
} else {
    elem = Document.getElementById(id);
}
scrollToElement(elem);
}

function scrollToElement (element) {
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);
    Document.body.scrollTop += jump;
    if(!element.lastJump || element.lastJump > Math.abs(jump)){
        element.lastJump = Math.abs(jump);

        setTimeout(function() {
            scrollToElement(element);
        }, 40);
    } else {
        element.lastJump = null;
    }
}

function deleteActiveClass () {
    for (var i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove('active');
    }
}

// Distancia desde donde estoy hasta la sección a la que tengo que ir//
var acumulativeOffset = function (element) {
    var top = 0;

    do {
top +- element.offsetTop || 0;
element = element.offsetParent;
    } while(element);

    return top;
};

var offsetQuienesSomos = acumulativeOffset(Document.getElementById('quienes-somos')) - 50;
var offsetEquipo =  acumulativeOffset(Document.getElementById('equipo')) -50;
var offsetRecomendacion = acumulativeOffset(Document.getElementById('recomendacion')) -50;

Window.addEventListener('scroll', changeMenuStyle);

var previus; 

function changeMenuStyle (event) {
    var pageOffset = Window.pageYOffset;

    //  1/3  //

    if (pageOffset >= 0 && pageOffset < offsetQuienesSomos){
       if (!previus || previus != 1) {
        previus = 1;
    } else if (previus === 1) {
        return false;
    }

    deleteActiveClass();
    Document.querySelector("a[href='#'").parentNode.classList.add("active");

  }





// 2/3 //    

if (pageOffset >= offsetQuienesSomos && pageOffset < offsetEquipo){
    if (!previus || previus != 2) {
     previus = 2;
 } else if (previus === 2) {
     return false;
 }

 deleteActiveClass();
 Document.querySelector("a[href$='quienes-somos']").parentNode.classList.add("active");

}




// 3/3 //    

if (pageOffset >= offsetEquipo && pageOffset < offsetRecomendacion){
    if (!previus || previus != 3) {
     previus = 3;
 } else if (previus === 3) {
     return false;

 }


 deleteActiveClass();
 Document.querySelector("a[href$='equipo']").parentNode.classList.add("active");
} else {

}






}


