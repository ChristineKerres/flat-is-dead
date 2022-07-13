
//Check if window width is less than or equal to 600,then change bg
document.onload = checkWidth();
window.onresize = checkWidth;

console.log(innerWidth);
console.log(innerHeight);

function checkWidth() {
    console.log("resize")
    if (window.innerWidth < 300 && window.innerHeight < 1100 && window.innerHeight > 700) {
        document.body.style.background = "radial-gradient(circle, rgba(0,168,138,1) 0%, rgba(0,168,138,0.72) 35%, rgba(86,182,165,0.47) 100%)";
        document.body.style.backgroundSize = "cover";  ///funktioniert nicht
        ///Fenster öffnet sich automatisch

        ///Link

        //Hier prüfen wir ob das Element schon existiert, damit es nur einmal hinzugefügt wird. 
        var element =  document.getElementById('newLink3');
        if (typeof(element) == 'undefined' || element == null)
        {
          // Exists.
            var newLink = document.createElement('a');
            var newText = document.createTextNode('Just for fun, lets see what happens when form dictates content.');
            newLink.appendChild(newText);
            newLink.id = 'newLink3';
            newLink.style.fontFamily = "BIZUDMincho-Regular";
            newLink.style.fontSize = "40px";
            newLink.style.letterSpacing = "normal";
            newLink.style.fontStyle = "oblique";
            newLink.style.textDecoration = "none";
            newLink.style.color = "black";
            newLink.style.animation = "glowing 1700ms infinite";
            newLink.href = '#';
            newLink.onclick=function(){window.open('index_04.html','window3','width=800,height=400')}
            document.getElementById('main').appendChild(newLink);
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

