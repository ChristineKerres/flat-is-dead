
//Check if window width is less than or equal to 600,then change bg
document.onload = checkWidth();
window.onresize = checkWidth;

console.log(innerWidth);
console.log(innerHeight);

function checkWidth() {
    console.log("resize")
    if (window.innerWidth < 600 && window.innerHeight < 800 && window.innerHeight > 700) {
        document.body.style.background = "radial-gradient(circle, rgba(0,168,138,1) 0%, rgba(0,168,138,0.72) 35%, rgba(86,182,165,0.47) 100%)";
        document.body.style.backgroundSize = "cover";  ///funktioniert nicht
        ///Fenster öffnet sich automatisch

        ///Link

        //Hier prüfen wir ob das Element schon existiert, damit es nur einmal hinzugefügt wird. 
        var element =  document.getElementById('newLink2');
        if (typeof(element) == 'undefined' || element == null)
        {
          // Exists.
            var newLink = document.createElement('a');
            var newText = document.createTextNode('Open next window.');
            newLink.appendChild(newText);
            newLink.id = 'newLink2';
            newLink.style.fontFamily = "BIZUDMincho-Regular";
            newLink.style.fontSize = "40px";
            newLink.style.letterSpacing = "normal";
            newLink.style.fontStyle = "oblique";
            newLink.style.textDecoration = "none";
            newLink.style.color = "black";
            newLink.style.animation = "glowing 1700ms infinite";
            newLink.href = '#';
            newLink.onclick=function(){window.open('index_03.html','window2','width=800,height=400')}
            document.getElementById('main').prepend(newLink);
        }

    } else {
        document.body.style.background = "none";
        /*document.body.style.backgroundColor = "gray";*/
    }
}
/*location.reload();*/


/////Infobox

const openInfoboxButtons = document.querySelectorAll('[data-infobox-target]')
const overlay = document.getElementById('overlay2')

openInfoboxButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const infobox = document.querySelector(button.dataset.infoboxTarget)
        openInfobox(infobox)
    })
})

overlay.addEventListener('click', () =>{
    const infoboxs = document.querySelectorAll('.infobox2.active')
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

$(".antwort").hide();
$("#header .frage").on("click", function(){
    $(this).next().toggle();
})
.css ("cursor", "pointer");