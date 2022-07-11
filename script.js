/////Infobox

const openInfoboxButtons = document.querySelectorAll('[data-infobox-target]')
const overlay = document.getElementById('overlay')

openInfoboxButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const infobox = document.querySelector(button.dataset.infoboxTarget)
        openInfobox(infobox)
    })
})

overlay.addEventListener('click', () =>{
    const infoboxs = document.querySelectorAll('.infobox.active')
    infoboxs.forEach(infobox =>{
        closeInfobox(infobox)
    })
})

function openInfobox(infobox){
    if (infobox == null) return
    infobox.classList.add('active')
    overlay.classList.add('active')
}
function closeInfobox(infobox){
    if (infobox == null) return
    infobox.classList.remove('active')
    overlay.classList.remove('active')
}

//// Headline Wechsel
//Problem: nur einmaliger Austausch!
/*var headline = document.getElementById("headline");

function switchHeadline (){
    headline.innerHTML = "your windowsize matters";
    headline.innerHTML = "resize your browser now";
}
setInterval(switchHeadline, 5000);*/

///Neuer Versuch: Headlinewechsel (funktioniert nicht!)
/*function switchHeadline (){
    var headlineListe = ["your windowsize matters", "resize your browser now"]
    
    y =  headline = document.getElementById("headline");
    for (i = 0; i < y.length; i++){
        y[i].headline.innerHTML = headlineListe[i%headlineListe.length]
    }
    }
    setInterval(switchHeadline, 5000);
*/

///Neuer Versuch: Headline - automatische Slideshow
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("headline");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }

/////Neues Fenster in einer bestimmten Größe öffnen
/*let newWindow;

document.getElementById("openWin").onclick = function openWin() {
  newWindow = window.open('index_02.html', "", "width=1000, height=400");
}

///Wie kann ich die Funktion nur einmal ausführen lassen?
///funktioniert nicht!!!
function notClickable(){
    if (document.getElementById) {
        var clickedButton = document.getElementById(weiterleitung);
        clickedButton.style.display = (clickedButton.style.display=='block'?'none':'block');
      }
    if(!clickedLink) {
        clickedLink = true;
        return true;
      }
      else {
        return false;
      }
}*/

///////Fenstergröße beeinflusst Öffnen eines weiteren Fensters
///funktioniert nicht!!!
/*const windowHeight = window.innerHeight; //beachtet nicht resize!!!??
const windowWidth = window.innerWidth;
var heightSize = "40px";
var widthSize = "681px";

console.log(windowHeight);
console.log(windowWidth);
console.log(heightSize >= windowHeight);


function showContent(){
    if(heightSize >= windowHeight,  widthSize >= windowWidth) {
        newWindow = window.open('index_02.html', "", "width=1000, height=400");
    }
}
*/
///Neuer Versuch

//Check if window width is less than or equal to 600,then change bg
document.onload = checkWidth();
window.onresize = checkWidth;

console.log(innerWidth);
console.log(innerHeight);

function checkWidth() {
    console.log("resize")
    if (window.innerWidth < 2000 && window.innerHeight < 100 && window.innerWidth > 1200) {
        document.body.style.background = "radial-gradient(circle, rgba(0,168,138,1) 0%, rgba(0,168,138,0.72) 35%, rgba(86,182,165,0.47) 100%)";
        document.body.style.backgroundSize = "cover";  ///funktioniert nicht
        ///Fenster öffnet sich automatisch

        ///Link

        //Hier prüfen wir ob das Element schon existiert, damit es nur einmal hinzugefügt wird. 
        var element =  document.getElementById('newLink1');
        if (typeof(element) == 'undefined' || element == null)
        {
          // Exists.
            var newLink = document.createElement('a');
            var newText = document.createTextNode('You did it! Click here to open a new tab and resize again.');
            newLink.appendChild(newText);
            newLink.id = 'newLink1';
            newLink.style.fontFamily = "BIZUDMincho-Regular";
            newLink.style.letterSpacing = "normal";
            newLink.style.fontStyle = "oblique";
            newLink.style.fontSize = "40px";
            newLink.style.textDecoration = "none";
            newLink.style.color = "black";
            newLink.style.animation = "glowing 1700ms infinite";
            newLink.href = '#';
            newLink.onclick=function(){window.open('index_02.html','name','width=800,height=400')}
            document.getElementById('main').appendChild(newLink);
            //Inhalt löschen
            y = document.querySelectorAll('headline'); 
                for (let i= y.length; i > 0; i--) {  
	                y[i].remove();
            } ///Wieso werden die Headlines nicht gelöscht?
            const element2 = document.getElementById('header');
            element2.remove();
        }

    } else {
        document.body.style.background = "none";
        /*document.body.style.backgroundColor = "gray";*/
    }
}
/*location.reload();*/
$(".antwort").hide();
$("#header .frage").on("click", function(){
    $(this).next().toggle();
})
.css ("cursor", "pointer");