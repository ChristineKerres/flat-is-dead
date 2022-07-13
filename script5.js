
//Check if window width is less than or equal to 600,then change bg
document.onload = checkWidth();
window.onresize = checkWidth;

console.log(innerWidth);
console.log(innerHeight);

function checkWidth() {
    console.log("resize")
    if (window.innerWidth < 1100 && window.innerWidth > 900 && window.innerHeight < 400) {
        document.body.style.background = "radial-gradient(circle, rgba(0,168,138,1) 0%, rgba(0,168,138,0.72) 35%, rgba(86,182,165,0.47) 100%)";
        document.body.style.backgroundSize = "cover";  ///funktioniert nicht
        ///Fenster öffnet sich automatisch

        ///Link

        //Hier prüfen wir ob das Element schon existiert, damit es nur einmal hinzugefügt wird. 
        var element =  document.getElementById('newLink5');
        if (typeof(element) == 'undefined' || element == null)
        {
          // Exists.
            var newLink = document.createElement('a');
            var newText = document.createTextNode('Wrap it up!');
            newLink.appendChild(newText);
            newLink.id = 'newLink5';
            newLink.style.fontFamily = "BIZUDMincho-Regular";
            newLink.style.fontSize = "40px";
            newLink.style.letterSpacing = "normal";
            newLink.style.fontStyle = "oblique";
            newLink.style.textDecoration = "none";
            newLink.style.color = "black";
            newLink.style.animation = "glowing 1700ms infinite";
            newLink.href = '#';
            newLink.onclick=function(){window.open('index_06.html','window5','width=1350,height=900')}
            document.getElementById('main').prepend(newLink);
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