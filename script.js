/////Infobox
const openInfoboxButtons = document.querySelectorAll("[data-infobox-target]");
const overlay = document.getElementById("overlay");

openInfoboxButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const infobox = document.querySelector(button.dataset.infoboxTarget);
    openInfobox(infobox);
  });
});

overlay.addEventListener("click", () => {
  const infoboxs = document.querySelectorAll(".infobox.active");
  infoboxs.forEach((infobox) => {
    closeInfobox(infobox);
  });
});

function openInfobox(infobox) {
  if (infobox == null) return;
  infobox.classList.add("active");
  overlay.classList.add("active");
}
function closeInfobox(infobox) {
  if (infobox == null) return;
  infobox.classList.remove("active");
  overlay.classList.remove("active");
}

///automatische Slideshow
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("headline");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//Check if window width is less than or equal to 600,then change bg
document.onload = checkWidth();
window.onresize = checkWidth;

console.log(innerWidth);
console.log(innerHeight);

function checkWidth() {
  console.log("resize");
  if (
    window.innerWidth < 2000 &&
    window.innerHeight < 270 &&
    window.innerWidth > 1200
  ) {
    document.body.style.background =
      "radial-gradient(circle, rgba(0,168,138,1) 0%, rgba(0,168,138,0.72) 35%, rgba(86,182,165,0.47) 100%)";
    document.body.style.backgroundSize = "cover"; ///funktioniert nicht
    ///Fenster öffnet sich automatisch

    ///Link

    //Hier prüfen wir ob das Element schon existiert, damit es nur einmal hinzugefügt wird.
    var element = document.getElementById("newLink1");
    if (typeof element == "undefined" || element == null) {
      // Exists.
      var newLink = document.createElement("a");
      var newText = document.createTextNode(
        "You did it! Click here to open a new tab and resize again."
      );
      newLink.appendChild(newText);
      newLink.id = "newLink1";
      newLink.style.fontFamily = "BIZUDMincho-Regular";
      newLink.style.letterSpacing = "normal";
      newLink.style.fontStyle = "oblique";
      newLink.style.fontSize = "40px";
      newLink.style.textDecoration = "none";
      newLink.style.color = "black";
      newLink.style.animation = "glowing 1700ms infinite";
      newLink.href = "#";
      newLink.onclick = function () {
        window.open("index_02.html", "name", "width=800,height=400");
      };
      document.getElementById("main").appendChild(newLink);
      //Inhalt löschen
      let y = document.querySelectorAll("headline");
      for (let i = y.length; i > 0; i--) {
        y[i].remove(headline);
      }
      ///Wieso werden die Headlines nicht gelöscht?
      ///Funktioniert nicht, deswegen Scrolling unmöglich machen...:/
      document.body.style.overflow = "hidden";

      const element2 = document.getElementById("header");
      element2.remove();
      let slides = document.getElementsByClassName("headline");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    }
  } else if (window.innerWidth < 768) {
    document.body.style.background = "rgba(249,124,255,0.4009978991596639)";
  } else {
    document.body.style.background = "none";
    /*document.body.style.backgroundColor = "gray";*/
  }
}
/*location.reload();*/
$(".antwort").hide();
$("#header .frage")
  .on("click", function () {
    $(this).next().toggle();
  })
  .css("cursor", "pointer");
